import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeatGrid from "@/components/BeatGrid";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* overlay cinematográfico */}
      <div className="min-h-screen bg-black/70 backdrop-blur-sm">

        <Navbar />

        {/* LOGO / IDENTIDADE */}
        <div className="text-center mt-20">
          <h1 className="text-7xl font-extrabold tracking-[0.3em]">
            BOCARICA
          </h1>

          <p className="text-gray-400 mt-3">
            Trap • Lifestyle • Music
          </p>
        </div>

        {/* PLAYER CENTRAL */}
        <AudioPlayer />

        {/* CONTEÚDO */}
        <Hero />
        <BeatGrid />

      </div>
    </main>
  );
}