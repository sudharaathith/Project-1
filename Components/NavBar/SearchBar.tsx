import Image from "next/image";

export default function() {
    return (
        <div className="w-1/2 h-full flex border justify-items-center my-auto m-1 p-1 rounded-lg">
            <input className="w-full h-full my-auto px-3 focus:outline-none " type="text" placeholder="Search" />
            <Image src={"/search.svg"} width={23} height={23} alt="search"/>
        </div>
    );
}