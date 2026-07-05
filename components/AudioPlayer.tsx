"use client";

import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl w-full max-w-xl mx-auto mt-10 shadow-lg">
      
      <audio ref={audioRef} src="/track.mp3" />

      <button
        onClick={togglePlay}
        className="bg-white text-black px-6 py-3 rounded-full font-bold"
      >
        {playing ? "Pause" : "Play"}
      </button>

      <p className="text-center mt-4 text-gray-400">
        Alcash - Track Oficial
      </p>

    </div>
  );
}