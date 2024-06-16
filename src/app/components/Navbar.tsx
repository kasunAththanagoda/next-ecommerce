import Link from "next/link";
import React from "react";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 2xl:px-64 relative">
      {/* Mobile */}
      <div className="flex items-center justify-between h-full">
        <Link href="/">
          <div className="text-2xl tracking-wide">E-shop</div>
        </Link>
        <Menu></Menu>
      </div>
    </div>
  );
}
