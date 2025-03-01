import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import discordIg from '../assets/discordImage.jpg'
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden dark:bg-slate-950">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                GenAI <br /> For Task Management
              </span>
            </h1>
          </>
        }
      >
        <img
          src={discordIg}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
