"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Page = () => {
  const [from, setFrom] = useState("start");
  const [time, setTime] = useState(1);
  const [axis, setAxis] = useState(null);
  const [ease, setEase] = useState("power1.out");

  const tweenRef = useRef();

  useGSAP(() => {
    gsap.set(".box", {
      width: "80px",
      height: "80px",
    });

    tweenRef.current = gsap.to(".box", {
      width: "36px",
      height: "36px",
      stagger: {
        grid: [5, 10],
        from: from,
        amount: time,
        axis: axis,
      },
      ease: ease,
      paused: true,
    });
  }, [from, time, axis, ease]);

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="grid gap-3 grid-cols-10 w-[800px] h-[500px] grid-rows-5">
        {Array.from({ length: 50 }, (_, i) => (
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
      <div className="mt-5 flex gap-x-6">
        <div>
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
        <div>
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
        <div>
          <p>Axis(from:center)</p>
          <select
            className="bg-yellow-100"
            onChange={(e) =>
              setAxis(e.target.value === "empty" ? null : e.target.value)
            }
            value={axis === null ? "empty" : axis}
          >
            <option>empty</option>
            <option>x</option>
            <option>y</option>
          </select>
        </div>
        <div>
          <p>Ease</p>
          <select
            className="bg-yellow-100"
            onChange={(e) => setEase(e.target.value)}
            value={ease}
          >
            <option>power1.out</option>
            <option>back(4)</option>
            <option>bounce</option>
            <option>steps(5)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Page;
