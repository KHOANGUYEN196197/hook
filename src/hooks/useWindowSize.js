import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindownSize] = useState({
    with: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindownSize({
        with: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
export default useWindowSize;
