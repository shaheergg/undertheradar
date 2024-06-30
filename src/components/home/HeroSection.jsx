import React from "react";
import Navbar from "./Navbar";
import StarSVG from "../../assets/svgs/star.svg";
import HeroSVG from "../../assets/svgs/hero.svg";
import Ring1 from "../../assets/svgs/ring-1.svg";
import Ring2 from "../../assets/svgs/ring-2.svg";
import MobileNav from "./MobileNav";
import CrossSVG from "../../assets/svgs/cross.svg";
const HeroSection = () => {
  return (
    <div id="events" className="relative min-h-[120vh] hero-bg">
      <div className="absolute top-0 left-0">
        <img className="animate-pulse" src={StarSVG} alt="" />
      </div>
      <Navbar />
      <MobileNav />
      <div className="flex flex-col flex-wrap items-center justify-center max-w-6xl px-4 py-20 mx-auto md:flex-row justify- md:px-0">
        <div>
          <h2 className="max-w-sm leading-[70.7px] text-white font-semibold flex-1 text-[70px] font-orbitron">
            UNDER THE <span className="text-accent animate-pulse">RADAR</span>
            <span className="block animate-pulse text-[30px] pl-36 text-[#FFFFFF5C]">
              Events
            </span>
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 p-2 md:items-start">
            <svg
              width="17"
              height="168"
              viewBox="0 0 17 168"
              fill="none"
              className="md:ml-5 animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0923 13.8395L16.6941 -0.00270766L0.7131 0.00271006L7.32431 13.8404L10.0923 13.8395ZM8.76037 167.464L16.7462 153.621L0.765164 153.626L8.76037 167.464ZM7.32435 13.9558L7.3275 23.2593L10.0955 23.2584L10.0923 13.9548L7.32435 13.9558ZM7.33065 32.5629L7.33381 41.8664L10.1018 41.8655L10.0986 32.5619L7.33065 32.5629ZM7.33696 51.17L7.34011 60.4735L10.1081 60.4726L10.105 51.169L7.33696 51.17ZM7.34327 69.777L7.34642 79.0806L10.1144 79.0796L10.1113 69.7761L7.34327 69.777ZM7.34957 88.3841L7.35272 97.6877L10.1207 97.6867L10.1176 88.3832L7.34957 88.3841ZM7.35588 106.991L7.35903 116.295L10.127 116.294L10.1239 106.99L7.35588 106.991ZM7.36218 125.598L7.36534 134.902L10.1333 134.901L10.1302 125.597L7.36218 125.598ZM7.36849 144.205L7.37164 153.509L10.1396 153.508L10.1365 144.204L7.36849 144.205Z"
                fill="#30F4E2"
              />
            </svg>
            <div className="flex items-start">
              <a
                href="#about"
                className="p-4 bg-transparent border-2 rounded hover:text-black text-green hover:bg-green border-green"
              >
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.2561 1.6869L9.35212 9.83321L16.8699 1.6869"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 md:justify-end">
          <img className="w-auto h-auto" src={HeroSVG} alt="" />
        </div>
      </div>
      <div className="absolute pt-10 bottom-5 right-64">
        <img src={CrossSVG} className="h-16" alt="" />
      </div>
      <div className="absolute left-0 top-1/2">
        <img src={Ring1} alt="" />
      </div>
      <div className="absolute right-0 top-[40%]">
        <img src={Ring2} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
