export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center bg-black text-white">

      <h1 className="text-6xl font-extrabold">
        Venda seus <span className="text-green-500">Beats</span>
      </h1>

      <p className="mt-6 text-zinc-400 text-xl max-w-xl">
        O marketplace para produtores de Trap, Drill, Plug e Jersey.
      </p>

      <button className="mt-10 bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl transition">
        Explorar Beats
      </button>

    </section>
  );
}