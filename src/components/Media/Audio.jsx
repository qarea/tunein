import { useRef } from "react";

function Audio({ src, controls, autoPlay }) {
  const audioEl = useRef(null);

  return (
    <audio ref={audioEl} src={src} controls={controls} autoPlay={autoPlay} />
  );
}

export default Audio;
