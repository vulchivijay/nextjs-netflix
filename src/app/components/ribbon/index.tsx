"use client"

import { MouseEvent } from 'react';
import PopcornIcon from '../icons/Popcorn';
import Link from 'next/link';
import style from "../../page.module.css";

export default function Ribbon() {

  const handleLearnMore = (event: MouseEvent<HTMLAnchorElement>) => {
    console.log('Learn more clicked:', event);
  };

  return (
    <section className={`${style.ribbon} ribbon py-10`}>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="w-full flex items-center gap-8">
          <PopcornIcon width={100} height={100} aria-label="Pop corn" />
          <div className={`${style.box} w-full flex items-center justify-between text-white px-6 py-3 rounded-2xl shadow-xl`}>
            <div>
              <h1 className="text-lg font-bold">The Netflix you love for just $7.99.</h1>
              <p className="text-sm">Stream unlimited entertainment anytime, anywhere.</p>
            </div>
            <Link href="/learnmore" className="px-6 py-3 bg-red-600 text-white rounded" onClick={(event) => handleLearnMore(event)}>Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
