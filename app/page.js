import logo from "../assets/logo/logo_sembada.png";
import Image from "next/image";
import { AirVent } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import CardKaryawan from "../components/CardKaryawan";

export default function Home() {
  return (
    // MAIN CONTAINER
    <main className="w-screen h-screen bg-linear-to-b from-red-500 to-red-900 p-4 flex items-center flex-col text-white">
      {/* HEADER */}
      <header className="w-auto h-auto p-4">
        <Image src={logo} alt="Logo" className="h-12 w-auto" />
      </header>

      {/* MAIN CONTENT */}
      <body className="w-screen flex items-center justify-center flex-col bg-amber-400">
        <CardKaryawan />
      </body>
    </main>
  );
}

