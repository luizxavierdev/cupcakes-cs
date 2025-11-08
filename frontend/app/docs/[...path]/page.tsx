import { notFound } from "next/navigation";

import { Button } from "@/components/atom/button";
import { title } from "@/components/primitives";
import { getTranslations } from "@/config/translations";

import { BackButton } from "./components/back-button";
import { VideoPlayer } from "./components/video-player";

type Props = {
  params: Promise<{
    path: string[];
  }>;
};

// Mapeamento de nomes de vídeos para títulos amigáveis
const videoTitles: Record<string, string> = {
  "05-video-apresentacao.mp4": "Vídeo de Apresentação",
  "Vídeo-da-Solução-atualizada.mp4": "Vídeo da Solução",
  "cupcakes-cs-Mobile.mp4": "Demonstração Mobile",
  "cupcakes-cs-desktop.mp4": "Demonstração Desktop",
};

export default async function DocsPage({ params }: Props) {
  const resolvedParams = await params;
  const pathSegments = resolvedParams.path || [];
  const filePath = pathSegments.join("/");
  const fileName = pathSegments[pathSegments.length - 1] || "";

  // Verificar se é um arquivo de vídeo
  const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(fileName);

  if (!isVideo) {
    // Se não for vídeo, retornar 404 ou redirecionar para o arquivo estático
    notFound();
  }

  const videoPath = `/docs/${filePath}`;
  const videoTitle = videoTitles[fileName] || fileName.replace(/\.(mp4|webm|ogg|mov)$/i, "");

  const t = getTranslations("pt");

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6 px-4 py-8">
      <h1 className={title({ size: "lg" })}>{videoTitle}</h1>
      
      <div className="w-full max-w-4xl">
        <VideoPlayer src={videoPath} title={videoTitle} />
      </div>

      <div className="flex gap-4 mt-4">
        <BackButton />
        <a href={videoPath} download>
          <Button extraClassNames="">
            {t.buttons.download}
          </Button>
        </a>
      </div>
    </div>
  );
}

