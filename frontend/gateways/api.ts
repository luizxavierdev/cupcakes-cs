export type RequestOptions = {
  params?: Record<string, string | number | boolean>;
  tag?: string;
};

// Função para garantir que a URL sempre tenha protocolo
function ensureProtocol(url: string): string {
  if (!url) return url;
  // Se já tem protocolo, retorna como está
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  // Se não tem protocolo, adiciona https://
  return `https://${url}`;
}

// Função para obter a URL base da API
function getApiBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_API_URL || process.env.BACKEND_URL || '';
  return ensureProtocol(url);
}

// Função auxiliar para parsear JSON com tratamento de erro
async function parseJsonSafely(res: Response): Promise<any> {
  const contentType = res.headers.get('content-type') || '';
  const text = await res.text();
  
  // Se não for JSON, retorna erro com o texto
  if (!contentType.includes('application/json')) {
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}. Response: ${text.substring(0, 200)}`);
    }
    throw new Error(`Expected JSON but got ${contentType}: ${text.substring(0, 200)}`);
  }
  
  // Se for JSON, tenta fazer parse
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`Failed to parse JSON: ${text.substring(0, 200)}`);
  }
}

export const api = {
  _parseParams(params?: RequestOptions["params"]) {
    if (!params) return "";
    return (
      "?" +
      new URLSearchParams(
        Object.fromEntries(
          Object.entries(params).map(([key, value]) => [key, String(value)])
        )
      ).toString()
    );
  },

  _parseResource(resource: string) {
    if (resource.startsWith("/")) return resource;
    return `/${resource}`;
  },

  async get<Response>(resource: string, options?: RequestOptions) {
    const res = await fetch(
      `${getApiBaseUrl()}${api._parseResource(
        resource
      )}${api._parseParams(options?.params)}`,
      {
        ...(options?.tag && {
          next: {
            tags: [options.tag],
          },
        }),
      }
    );
    if (!res.ok) {
      const error = await parseJsonSafely(res);
      throw new Error(error.message || `HTTP ${res.status}: ${res.statusText}`);
    }
    return (await parseJsonSafely(res)) as Response;
  },

  async post<Response, Request = unknown>(
    resource: string,
    body?: Request,
    options?: RequestOptions
  ) {
    const res = await fetch(
      `${getApiBaseUrl()}${api._parseResource(
        resource
      )}${api._parseParams(options?.params)}`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json;charset=UTF-8" },
      }
    );
    if (!res.ok) {
      const error = await parseJsonSafely(res);
      throw new Error(error.message || `HTTP ${res.status}: ${res.statusText}`);
    }
    return (await parseJsonSafely(res)) as Response;
  },

  async patch<Response, Request = unknown>(
    resource: string,
    body?: Request,
    options?: RequestOptions
  ) {
    const res = await fetch(
      `${getApiBaseUrl()}${api._parseResource(
        resource
      )}${api._parseParams(options?.params)}`,
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json;charset=UTF-8" },
      }
    );
    if (!res.ok) {
      const error = await parseJsonSafely(res);
      throw new Error(error.message || `HTTP ${res.status}: ${res.statusText}`);
    }
    return (await parseJsonSafely(res)) as Response;
  },
};

export interface PaginationDTO<T> {
  numberOfElements: number;
  totalElements: number;
  page: number;
  totalPages: number;
  hasContent: boolean;
  nextPage: boolean;
  previousPage: any;
  content: T[];
}
