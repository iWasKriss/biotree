"use client";

import Image from "next/image";

function bukaWebsite(linkWebsite) {
  window.open(linkWebsite, "_blank");
}

export default function CardKaryawan(data) {
  console.log(data);
  return (
    <div className="w-auto h-auto border-2 border-white rounded-xl flex flex-col items-center p-6 drop-shadow-lg">
      <h1>
        <Image
          src={data.profilePicture}
          alt={data.nama}
          className="h-24 w-24 rounded-full"
        />
      </h1>
      <h2 className="text-lg font-bold text-center">{data.nama}</h2>
      <h3 className="text-sm text-center">{data.biodata}</h3>

      {/* Links */}
      <div>
        <div
          onClick={() => bukaWebsite(data.linkYoutube)}
          className="w-80 h-16 bg-amber-400 rounded-full flex items-center justify-center m-2 hover:scale-105 transition-transform cursor-pointer drop-shadow-lg"
        >
          {data.iconYoutube}
          <p>{data.textYoutube}</p>
        </div>
        <div
          onClick={() => bukaWebsite(data.linkTwitter)}
          className="w-80 h-16 bg-amber-400 rounded-full flex items-center justify-center m-2 hover:scale-105 transition-transform cursor-pointer drop-shadow-lg"
        >
          {data.iconTwitter}
          <p>{data.textTwitter}</p>
        </div>
      </div>
    </div>
  );
}
