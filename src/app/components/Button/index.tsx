"use client"

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  btnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  textSize?: string;
}

export default function Button({ children, btnClick, textSize = '' }: ButtonProps) {
  return (
    <button onClick={btnClick} className={`px-4 py-2 bg-red-600 text-white rounded ${textSize}`}>
      {children}
    </button>
  )
}

