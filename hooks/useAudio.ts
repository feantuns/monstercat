"use client";
import { useState } from "react";

export function useAudio() {
  const [playingTrack, setPlayingTrack] = useState<any>();
  const [loadingTrack, setLoadingTrack] = useState(false);

  const getCurrentAudioTag = () =>
    document.getElementById(
      `audio-player-${playingTrack?.id}`
    ) as HTMLAudioElement;

  const playTrack = (track: any) => {
    let audioTag = document.getElementById(
      `audio-player-${track?.id}`
    ) as HTMLAudioElement;

    if (playingTrack) {
      getCurrentAudioTag()?.pause();
      setPlayingTrack(null);
    }

    if (!audioTag) {
      setPlayingTrack(track);
      setLoadingTrack(true);
      audioTag = document.createElement("audio");
      audioTag.src = track?.preview?.results?.[0]?.previewUrls?.[0];
      audioTag.onload = () => {};
      audioTag.addEventListener("canplay", () => {
        setTimeout(() => {
          setLoadingTrack(false);
          audioTag.play();
        }, 2000);
      });
      audioTag.addEventListener("error", () => setLoadingTrack(false));
      audioTag.addEventListener("ended", () => setPlayingTrack(null));
      audioTag.id = `audio-player-${track.id}`;
      document.body.appendChild(audioTag);
    } else {
      audioTag.play();
      setPlayingTrack(track);
    }
  };

  const stopTrack = () => {
    const audioTag = getCurrentAudioTag();
    if (audioTag) {
      audioTag.pause();
      setPlayingTrack(null);
    }
  };

  const handleClickPlay = ({ track, isPlaying }) => {
    if (isPlaying) {
      stopTrack();
      return;
    }
    playTrack(track);
  };

  return { playingTrack, playTrack, stopTrack, loadingTrack, handleClickPlay };
}
