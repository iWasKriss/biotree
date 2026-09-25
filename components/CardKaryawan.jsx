"use client";

import Image from "next/image";

function bukaWebsite(linkWebsite) {
  window.open(linkWebsite, "_blank");
}

export default function CardKaryawan({ data }) {
  console.log(data);
  return (
    // Wrapper Card Karyawan

    <div className="w-auto h-auto rounded-4xl flex flex-col items-center p-6 drop-shadow-lg drop-shadow-black bg-linear-to-b from-red-500 to-red-900">
      {/* Profile Picture */}

      <Image
        src={data.profilePicture}
        alt="pfp-1"
        className="w-24 h-24 rounded-full overflow-hidden mb-4 object-cover object-top"
        width={96}
        height={96}
      />

      {/* Nama */}
      <h2 className="text-lg font-bold text-center">{data.nama}</h2>

      {/* Biodata atau Jabatan */}
      <h3 className="text-sm text-center mbe-10">{data.biodata}</h3>

      {/* Links */}
      <div>
        <div
          onClick={() => bukaWebsite(data.linkWebsite)}
          className="w-100 h-16 border-2 border-white rounded-full flex items-center gap-10 m-2 hover:scale-105 transition-transform cursor-pointer drop-shadow-lg px-4"
        >
          {data.iconWebsite}
          <p className="">{data.textWebsite}</p>
        </div>
        <div
          onClick={() => bukaWebsite(data.linkWa)}
          className="w-100 h-16 border-2 border-white rounded-full flex items-center justify-center m-2 hover:scale-105 transition-transform cursor-pointer drop-shadow-lg px-4"
        >
          {data.iconWa}
          <p className="m-auto">{data.textWa}</p>
        </div>
      </div>
    </div>
  );
}
