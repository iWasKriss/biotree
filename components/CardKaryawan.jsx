import Avatar from "./Avatar";
import CardLink from "./CardLink";
import { AirVent } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export default function CardKaryawan() {
  return (
    <div className="w-auto h-auto border-2 border-white rounded-xl flex flex-col items-center p-6 drop-shadow-lg">
      {/* Profile Picture */}
      <h1>
        <Avatar />
      </h1>
      <h2 className="text-lg font-bold text-center">{dataLinkUtama[0].nama}</h2>
      <h3 className="text-sm text-center">{dataLinkUtama[0].biodata}</h3>
      {/* Links */}
      <div>
        {dataLinkUtama.map((dataLinkSementara, index) => (
          <CardLink mintaData={dataLinkSementara} key={index} />
        ))}
      </div>
    </div>
  );
}

const dataLinkUtama = [
  {
    nama: "Christopher Joshua",
    biodata: "IT Business Developer @PT BPR Multi Sembada Dana",
    link: "https://youtube.com",
    text: "Youtube",
    icon: <AirVent />,
  },
  {
    link: "https://instagram.com",
    text: "Instagram",
    icon: <FaYoutube size={24} />,
  },
];
