import { useRef, forwardRef, useImperativeHandle } from "react";
import videoTitok from "../video/Download.mp4";
function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
    replay() {
      videoRef.current.load();
    },
  }));

  return (
    <div>
      <video
        ref={videoRef}
        src={videoTitok}
        style={{ height: "300px", width: "300px" }}
      ></video>
    </div>
  );
}
export default forwardRef(Video);
