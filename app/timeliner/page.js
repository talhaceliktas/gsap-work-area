"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

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
      .add("test")
      .to("#kid", {
        duration: 2,
        ease: "power1.inOut",
        motionPath: {
          path: "m0,0 c-125,-120 -40,-145 0,-120", // relative path
          align: "#plane", // path’i hangi elemana göre hizalayacağı
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: "current", // #kid’in mevcut pozisyonunu başlangıç noktası yap
        },
      })
      .to("#kid", {
        duration: 3,
        motionPath: {
          path: "m-325.2 0c255.6 16.8 277.2-174 304.8-286.8l68.4-362.4",
          align: "#plane",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      })
      .to(
        "#plane",
        {
          duration: 3,
          motionPath: {
            path: "m-325.2 0c255.6 16.8 277.2-174 304.8-286.8l68.4-362.4",
            align: "#kid",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
        },
        "<"
      )
      .to("#sun", { opacity: 0, duration: 1 })
      .to("#moon", { opacity: 1, duration: 1 })
      .to("#background", { backgroundColor: "blue", duration: 1 }, "-=1");
    timeline.play("test");
  });

  return (
    <div className="bg-yellow-200 w-full h-full" id="background">
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
        className="absolute w-[450px] scale-x-[-1] top-[450px] left-[500px]"
      ></img>
      <img
        src="moon.svg"
        alt="moon svg"
        id="moon"
        className="fixed top-8 right-8 w-40 opacity-0"
      ></img>
    </div>
  );
};
/* eslint-enable @next/next/no-img-element */
export default Page;
