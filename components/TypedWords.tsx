'use client';

import React, { useEffect, useState } from 'react';
import { typedLines } from '../data/portfolio';

export default function TypedWords() {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = typedLines[wordIndex];

    if (!deleting && charIndex < current.length) {
      setIsTyping(true);
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 55);
    } else if (!deleting && charIndex === current.length) {
      setIsTyping(false);
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && charIndex > 0) {
      setIsTyping(true);
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 28);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % typedLines.length);
      setIsTyping(false);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="inline-flex items-center min-h-[1.4em]" aria-live="polite">
      <span className="text-accent font-medium">{displayedText || '\u00A0'}</span>
      <span
        className={`ml-1 inline-block h-[0.95em] w-[2px] bg-accent ${
          isTyping ? 'opacity-100' : 'animate-blink'
        }`}
      />
    </span>
  );
}
