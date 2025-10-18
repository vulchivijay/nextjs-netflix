"use client"

import { MouseEvent } from 'react';
import Button from "../Button";
import ArrowRight from '../../../../public/assets/arrow-right.svg';
import Image from 'next/image';

export default function Subscribe() {

  const handleGetStarted = (event: MouseEvent<HTMLButtonElement>) => {  
    console.log('Get started clicked:', event);
  };

  return (
    <div className="bg-transparent text-center py-10">
      <p className="text-md pb-4">Ready to watch? Enter your mail to create or restart your membership.</p>
      <div className="max-w-xl m-auto flex items-center justify-between gap-2">
        <input type="email" placeholder="Enter your mail address" className="w-full bg-white text-black px-2 py-2 rounded-sm" required />
        <Button textSize="flex items-center text-xl font-semibold text-nowrap cursor-pointer" btnClick={handleGetStarted}>
          <span>Get Started</span>
          <Image src={ArrowRight} width={20} height={20} alt="arrow right" className="ml-1 mr-4" />
        </Button>
      </div>
    </div>
  )
}
