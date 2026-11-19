/// <reference types="webpack-env" />
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SectionHeader from "./fx/SectionHeader";
import Reveal from "./fx/Reveal";

// Dynamically import all images from the moments folder, in numeric order.
const importAll = (requireContext: __WebpackModuleApi.RequireContext): { src: string; title: string }[] =>
  process.env.NODE_ENV === "test"
    ? []
    : requireContext
        .keys()
        .sort((a, b) => (parseInt(a.replace(/\D/g, ""), 10) || 0) - (parseInt(b.replace(/\D/g, ""), 10) || 0))
        .map((key: string) => ({
          src: requireContext(key).default || requireContext(key),
          title: key.replace("./", "").replace(/\.\w+$/, "").replace(/_/g, " "),
        }));

const photos = importAll(
  process.env.NODE_ENV === "test"
    ? ({ keys: () => [], resolve: () => "", id: "mock" } as unknown as __WebpackModuleApi.RequireContext)
    : require.context("/src/static/img/moments", false, /\.(jpe?g|png|webp)$/i)
);

const navBtn = {
  position: "absolute" as const,
  backgroundColor: "rgba(255,255,255,0.06)",
  border: "1px solid var(--border-strong)",
  "&:hover": { backgroundColor: "rgba(34,211,238,0.15)", borderColor: "var(--cyan)" },
};

function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);

  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, step]);

  return (
    <div className="page">
      <SectionHeader
        kicker={`${photos.length} / Moments`}
        title="Off the keyboard"
        sub="Tracks, travels and the people in between. Click any photo to open it, and use the arrow keys to browse."
      />

      {photos.length === 0 ? (
        <p className="mono" style={{ color: "var(--muted)", marginTop: 40 }}>No photos available</p>
      ) : (
        <div className="masonry">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={(i % 4) * 60}>
              <button className="masonry-item" onClick={() => setActive(i)} aria-label={`Open ${p.title}`}>
                <img src={p.src} alt={p.title} loading="lazy" />
              </button>
            </Reveal>
          ))}
        </div>
      )}

      {active !== null && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setActive(null)}>
          <img key={active} src={photos[active].src} alt={photos[active].title} className="page-enter" onClick={(e) => e.stopPropagation()} />
          <IconButton aria-label="close" onClick={() => setActive(null)} sx={{ ...navBtn, top: 20, right: 20 }}>
            <CloseIcon />
          </IconButton>
          <IconButton aria-label="previous" onClick={(e) => { e.stopPropagation(); step(-1); }} sx={{ ...navBtn, left: 20 }}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="next" onClick={(e) => { e.stopPropagation(); step(1); }} sx={{ ...navBtn, right: 20 }}>
            <ChevronRightIcon fontSize="large" />
          </IconButton>
          <div className="counter">
            {String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default PhotoGallery;
