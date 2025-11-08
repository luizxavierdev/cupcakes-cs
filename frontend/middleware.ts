import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Permitir que arquivos estáticos sejam servidos normalmente
  // Verificar se é uma requisição de navegação (HTML) ou de recurso (arquivo)
  const isResourceRequest = /\.(mp4|webm|ogg|mov|jpg|jpeg|png|gif|svg|pdf|css|js|woff|woff2|ttf|eot)$/i.test(pathname);
  
  // Se for uma requisição de recurso estático, deixar passar
  if (isResourceRequest) {
    return NextResponse.next();
  }

  // Mapeamento de vídeos para suas rotas customizadas (apenas para navegação)
  const videoRoutes: Record<string, string> = {
    "05-video-apresentacao": "/video-apresentacao",
    "05-video-apresentacao.mp4": "/video-apresentacao",
    "Vídeo-da-Solução-atualizada": "/video-solucao",
    "Vídeo-da-Solução-atualizada.mp4": "/video-solucao",
    "cupcakes-cs-Mobile": "/docs/cupcakes-cs-mobile/cupcakes-cs-mobile",
    "cupcakes-cs-desktop": "/docs/cupcakes-cs-desktop/cupcakes-cs-desktop",
  };

  // Interceptar apenas requisições de navegação na pasta docs
  if (pathname.startsWith("/docs/") && !isResourceRequest) {
    const fileName = decodeURIComponent(pathname.split("/").pop() || "");
    
    // Verificar se é um vídeo conhecido (sem extensão, pois já filtramos recursos)
    const customRoute = videoRoutes[fileName];
    
    if (customRoute) {
      const url = new URL(customRoute, request.url);
      const response = NextResponse.redirect(url);
      response.headers.set("Cache-Control", "no-store, must-revalidate");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/docs/:path*",
  ],
};

