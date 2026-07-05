"use client";

import { useRef, useState, useEffect } from "react";

const tracks = [
  { name: "Track 1", src: "/track1.mp3" },
  { name: "Track 2", src: "/track2.mp3" },
];

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", update);
    return () => audio.removeEventListener("timeupdate", update);
  }, []);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  }

  function nextTrack() {
    const next = (current + 1) % tracks.length;
    setCurrent(next);
    setPlaying(false);

    setTimeout(() => {
      audioRef.current?.play();
      setPlaying(true);
    }, 100);
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-10 bg-zinc-900 p-5 rounded-2xl">

      <audio ref={audioRef} src={tracks[current].src} />

      <h2 className="text-white text-center mb-4">
        {tracks[current].name}
      </h2>

      {/* PROGRESS BAR */}
      <div className="w-full bg-zinc-700 h-2 rounded">
        <div
          className="bg-purple-500 h-2 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* CONTROLES */}
      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={togglePlay}
          className="bg-purple-600 px-6 py-2 rounded-full text-white"
        >
          {playing ? "Pause" : "Play"}
        </button>

        <button
          onClick={nextTrack}
          className="bg-zinc-700 px-6 py-2 rounded-full text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}