import { useEffect, useState } from "react";
import { isTest, prefersReducedMotion } from "./motion";

/** Types each phrase out, pauses, deletes it, then moves to the next. */
export default function useTypewriter(phrases: string[], { type = 55, erase = 30, hold = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(isTest || prefersReducedMotion() ? phrases[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (isTest || prefersReducedMotion()) return;
    const full = phrases[index % phrases.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === full) t = setTimeout(() => setDeleting(true), hold);
    else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      t = setTimeout(
        () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
        deleting ? erase : type
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, type, erase, hold]);

  return text;
}
