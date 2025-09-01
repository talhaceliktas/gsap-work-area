"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, GSDevTools);

/* eslint-disable @next/next/no-img-element */
const Page = () => {
  useGSAP(() => {
    const grass = document.querySelector("#grass");
    const rect = grass.getBoundingClientRect();
    const timeline = gsap
      .timeline()
      .fromTo(
        "#kid",
        { x: 50, y: rect.top + 20 },
        {
          x: 400,
          duration: 3,
        }
      )
      .to("#kid", {
        duration: 2,
        motionPath: {
          path: ".kidToPlaneLine",
          align: ".kidToPlaneLine",
          alignOrigin: [0.5, 1],
        },
      })
      .to("#plane", {
        duration: 3,
        motionPath: {
          path: ".planeRote",
          align: ".planeRote",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      })
      .to(
        "#kid",
        {
          duration: 3,
          motionPath: {
            path: ".planeRote",
            align: ".planeRote",
            alignOrigin: [0.5, 1],
            autoRotate: true,
          },
        },
        "<"
      )
      .to("#sun", { opacity: 0, duration: 1 })
      .to("#moon", { opacity: 1, duration: 1 })
      .to("#background", { backgroundColor: "blue", duration: 1 }, "-=1");

    GSDevTools.create({ animation: timeline });
  });

  return (
    <div
      className="bg-yellow-200 w-full min-h-screen relative overflow-hidden"
      id="background"
    >
      <img
        src="grass.svg"
        alt="grass svg"
        className="w-screen left-0 absolute bottom-0"
        id="grass"
      ></img>
      <img src="kid.svg" alt="kid svg" id="kid" className="w-[100px]"></img>
      <img
        src="sun.svg"
        alt="sun svg"
        id="sun"
        className="fixed top-8 right-8 w-40"
      ></img>
      <img
        src="plane.svg"
        alt="plane svg"
        id="plane"
        className="absolute w-[450px] top-[450px] left-[500px]"
      ></img>
      <img
        src="moon.svg"
        alt="moon svg"
        id="moon"
        className="fixed top-8 right-8 w-40 opacity-0"
      ></img>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1800 880"
        className="absolute top-0 left-0 w-full h-fit pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          className="kidToPlaneLine invisible"
          d="M 400 725 q-3-11 10.2-64.8t80.8-88.6q46.8-15.6 127 2.4t78 18"
        />

        <path
          className="planeRote invisible"
          d="m700 645 508-232c156-72 284-260 260-885"
        />
      </svg>
    </div>
  );
};
/* eslint-enable @next/next/no-img-element */
export default Page;
