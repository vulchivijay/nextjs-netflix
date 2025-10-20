'use client';

import type { JSX } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * TopProgress
 * - Starts on client link clicks (local navigation).
 * - Finishes when pathname changes (reliable finish signal).
 * - Shows spinner if navigation is slow.
 * - Uses only hooks available across Next versions (no useNavigation).
 */

const SLOW_MS = 700;
const TICK_MS = 150;
const MAX_PROGRESS = 85;
const COMPLETE_DELAY = 300;

export default function TopProgress(): JSX.Element {
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSlow, setIsSlow] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const slowTimerRef = useRef<number | null>(null);
  const finishingRef = useRef(false);

  // Start progress when a local link is clicked
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // find anchor element
      const a = (target.closest && target.closest('a')) as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;

      // ignore external links, mailto, tel, anchors that start with #
      if (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#')
      ) {
        return;
      }

      // local navigation detected -> start progress
      finishingRef.current = false;
      setIsSlow(false);
      setProgress(6);
      setVisible(true);

      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      intervalRef.current = window.setInterval(() => {
        setProgress((p) => Math.min(MAX_PROGRESS, p + Math.random() * 7 + 3));
      }, TICK_MS);

      if (slowTimerRef.current) {
        window.clearTimeout(slowTimerRef.current);
      }
      slowTimerRef.current = window.setTimeout(() => {
        setIsSlow(true);
      }, SLOW_MS);
    }

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Finish progress when pathname changes
  useEffect(() => {
    // If no navigation was started (visible false), don't do anything
    if (!visible) return;

    finishingRef.current = true;
    setProgress(100);

    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (slowTimerRef.current) {
      window.clearTimeout(slowTimerRef.current);
      slowTimerRef.current = null;
    }

    const t = window.setTimeout(() => {
      setVisible(false);
      setIsSlow(false);
      setProgress(0);
      finishingRef.current = false;
    }, COMPLETE_DELAY);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (slowTimerRef.current) window.clearTimeout(slowTimerRef.current);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 pointer-events-none z-[9999]"
        style={{
          height: visible ? 4 : 0,
          transition: 'height 160ms ease, opacity 240ms ease',
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className="h-full bg-transparent relative overflow-hidden"
          style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}
        >
          <div
            className="absolute left-0 top-0 bottom-0 rounded-md"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #ff3e00, #ff8a00)',
              transition: finishingRef.current ? 'width 220ms ease' : 'width 480ms ease',
              height: '100%',
              transformOrigin: 'left center',
            }}
          />
        </div>
      </div>

      <div
        aria-hidden
        className={`fixed top-1 right-3 z-[10000] transition-opacity duration-200 ${
          isSlow && visible ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ transform: 'translateZ(0)' }}
      >
        <div
          className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
          role="presentation"
        >
          <svg
            className="animate-spin"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
            <path
              d="M22 12a10 10 0 00-10-10"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}