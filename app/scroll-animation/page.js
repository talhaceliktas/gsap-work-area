"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);
gsap.defaults({ ease: "none" });

const Page = () => {
  useGSAP(() => {
    const pulses = gsap
      .timeline({
        defaults: {
          scale: 1.5,
          transformOrigin: "center",
          ease: "power2.out",
          duration: 0.1,
          autoAlpha: 1,
        },
      })
      .to(".ball01, .text01", {}, 0.83)
      .to(".ball02, .text02", {}, 1.95)
      .to(".ball03, .text03", {}, 2.88);

    const main = gsap
      .timeline({
        scrollTrigger: {
          trigger: "svg",
          scrub: true,
          start: "top+=1300 center",
          end: "bottom-=500 center",
          markers: {
            startColor: "white",
            endColor: "white",
            fontSize: "18px",
            fontWeight: "bold",
            indent: 20,
          },
        },
      })
      .to(".ball0", { autoAlpha: 1, duration: 0.05 })
      .from(".theLine", { drawSVG: 0, duration: 4 }, 0)
      .to(
        ".ball0",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
          duration: 4,
        },
        0
      )
      .add(pulses, 0);
  });

  return (
    <>
      <h2 className="fixed text-amber-50 top-20 right-5 text-2xl">
        Scroll to see animation
      </h2>
      <div className="bg-black overflow-x-hidden mt-20">
        <h2 className="mb-32 text-9xl text-amber-50">Tedst</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1700 1000"
          width="100vw"
          height="300vh"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            className="line01 stroke-amber-50 stroke-3"
            d="M 10 330 L 600 330"
          />
          <path
            className="line02 stroke-amber-50 stroke-3"
            d="M 10 790 L 600 790"
          />
          <path
            className="line03 stroke-amber-50 stroke-3"
            d="M 10 1120 L 600 1120"
          />

          <path
            className="theLine"
            d="M0 123Q450 230 300 450T122 790Q116 851 300 1000T116 1530"
            fill="none"
            stroke="white"
            strokeWidth="10px"
          />

          <circle
            className="fill-white ball01 invisible"
            r="20"
            cx="336"
            cy="330"
          />
          <circle
            className="fill-white ball02 invisible"
            r="20"
            cx="122"
            cy="790"
          />
          <circle
            className="fill-white ball03 invisible"
            r="20"
            cx="361"
            cy="1120"
          />
          <circle
            className="fill-white ball0 invisible"
            r="20"
            cx="50"
            cy="50"
          />

          <text className="text01 fill-white text-2xl invisible" x="30" y="300">
            2024
          </text>
          <text className="text02 fill-white text-2xl invisible" x="30" y="760">
            2025
          </text>
          <text
            className="text03 fill-white text-2xl invisible"
            x="30"
            y="1090"
          >
            2026
          </text>
        </svg>
      </div>
    </>
  );
};

export default Page;
