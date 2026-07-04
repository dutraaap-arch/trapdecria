type BeatCardProps = {
  title: string;
  producer: string;
  price: string;
};

export default function BeatCard({
  title,
  producer,
  price,
}: BeatCardProps) {
  return (
    <div className="bg-zinc-900 rounded-xl p-5 hover:bg-zinc-800 transition cursor-pointer">
      <div className="h-44 bg-zinc-700 rounded-lg flex items-center justify-center">
        🎵
      </div>

      <h2 className="text-white font-bold text-xl mt-4">
        {title}
      </h2>

      <p className="text-zinc-400">
        {producer}
      </p>

      <div className="flex justify-between items-center mt-5">
        <span className="text-green-500 font-bold">
          {price}
        </span>

        <button className="bg-green-500 text-black px-4 py-2 rounded-lg">
          Comprar
        </button>
      </div>
    </div>
  );
}