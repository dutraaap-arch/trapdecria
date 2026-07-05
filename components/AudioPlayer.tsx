"use client";

import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="mt-16 flex justify-center">
      
      <div className="bg-black/60 border border-white/10 backdrop-blur-xl p-6 rounded-2xl w-[90%] max-w-xl shadow-2xl">

        <audio ref={audioRef} src="/track.mp3" />

        {/* botão play grande */}
        <div className="flex flex-col items-center gap-4">

          <button
            onClick={toggle}
            className="w-20 h-20 rounded-full bg-white text-black text-xl font-bold hover:scale-105 transition"
          >
            {playing ? "⏸" : "▶"}
          </button>

          <div className="text-center">
            <p className="font-semibold">Alcash - Track Oficial</p>
            <p className="text-gray-400 text-sm">Single</p>
          </div>

        </div>
      </div>

    </div>
  );
}