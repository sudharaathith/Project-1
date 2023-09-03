import Link from "next/link";

export default function() {
    return (
        <div className=" my-auto">
            <Link href={"/signin"} className="" >SignIn</Link>
        </div>
    );
}