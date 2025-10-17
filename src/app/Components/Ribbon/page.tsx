'use client'

import { MouseEvent } from 'react';
import Button from "../Button/page";
import style from "./../../page.module.css"
import Image from 'next/image';
import Popcorn from "./../../../../public/assets/popcorn.svg";

export default function Ribbon() {

  const handleLearnMore = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Learn more clicked:', event);
  };

  return (
    <section className={`${style.ribbon} ribbon py-10`}>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="w-full flex items-center gap-8">
          <Image src={Popcorn} width={100} height={100} alt="Pop corn" />
          <div className={`${style.box} w-full flex items-center justify-between text-white px-6 py-3 rounded-2xl shadow-xl`}>
            <div>
              <h1 className="text-lg font-bold">The Netflix you love for just $7.99.</h1>
              <p className="text-sm">Stream unlimited entertainment anytime, anywhere.</p>
            </div>
            <Button textSize="text-md" btnClick={handleLearnMore}>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}