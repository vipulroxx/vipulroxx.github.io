import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // ms
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

/** Fades + slides its children in the first time they scroll into view (or are scrolled past). */
export default function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    // Reached = on screen now, or already above the bottom of the viewport (a fast flick
    // can jump past an element without the observer ever seeing it intersect).
    const reached = () => el.getBoundingClientRect().top < window.innerHeight;
    const show = () => {
      setVisible(true);
      cleanup();
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) show();
    });
    io.observe(el);

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (reached()) show();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    function cleanup() {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, [visible]);

  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
