import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Rota para limpar o cache de imagens e assets
 * 
 * Uso:
 * POST /api/clear-cache?secret=YOUR_SECRET_KEY
 * 
 * Query params:
 * - secret: Chave secreta para autenticação (obrigatória)
 * - path: Path específico para limpar (opcional, ex: /assets)
 * 
 * Variável de ambiente necessária:
 * - CACHE_CLEAR_SECRET: Chave secreta para autenticação
 * 
 * Exemplos de uso com CURL:
 * 
 * 1. Verificar se a rota está ativa (GET):
 *    curl https://seu-dominio.com/api/clear-cache
 *    curl http://localhost:3000/api/clear-cache
 * 
 * 2. Limpar todo o cache (POST):
 *    curl -X POST "https://seu-dominio.com/api/clear-cache?secret=minha-chave-secreta"
 *    curl -X POST "http://localhost:3000/api/clear-cache?secret=minha-chave-secreta"
 * 
 * 3. Limpar cache de um path específico:
 *    curl -X POST "https://seu-dominio.com/api/clear-cache?secret=minha-chave-secreta&path=/assets"
 *    curl -X POST "http://localhost:3000/api/clear-cache?secret=minha-chave-secreta&path=/category"
 * 
 * 4. Com formatação JSON na resposta:
 *    curl -X POST "https://seu-dominio.com/api/clear-cache?secret=minha-chave-secreta" | jq
 * 
 * 5. Com headers customizados:
 *    curl -X POST \
 *      "https://seu-dominio.com/api/clear-cache?secret=minha-chave-secreta" \
 *      -H "Content-Type: application/json" \
 *      -v
 * 
 * 6. Para usar em scripts (salvando resposta):
 *    curl -X POST "https://seu-dominio.com/api/clear-cache?secret=minha-chave-secreta" \
 *      -o response.json \
 *      -w "\nStatus: %{http_code}\n"
 * 
 * 7. Integração com webhook do Vercel (após deploy):
 *    Configure no Vercel: Settings → Git → Deploy Hooks
 *    URL: https://seu-dominio.com/api/clear-cache?secret=minha-chave-secreta
 *    Method: POST
 */
export async function POST(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const secret = searchParams.get("secret");
    const pathToRevalidate = searchParams.get("path");

    // Verificar autenticação
    const expectedSecret = process.env.CACHE_CLEAR_SECRET;
    
    if (!expectedSecret) {
      return NextResponse.json(
        { error: "CACHE_CLEAR_SECRET não configurada" },
        { status: 500 }
      );
    }

    if (!secret || secret !== expectedSecret) {
      return NextResponse.json(
        { error: "Não autorizado. Secret inválido." },
        { status: 401 }
      );
    }

    // Revalidar paths específicos ou todos
    const revalidatedPaths: string[] = [];
    
    if (pathToRevalidate) {
      revalidatePath(pathToRevalidate);
      revalidatedPaths.push(pathToRevalidate);
    } else {
      // Revalidar paths comuns
      const pathsToRevalidate = [
        "/",
        "/assets",
        "/category",
        "/shopping-bag",
        "/order",
      ];
      
      pathsToRevalidate.forEach((p) => {
        revalidatePath(p);
        revalidatedPaths.push(p);
      });
    }

    return NextResponse.json({
      success: true,
      message: "Cache revalidado com sucesso",
      revalidatedPaths,
      timestamp: new Date().toISOString(),
      note: "O cache de imagens do Next.js será limpo automaticamente na próxima requisição",
    });
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error("Erro ao limpar cache:", error);
    return NextResponse.json(
      { 
        error: "Erro ao limpar cache",
        message: error?.message || "Erro desconhecido"
      },
      { status: 500 }
    );
  }
}

/**
 * GET para verificar se a rota está funcionando (sem limpar cache)
 */
export async function GET() {
  return NextResponse.json({
    message: "Rota de limpeza de cache ativa",
    usage: "POST /api/clear-cache?secret=YOUR_SECRET_KEY&path=/optional-path",
    note: "Use POST com secret para limpar o cache",
    vercelBuildCache: {
      info: "O cache de build da Vercel não pode ser limpo via API",
      methods: [
        "1. Via Dashboard: Settings → General → Clear Build Cache",
        "2. Via CLI: vercel --force (força novo build sem cache)",
        "3. Via Deploy: adicione ?clear-cache=true na URL do deploy",
        "4. Via Environment Variable: FORCE_REBUILD=true no próximo deploy",
      ],
      cliCommands: [
        "vercel --force",
        "vercel build --force",
        "vercel deploy --force",
      ],
    },
  });
}

