import React, { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [compilation, setCompilation] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const curr = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        const scrollPercentage = (curr / scrollHeight) * 100;
        setCompilation(Number(scrollPercentage.toFixed(2)));
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return compilation;
};

export default useScrollProgress;
