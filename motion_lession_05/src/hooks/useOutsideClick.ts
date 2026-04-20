import { useEffect, useRef } from "react";

const UseOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleCkick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleCkick);

    return () => document.removeEventListener("mousedown", handleCkick);
  }, [callback]);

  return ref;
};

export default UseOutsideClick;
