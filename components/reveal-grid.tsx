"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./reveal-grid.module.css";

export function RevealGrid({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (
      !grid ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const cards = Array.from(grid.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );

    grid.dataset.animate = "true";
    cards.forEach((card) => observer.observe(card));
    return () => {
      observer.disconnect();
      delete grid.dataset.animate;
      cards.forEach((card) => delete card.dataset.revealed);
    };
  }, []);

  return (
    <div ref={gridRef} className={`${className} ${styles.grid}`}>
      {children}
    </div>
  );
}
