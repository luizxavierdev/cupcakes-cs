"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/atom/button";

interface VideoPlayerProps {
  src: string;
  title: string;
}

export function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const updatePlaying = () => setIsPlaying(!video.paused);
    const updateFullscreen = () => setIsFullscreen(!!document.fullscreenElement);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("play", updatePlaying);
    video.addEventListener("pause", updatePlaying);
    video.addEventListener("ended", updatePlaying);
    document.addEventListener("fullscreenchange", updateFullscreen);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("play", updatePlaying);
      video.removeEventListener("pause", updatePlaying);
      video.removeEventListener("ended", updatePlaying);
      document.removeEventListener("fullscreenchange", updateFullscreen);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen().catch((err) => {
        console.error("Erro ao entrar em fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full bg-default-100 rounded-lg overflow-hidden shadow-lg">
      <div className="relative aspect-video bg-black">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full"
          playsInline
          onDoubleClick={toggleFullscreen}
        >
          Seu navegador não suporta a tag de vídeo.
        </video>

        {/* Overlay de controles quando pausado */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110"
              aria-label="Play"
            >
              <svg
                className="w-10 h-10 text-default-900 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Controles */}
      <div className="p-4 space-y-3">
        {/* Barra de progresso */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-default-600 w-16 text-right">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="flex-1 h-2 bg-default-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <span className="text-sm text-default-600 w-16">
            {formatTime(duration)}
          </span>
        </div>

        {/* Controles principais */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-2 rounded-lg hover:bg-default-200 transition-colors"
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              )}
            </button>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-default-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001 10.5c0 1.23.21 2.41.573 3.435.343 1.24 1.52 1.905 2.66 1.905h1.932l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM14.657 2.992a.75.75 0 011.06 0A10.97 10.97 0 0118 10.5a10.97 10.97 0 01-2.283 7.508.75.75 0 11-1.06-1.06A9.47 9.47 0 0016.5 10.5c0-2.48-.92-4.75-2.44-6.448a.75.75 0 010-1.06zm-2.829 2.828a.75.75 0 011.06 0 6.23 6.23 0 010 8.344.75.75 0 11-1.06-1.06 4.73 4.73 0 000-6.224.75.75 0 010-1.06z" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-2 bg-default-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg hover:bg-default-200 transition-colors"
            aria-label="Tela cheia"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {isFullscreen ? (
                <path d="M4.5 2a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0V3.5h1.75a.75.75 0 000-1.5H4.5zm10.5 0a.75.75 0 00-.75.75v1.75a.75.75 0 001.5 0V3.5h1.75a.75.75 0 000-1.5H15zM4.5 18a.75.75 0 01-.75-.75v-1.75a.75.75 0 00-1.5 0v2.5c0 .414.336.75.75.75h2.5a.75.75 0 000-1.5H4.5zM18 18a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-1.5 0v1.75H14.25a.75.75 0 000 1.5H18z" />
              ) : (
                <path d="M2 4.75C2 3.784 2.784 3 3.75 3h4.5a.75.75 0 010 1.5h-4.5a.25.25 0 00-.25.25v4.5a.75.75 0 01-1.5 0v-4.5zm14-1.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 010-1.5h4.5c.966 0 1.75.784 1.75 1.75v4.5a.75.75 0 01-1.5 0v-4.5zM2 15.25a.75.75 0 00.75.75h4.5a.75.75 0 010 1.5H3.75c-.966 0-1.75-.784-1.75-1.75v-4.5a.75.75 0 011.5 0v4.5zm14 0v-4.5a.75.75 0 011.5 0v4.5c0 .966-.784 1.75-1.75 1.75h-4.5a.75.75 0 010-1.5h4.5a.25.25 0 00.25-.25z" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

