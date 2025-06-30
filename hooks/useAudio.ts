"use client";
import { useState } from "react";

export function useAudio() {
  const [playingTrack, setPlayingTrack] = useState<any>();
  const [loadingTrack, setLoadingTrack] = useState(false);

  const playTrack = (track: any) => {
    let audioTag = document.getElementById(
      `audio-player-${track?.id}`
    ) as HTMLAudioElement;

    if (!audioTag) {
      audioTag = document.createElement("audio");
      audioTag.src = track?.preview?.results?.[0]?.previewUrls?.[0];
      setLoadingTrack(true);
      audioTag.onload = () => {
        setLoadingTrack(false);
      };
      audioTag.id = `audio-player-${track.id}`;
      audioTag.onerror = () => setLoadingTrack(false);
      document.body.appendChild(audioTag);
    }

    audioTag.play();
    setPlayingTrack(track);
  };

  const stopTrack = () => {
    const audioTag = document.getElementById(
      `audio-player-${playingTrack?.id}`
    ) as HTMLAudioElement;
    if (audioTag) {
      audioTag.pause();
      setPlayingTrack(null);
    }
  };
  return { playingTrack, playTrack, stopTrack, loadingTrack };
}
