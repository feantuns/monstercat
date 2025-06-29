"use client";
import { useState } from "react";

export function useAudio() {
  const [playingTrack, setPlayingTrack] = useState<any>();
  const [loadingTrack, setLoadingTrack] = useState(false);

  const playTrack = (track: any) => {
    const audioTag = document.createElement("audio");
    audioTag.src = track?.preview?.results?.[0]?.previewUrls?.[0];
    setLoadingTrack(true);
    audioTag.onload = () => {
      setLoadingTrack(false);
      audioTag.play();
    };
    audioTag.id = "audio-player";
    audioTag.onerror = () => setLoadingTrack(false);
    document.body.appendChild(audioTag);

    setPlayingTrack(track);
  };

  const stopTrack = () => {
    const audioTag = document.getElementById(
      "audio-player"
    ) as HTMLAudioElement;
    if (audioTag) {
      audioTag.pause();
      audioTag.remove();
      setPlayingTrack(null);
    }
  };
  return { playingTrack, playTrack, stopTrack, loadingTrack };
}
