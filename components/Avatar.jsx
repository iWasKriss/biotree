import Image from "next/image";
import avatar from "../assets/image/poster.png";

export default function Avatar() {
  return <Image src={avatar} alt="pfp-1" className="h-24 w-24 rounded-full" />;
}
