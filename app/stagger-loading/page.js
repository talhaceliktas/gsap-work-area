"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Page = () => {
  const [from, setFrom] = useState("start");
  const [time, setTime] = useState(1);

  const tweenRef = useRef();

  useGSAP(() => {
    tweenRef.current = gsap.to(".box", {
      width: "36px",
      height: "36px",
      stagger: {
        grid: [5, 5],
        from: from,
        amount: time,
      },
      paused: true,
    });
  }, [from, time]);

  return (
    <div>
      <div className="grid  grid-cols-5 w-[800px] h-[500px] grid-rows-5">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            className="bg-blue-400 w-20 h-20 self-center justify-self-center box"
            key={i + 1}
          />
        ))}
      </div>
      <div className="flex gap-x-3">
        <button onClick={() => tweenRef.current.play()}>Play</button>
        <button onClick={() => tweenRef.current.resume()}>Resume</button>
        <button onClick={() => tweenRef.current.pause()}>Pause</button>
        <button onClick={() => tweenRef.current.reverse()}>Reverse</button>
        <button onClick={() => tweenRef.current.restart()}>Restart</button>
      </div>
      <div className="mt-6">
        <p>From</p>
        <select
          className="bg-yellow-100"
          onChange={(e) => setFrom(e.target.value)}
          value={from}
        >
          <option>start</option>
          <option>end</option>
          <option>center</option>
        </select>
      </div>
      <div className="mt-6">
        <p>Time</p>
        <select
          className="bg-yellow-100"
          onChange={(e) => setTime(Number(e.target.value))}
          value={time}
        >
          <option>0.5</option>
          <option>1</option>
          <option>2</option>
          <option>5</option>
        </select>
      </div>
    </div>
  );
};

export default Page;
