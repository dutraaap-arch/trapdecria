"use client";

const beats = [
  { name: "Beat 1", src: "/track1.mp3" },
  { name: "Beat 2", src: "/track2.mp3" },
];

export default function BeatGrid({ onSelect }: any) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-10 px-5">
      {beats.map((b, i) => (
        <div
          key={i}
          onClick={() => onSelect(b.src)}
          className="bg-zinc-800 p-5 rounded-xl text-white cursor-pointer hover:bg-zinc-700"
        >
          {b.name}
        </div>
      ))}
    </div>
  );
}