import logo from "../public/assets/logo/logo_sembada.png";
import Image from "next/image";
import CardKaryawan from "../components/CardKaryawan";
import { dataMarketing } from "../data/database";

export default function Home() {
  console.log(dataMarketing);
  return (
    // MAIN CONTAINER
    <main className="w-auto h-auto bg-linear-to-b from-red-500 to-red-900 p-4 flex items-center flex-col text-white">
      {/* HEADER */}
      <header className="w-auto h-auto p-4">
        <Image src={logo} alt="Logo" className="h-12 w-auto" />
      </header>

      {/* MAIN CONTENT */}
      <body className="w-screen flex items-center justify-center flex-col bg-amber-400">
        <div>
          {dataMarketing.map((data, index) => (
            <CardKaryawan data={data} key={index} />
          ))}
        </div>
      </body>
    </main>
  );
}
