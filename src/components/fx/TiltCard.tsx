import React, { useRef } from "react";
import { prefersReducedMotion } from "./motion";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number; // max tilt in degrees
}

/** Glass card that tilts toward the pointer and shows a spotlight + glowing edge under it. */
export default function TiltCard({ max = 8, className = "", children, onMouseMove, onMouseLeave, ...rest }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (el) {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
      if (!prefersReducedMotion()) {
        el.style.setProperty("--rx", `${(0.5 - py) * max}deg`);
        el.style.setProperty("--ry", `${(px - 0.5) * max}deg`);
      }
    }
    onMouseMove?.(e);
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
    onMouseLeave?.(e);
  };

  return (
    <div ref={ref} className={`glass tilt ${className}`} onMouseMove={handleMove} onMouseLeave={handleLeave} {...rest}>
      {children}
    </div>
  );
}
