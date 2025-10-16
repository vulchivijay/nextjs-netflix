'use client'

import { MouseEvent } from 'react';
import Button from "../Button/page";

export default function Subscribe() {

  const handleGetStarted = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Learn more clicked:', event);
  };

  return (
    <div className="bg-transparent text-center py-10">
      <p className="text-md pb-4">Ready to watch? Enter your mail to create or restart your membership.</p>
      <div className="max-w-md m-auto flex items-center justify-between gap-2">
        <input type="email" placeholder="Enter your mail address" className="w-full bg-black text-white px-2 py-2 rounded-sm border-1 border-white" required />
        <Button textSize="text-xl" btnClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
    </div>
  )
}