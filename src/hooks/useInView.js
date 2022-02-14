import { useEffect, useState } from "react";

export const useInView = (ref) => {
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.6,
      }
    );
    observer.observe(ref.current);
  }, [ref]);

  return [isVisible];
};
