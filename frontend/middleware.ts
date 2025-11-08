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
      return NextResponse.redirect(new URL("/docs/situacao-3/05-video-apresentacao", request.url));
    }
    
    // Para outros vídeos, redirecionar para a rota dinâmica
    return NextResponse.redirect(new URL(pathWithoutExt, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/docs/:path*.mp4",
    "/docs/:path*.webm",
    "/docs/:path*.ogg",
    "/docs/:path*.mov",
  ],
};

