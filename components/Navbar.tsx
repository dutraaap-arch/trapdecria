import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center py-6">
      <Image
        src="/bocarica.png"
        alt="BocaRica"
        width={140}
        height={140}
        className="object-contain"
      />
    </div>
  );
}