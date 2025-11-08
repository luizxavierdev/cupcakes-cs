import { Button } from "@/components/atom/button";
import { title } from "@/components/primitives";
import { getTranslations } from "@/config/translations";

import { BackButton } from "../../[path]/components/back-button";
import { VideoPlayer } from "../../[path]/components/video-player";

export default async function VideoApresentacaoPage() {
  const videoPath = "/docs/situacao-3/05-video-apresentacao.mp4";
  const videoTitle = "Vídeo de Apresentação";
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
            {t.buttons?.download || "Download"}
          </Button>
        </a>
      </div>
    </div>
  );
}

