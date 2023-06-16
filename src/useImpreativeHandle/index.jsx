import { useEffect, useRef } from "react";
import Video from "./video";

function ImpreativeHandle() {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef);
  }, []);

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  const handleReload = () => {
    videoRef.current.replay();
    videoRef.current.play();
  };
  return (
    <div>
      <Video ref={videoRef} />
      <button onClick={handlePlay}> play</button>
      <button onClick={handlePause}> pause</button>
      <button onClick={handleReload}> reload</button>
    </div>
  );
}
export default ImpreativeHandle;
