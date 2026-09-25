import Image from "next/image";
import avatar from "../assets/image/poster.png";

export default function Avatar() {
  return (
    <Image src={avatar} alt="pfp-1" className="h-auto w-auto rounded-full" />
  );
}
