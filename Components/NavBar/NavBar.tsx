import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import LoginManager from "./LoginManager";

export default function () {
  return (
    <nav className="flex p-1 border shadow-sm fixed top-0 left-0 w-screen justify-between px-7">
      <div className="flex item-center font-bold">
        <Image src={"/Questhub.svg"} width={30} height={30} alt={"QusetHub"} />
        <span className="text-center my-auto ml-2">
          Quest<span className=" text-blue-800">Hub</span>
        </span>
      </div>
      <SearchBar />
      <div className="flex justify-between gap-7 my-auto text-sm mr-9">
      <Link href="/">Home</Link>
      <Link href="/a=about">About</Link>
      <LoginManager />
    </div>
    </nav>
  );
}
