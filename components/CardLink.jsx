"use client";

export default function CardLink({ mintaData }) {
  // Function buat buka website
  function bukaWebsite(linkWebsite) {
    window.open(linkWebsite, "_blank");
  }
  return (
    <div
      onClick={() => bukaWebsite(mintaData.link)}
      className="w-80 h-16 bg-amber-400 rounded-full flex items-center justify-center m-2 hover:scale-105 transition-transform cursor-pointer drop-shadow-lg"
    >
      {mintaData.icon}
      <p>{mintaData.text}</p>
    </div>
  );
}
