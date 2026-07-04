import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeatGrid from "@/components/BeatGrid";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <h1 className="text-6xl font-bold text-center mt-20">
        TrapDeCria
      </h1>

      <Hero />

      <BeatGrid />
    </main>
  );
}