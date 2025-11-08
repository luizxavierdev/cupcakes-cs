import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Interceptar requisições de vídeos na pasta docs
  if (pathname.startsWith("/docs/") && /\.(mp4|webm|ogg|mov)$/i.test(pathname)) {
    // Remover a extensão e redirecionar para a página customizada
    const pathWithoutExt = pathname.replace(/\.(mp4|webm|ogg|mov)$/i, "");
    
    // Se for o vídeo específico mencionado, redirecionar para a rota customizada
    if (pathname.includes("05-video-apresentacao.mp4")) {
      const url = new URL("/docs/situacao-3/05-video-apresentacao", request.url);
      const response = NextResponse.redirect(url);
      // Adicionar headers para evitar cache
      response.headers.set("Cache-Control", "no-store, must-revalidate");
      return response;
    }
    
    // Para outros vídeos, redirecionar para a rota dinâmica
    const url = new URL(pathWithoutExt, request.url);
    const response = NextResponse.redirect(url);
    // Adicionar headers para evitar cache
    response.headers.set("Cache-Control", "no-store, must-revalidate");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/docs/:path*.(mp4|webm|ogg|mov)",
    "/docs/:path*.mp4",
    "/docs/:path*.webm",
    "/docs/:path*.ogg",
    "/docs/:path*.mov",
  ],
};

