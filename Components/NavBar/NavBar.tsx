import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import LoginManager from "./LoginManager";
import NavLinks from "./NavLinks";

export default function () {
  return (
    <>
    <nav className="flex p-1 border shadow-sm fixed top-0 left-0 w-screen justify-between px-7 z-10 bg-white/70 backdrop-blur-sm">
      <div className="flex item-center font-bold select-none">
        <Image src={"/Questhub.svg"} width={30} height={30} alt={"QusetHub"} />
        <span className="text-center my-auto ml-2">
          Quest<span className=" text-blue-800">Hub</span>
        </span>
      </div>
      <SearchBar />
      <NavLinks />
    </nav>
    <div className="w-screen h-11" />
    </>
  );
}
