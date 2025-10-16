'use client';

import Image from 'next/image';
import style from './../../page.module.css';
import { useEffect, useRef } from 'react';

const trendingItems = Array.from({ length: 10 }, (_, i) => ({
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
    container?.addEventListener('wheel', handleWheel);

    return () => {
      container?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold pb-5">Trending now</h2>
        <div className={`${style.scrollx} flex overflow-x-auto gap-2 pb-5`}
          ref={cardsRef}
        >
          {trendingItems.map(({ id, image, alt }) => (
            <div key={id}
              className="min-w-[180px] bg-black rounded overflow-hidden aspect-[9/13]"
            >
              <Image src={image}
                alt={`Trending ${alt}`}
                width={180}
                height={260}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}