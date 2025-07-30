"use client";
import React, { FC } from "react";
import { title } from "@/components/primitives";
import { MainSubtitle } from "@/components/main-section/main-title/main-subtitle/main-subtitle";
import Image from "next/image";
import { SocialIcons } from "@/components/social-icons/social-icons";

export const MainTitle: FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-2 pb-18 md:pb-30 min-h-screen overflow-hidden">
      <Image
        src="/photos.png"
        alt="background"
        width={340}
        height={210}
        className="object-cover object-top sm:object-center"
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />
      <div className="relative z-10 inline-block max-w-xl text-center justify-center">
        <span className={`${title()} text-white`}>Kolya </span>
        <span className={`${title()} text-white`}>Onofriychuk</span>
        <br />
        <MainSubtitle />
        <SocialIcons />
      </div>
    </section>
  );
};
