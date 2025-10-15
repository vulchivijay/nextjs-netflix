import Image from "next/image";
import Link from "next/link";

import Logo from "./../../../../public/assets/images/netflix-logo.png"

export default function LandingHeader() {
  return (
    <header>
      <div className="max-w-6xl m-auto flex items-center justify-between py-2">
        <Link href="/" className="relative z-10">
          <Image src={Logo} width="150" alt="netflix" />
        </Link>
        <nav className="relative z-10 flex gap-8 text-white">
          <select className="bg-black text-white border-1 rounded-sm px-4 py-1">
            <option value="0">English</option>
            <option value="1">Hindi</option>
            <option value="2">Russia</option>
          </select>
          <Link href="/" className="bg-red-700 px-4 py-1 rounded-sm hover:bg-red-900">Sign In</Link>
        </nav>
      </div>
    </header>
  )
}