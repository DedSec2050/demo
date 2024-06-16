// hooks/useDivWidth.js
import { useState, useRef, useEffect } from "react";

const useDivWidth = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };

    handleResize(); // Set initial width

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [width, divRef];
};

export default useDivWidth;
