"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const trendingItems = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  image: `/assets/images/trending/${i + 1}.webp`,
  alt: `${i + 1}`,
}));

export default function TrendingNow() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (cardsRef.current) {
        cardsRef.current.scrollLeft += event.deltaY;
      }
    };

    const container = cardsRef.current;
    container?.addEventListener('wheel', handleWheel as EventListener);

    return () => {
      container?.removeEventListener('wheel', handleWheel as EventListener);
    };
  }, []);

  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold pb-5">Trending now</h2>
        <div className="flex overflow-x-auto gap-8 pb-5" ref={cardsRef}>
          {trendingItems.map(({ id, image, alt }) => (
            <div key={id} className="relative z-0 min-w-[180px] bg-black rounded aspect-[9/13] cursor-pointer">
              <span className={`${id === 1 ? ' -inset-x-0 ' : ' -inset-x-5 '} absolute z-10 bottom-5 text-6xl font-semibold color-black`}>{id}</span>
              <Image src={image} alt={`Trending ${alt}`} width={180} height={260} className="w-full h-auto object-cover hover:transition-all hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
