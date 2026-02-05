"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full relative py-4 text-[#ede0d0] bg-[#261a17] shadow-lg z-10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div></div>
          <div className="flex items-center text-sm sm:text-xl tracking-wider">
            <Link href="/" className="hover:text-amber-400 px-3 py-2">
              HOME
            </Link>
            <Link href="/bio" className="hover:text-amber-400 px-3 py-2">
              BIO
            </Link>
            <Link href="/music" className="hover:text-amber-400 px-3 py-2">
              MUSIC
            </Link>
            <Link href="/cv" className="hover:text-amber-400 px-3 py-2">
              CV
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
