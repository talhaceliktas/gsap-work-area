"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { GSDevTools } from "gsap/GSDevTools";
import { Kanit } from "next/font/google";

gsap.registerPlugin(GSDevTools, ScrollTrigger);

const kanit = Kanit({ subsets: ["latin"], weight: "300" });

const Page = () => {
  useGSAP(() => {
    const split = new SplitText("p", { type: "lines, words, chars" });
    gsap.set(".wrapper", { autoAlpha: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          pin: true,
          start: "top top",
          end: "bottom center",
          scrub: true,
          markers: {
            startColor: "white",
            endColor: "white",
            fontSize: "18px",
            fontWeight: "bold",
            indent: 20,
          },
        },
      })
      .from(split.lines, {
        opacity: 0,
        stagger: 0.1,
        rotationX: -90,
        rotationY: -45,
        transformOrigin: "50% 50% -200",
        ease: "back",
        scale: 0.2,
      });
  });

  return (
    <div className="bg-gray-800 h-[300vh] w-full flex items-center justify-center p-10">
      <div className="invisible wrapper perspective-midrange h-[200vh]">
        <p className={`text-white text-4xl leading-16  ${kanit.className}`}>
          While experimenting with animations, talhaceliktas discovered that
          creativity grows faster when small ideas are split into pieces and
          rebuilt in unexpected ways. By breaking down complex concepts into
          smaller, manageable elements, it becomes easier to explore new
          possibilities and iterate quickly. Talhaceliktas noticed that each
          fragment of an idea could be transformed, combined with others, and
          reimagined in ways that were initially unimaginable. This approach not
          only fuels innovation but also encourages a playful mindset, where
          failure is seen as a stepping stone rather than an obstacle. As
          experiments progressed, talhaceliktas realized that patterns emerge
          naturally when ideas are deconstructed and then reconstructed,
          revealing hidden connections and opportunities. By observing these
          emergent patterns, one can gain insights that traditional linear
          thinking often misses. Ultimately, talhaceliktas learned that
          patience, curiosity, and willingness to explore the unknown are the
          keys to mastering both the art and science of animation, turning every
          challenge into a chance to discover something truly unique.
        </p>
      </div>
    </div>
  );
};

export default Page;
