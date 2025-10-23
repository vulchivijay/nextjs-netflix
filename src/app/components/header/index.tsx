"use client"

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/assets/images/netflix-logo.png';

export default function Header() {
  return (
    <header className="sticky z-20 top-0 left-0 bg-black shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <Image src={Logo} width={200} alt="netflix" />
        </Link>
      </div>
    </header>
  )
}