
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavUnderLine from "./NavUnderLine";

export default function() {
    const path = usePathname();
    return (
        <div className=" my-auto">
            <Link href={"/auth/signin"} className="" >Sign In{path === "/auth/signin" && <NavUnderLine />}</Link>
        </div>
    );
}