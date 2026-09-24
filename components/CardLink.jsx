"use client";

export default function CardLink({ mintaData }) {
  // Function buat buka website
  function bukaWebsite(linkWebsite) {
    window.open(linkWebsite, "_blank");
  }
  return (
    <div>
      <div
        onClick={() => bukaWebsite(mintaData.linkYoutube)}
        className="w-80 h-16 bg-amber-400 rounded-full flex items-center justify-center m-2 hover:scale-105 transition-transform cursor-pointer drop-shadow-lg"
      >
        {mintaData.iconYoutube}
        <p>{mintaData.textYoutube}</p>
      </div>
      <div
        onClick={() => bukaWebsite(mintaData.linkTwitter)}
        className="w-80 h-16 bg-amber-400 rounded-full flex items-center justify-center m-2 hover:scale-105 transition-transform cursor-pointer drop-shadow-lg"
      >
        {mintaData.iconTwitter}
        <p>{mintaData.textTwitter}</p>
      </div>
    </div>
  );
}
