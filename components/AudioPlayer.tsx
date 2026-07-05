"use client";

import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
      }).catch((err) => {
        console.log("Erro ao tocar áudio:", err);
      });
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-10">

      <audio ref={audioRef} src="/track.mp3" />

      <button
        onClick={togglePlay}
        className="bg-purple-600 px-6 py-3 rounded-full text-white"
      >
        {playing ? "Pause" : "Play"}
      </button>

    </div>
  );
}