"use client";

import { useState } from "react";

import { Button } from "@/components/atom/button";
import { useTranslations } from "@/hooks/use-translations";

interface DownloadButtonProps {
  videoPath: string;
}

export function DownloadButton({ videoPath }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const t = useTranslations();

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // Fazer fetch do arquivo
      const response = await fetch(videoPath);
      if (!response.ok) {
        throw new Error("Erro ao baixar o arquivo");
      }
      
      const blob = await response.blob();
      
      // Criar URL do blob
      const url = window.URL.createObjectURL(blob);
      
      // Criar link temporário e clicar
      const link = document.createElement("a");
      link.href = url;
      link.download = videoPath.split("/").pop() || "video.mp4";
      document.body.appendChild(link);
      link.click();
      
      // Limpar
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar vídeo:", error);
      // Fallback: abrir em nova aba
      window.open(videoPath, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      extraClassNames=""
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? "Baixando..." : t.buttons.download}
    </Button>
  );
}

