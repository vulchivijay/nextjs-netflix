'use client'

import Image from "next/image";
import style from "./../../page.module.css";
import { useEffect, useRef } from "react";

export default function TrendingNow() {
  const TrendingNow = [
    {
      id: 1,
      image: '/assets/images/trending/1.webp',
      alt: '1',
    },
    {
      id: 2,
      image: '/assets/images/trending/2.webp',
      alt: '2',
    },
    {
      id: 3,
      image: '/assets/images/trending/3.webp',
      alt: '3',
    },
    {
      id: 4,
      image: '/assets/images/trending/4.webp',
      alt: '4',
    },
    {
      id: 5,
      image: '/assets/images/trending/5.webp',
      alt: '5',
    },
    {
      id: 6,
      image: '/assets/images/trending/6.webp',
      alt: '6',
    },
    {
      id: 7,
      image: '/assets/images/trending/7.webp',
      alt: '7',
    },
    {
      id: 8,
      image: '/assets/images/trending/8.webp',
      alt: '8',
    },
    {
      id: 9,
      image: '/assets/images/trending/9.webp',
      alt: '9',
    },
    {
      id: 10,
      image: '/assets/images/trending/10.webp',
      alt: '10',
    }
  ];

  const cardsRef = useRef();
  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  return (
    <div className="max-w-6xl m-auto my-6">
      <h2 className="text-xl font-semibold py-4">Trending now</h2>
      <div className={`${style.scrollx} flex overflow-x-auto gap-1`} ref={cardsRef}>
        {TrendingNow.map(trending => (
          <div key={trending.id} className="min-w-45 bg-black rounded-xs">
            <Image src={trending.image} alt={trending.alt} width={180} height={250} />
          </div>
        ))}
      </div>
    </div>
  )
}