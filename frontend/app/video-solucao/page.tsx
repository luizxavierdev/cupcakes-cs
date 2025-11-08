import dynamic from "next/dynamic";

import { title } from "@/components/primitives";
import { getTranslations } from "@/config/translations";

const BackButton = dynamic(() => import("@/app/docs/[...path]/components/back-button").then(mod => ({ default: mod.BackButton })), { ssr: false });
const DownloadButton = dynamic(() => import("@/app/docs/[...path]/components/download-button").then(mod => ({ default: mod.DownloadButton })), { ssr: false });

export default async function VideoSolucaoPage() {
  const videoPath = "/docs/situacao-3/Vídeo-da-Solução-atualizada.mp4";
  const videoTitle = "Vídeo da Solução";
  const t = getTranslations("pt");

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6 px-4 py-8">
      <h1 className={title({ size: "lg" })}>{videoTitle}</h1>
      
      <div className="w-full max-w-4xl">
        <video
          controls
          className="w-full rounded-lg shadow-lg"
          preload="metadata"
        >
          <source src={videoPath} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>

      <div className="flex gap-4 mt-4">
        <BackButton />
        <DownloadButton videoPath={videoPath} />
      </div>
    </div>
  );
}
