import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);

const Page = () => {
  gsap.defaults({ ease: "none" });
  return (
    <>
      <h2 className="fixed text-amber-50 top-20 right-5 text-2xl">
        Scroll to see animation
      </h2>
      <div className="bg-black overflow-x-hidden">
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
            className="line01 stroke-amber-50 stroke-3"
            d="M 10 790 L 600 790"
          />
          <path
            className="line01 stroke-amber-50 stroke-3"
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
            className="fill-white ball01"
            r="20"
            cx="336"
            cy="330"
          ></circle>
          <circle
            className="fill-white ball02"
            r="20"
            cx="125"
            cy="790"
          ></circle>
          <circle
            className="fill-white ball03"
            r="20"
            cx="362"
            cy="1120"
          ></circle>

          <text className="text01 fill-white text-2xl" x="30" y="300">
            2018
          </text>
          <text className="text02 fill-white text-2xl" x="30" y="760">
            2019
          </text>
          <text className="text03 fill-white text-2xl" x="30" y="1090">
            2020
          </text>
        </svg>
      </div>
    </>
  );
};

export default Page;
