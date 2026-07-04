export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold text-white">
        Trap<span className="text-green-500">DeCria</span>
      </h1>

      <input
        type="text"
        placeholder="Pesquisar beats..."
        className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 w-96 text-white outline-none"
      />

      <button className="bg-green-500 text-black font-bold px-5 py-2 rounded-lg">
        Login
      </button>
    </nav>
  );
}