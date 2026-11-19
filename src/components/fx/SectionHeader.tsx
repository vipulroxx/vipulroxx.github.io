import React from "react";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  sub?: React.ReactNode;
  align?: "left" | "center";
}

export default function SectionHeader({ kicker, title, sub, align = "left" }: SectionHeaderProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div style={{ textAlign: align, display: "flex", flexDirection: "column", alignItems: align === "center" ? "center" : "flex-start" }}>
        <span className="kicker">{kicker}</span>
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
      </div>
    </Reveal>
  );
}
