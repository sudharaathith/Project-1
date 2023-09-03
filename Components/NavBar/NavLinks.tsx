"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginManager from "./LoginManager";
import { motion } from "framer-motion";
import NavUnderLine from "./NavUnderLine";

export default function () {
  const path = usePathname();
  console.log(path);
  return (
    <motion.div
      layout
      className="flex justify-between gap-7 my-auto text-sm mr-9"
    >
      <Link href="/">Home {path === "/" && <NavUnderLine />}</Link>

      <Link href="/about">About{path === "/about" && <NavUnderLine />}</Link>

      <LoginManager />
    </motion.div>
  );
}
