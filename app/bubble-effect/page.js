"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Page = () => {
  const container = useRef();
  const tweenRef = useRef();

  useGSAP(() => {
    tweenRef.current = gsap.fromTo(
      container.current,
      {
        y: -100,
      },
      {
        paused: true,
        ease: "power1.in",
        duration: 1,
        y: 0,
        width: "60px",
        repeat: -1,
        yoyo: true,
      }
    );
  });

  return (
    <div className="flex flex-col items-center">
      <img
        ref={container}
        src="https://www.iconpacks.net/icons/2/free-ball-icon-1793-thumb.png"
        width={100}
      />
      <div className="flex gap-x-3">
        <button onClick={() => tweenRef.current.play()}>Play</button>
        <button onClick={() => tweenRef.current.resume()}>Resume</button>
        <button onClick={() => tweenRef.current.pause()}>Pause</button>
        <button onClick={() => tweenRef.current.reverse()}>Reverse</button>
        <button onClick={() => tweenRef.current.restart()}>Restart</button>
      </div>
    </div>
  );
};

export default Page;
