"use client";

import Image from "next/image";

import React, { useState } from "react";

// icons
import { RxGlobe, RxInstagramLogo, RxDiscordLogo } from "react-icons/rx";

import { FaHeart } from "react-icons/fa";

// socials
const socials = [
  {
    name: "Website",
    icon: <RxGlobe></RxGlobe>,
    link: "https://tx.ag/acpcwebsite",
  },
  {
    name: "Instagram",
    icon: <RxInstagramLogo></RxInstagramLogo>,
    link: "https://www.instagram.com/aggiecompetitiveprogramming/",
  },
  {
    name: "Discord",
    icon: <RxDiscordLogo></RxDiscordLogo>,
    link: "https://tx.ag/acpcdc",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div
        className="w-full h-[200px] bg-contain bg-repeat-x bg-bottom"
        style={{ backgroundImage: "url('/layers/layer2.png')" }}
      ></div>
      <div className="flex justify-between w-[100vw] bg-[#171b25] p-8">
        <div className="flex flex-col gap-8">
          <p className="">
            <span className="text-white">Made with</span>
            <span>
              <FaHeart className="text-orange-600"></FaHeart>
            </span>
            <span className="text-white">by the 2024 ACPC Officers</span>
          </p>
          <Image src="/acpc-logo.svg" alt="" width={100} height={100}></Image>
        </div>
        <div className="flex  flex-col items-end">
          {socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              className="flex items-center gap-2 text-white"
            >
              {social.icon}
              <p>{social.name}</p>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
