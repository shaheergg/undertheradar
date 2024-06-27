import React from "react";
import HeroSection from "../components/home/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="font-orbitron md:px-0 px-4 relative py-10 flex items-center justify-center min-h-[100vh] dj-bg">
        <div className="flex flex-col justify-center h-full max-w-6xl gap-10 mx-auto">
          <div className="font-semibold">
            <h2 className="text-[70px] leading-[70.7px] text-white">About</h2>
            <h3 className="text-[70px]  leading-[70.7px] text-green">
              UNDER THE RADAR
            </h3>
          </div>
          <div>
            <p className="text-[24px] font-semibold text-white leading-[34px]">
              Under The Radar is not just an event company; it's a movement, a
              cultural phenomenon that thrives on the pulse of the underground
              scene. Born from a passion for diverse musical genres and a
              commitment to fostering a unique experience, Under The Radar
              curates events that transcend the mainstream and delve deep into
              the realms of the undiscovered. Our passion lies in bringing
              together like-minded individuals who crave something different,
              something authentic.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-10 left-20">
          <svg
            width="172"
            height="147"
            viewBox="0 0 172 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_22_1206)">
              <path
                d="M170 25.1667C170 27.9936 167.976 30.9109 163.762 33.7435C159.584 36.5521 153.473 39.1205 145.831 41.2933C130.56 45.6348 109.407 48.3334 86 48.3334C62.5933 48.3334 41.4397 45.6348 26.1694 41.2933C18.5274 39.1205 12.4157 36.5521 8.23759 33.7435C4.02356 30.9109 2 27.9936 2 25.1667C2 22.3398 4.02356 19.4225 8.23759 16.5899C12.4157 13.7813 18.5274 11.2129 26.1694 9.04014C41.4397 4.69858 62.5933 2 86 2C109.407 2 130.56 4.69858 145.831 9.04014C153.473 11.2129 159.584 13.7813 163.762 16.5899C167.976 19.4225 170 22.3398 170 25.1667Z"
                stroke="#30F4E2"
                stroke-width="2"
              />
              <path
                d="M170 49.3336C170 52.1605 167.976 55.0778 163.762 57.9104C159.584 60.7189 153.473 63.2874 145.831 65.4601C130.56 69.8017 109.407 72.5003 86 72.5003C62.5933 72.5003 41.4397 69.8017 26.1694 65.4601C18.5274 63.2874 12.4157 60.7189 8.23759 57.9104C4.02356 55.0778 2 52.1605 2 49.3336C2 46.5067 4.02356 43.5894 8.23759 40.7567C12.4157 37.9482 18.5274 35.3797 26.1694 33.207C41.4397 28.8655 62.5933 26.1669 86 26.1669C109.407 26.1669 130.56 28.8655 145.831 33.207C153.473 35.3797 159.584 37.9482 163.762 40.7567C167.976 43.5894 170 46.5067 170 49.3336Z"
                stroke="#30F4E2"
                stroke-width="2"
              />
              <path
                d="M170 73.5006C170 76.3275 167.976 79.2448 163.762 82.0774C159.584 84.8859 153.473 87.4544 145.831 89.6271C130.56 93.9687 109.407 96.6673 86 96.6673C62.5933 96.6673 41.4397 93.9687 26.1694 89.6271C18.5274 87.4544 12.4157 84.8859 8.23759 82.0774C4.02356 79.2448 2 76.3275 2 73.5006C2 70.6736 4.02356 67.7564 8.23759 64.9237C12.4157 62.1152 18.5274 59.5467 26.1694 57.374C41.4397 53.0324 62.5933 50.3339 86 50.3339C109.407 50.3339 130.56 53.0324 145.831 57.374C153.473 59.5467 159.584 62.1152 163.762 64.9237C167.976 67.7564 170 70.6736 170 73.5006Z"
                stroke="#30F4E2"
                stroke-width="2"
              />
              <path
                d="M170 97.6663C170 100.493 167.976 103.411 163.762 106.243C159.584 109.052 153.473 111.62 145.831 113.793C130.56 118.134 109.407 120.833 86 120.833C62.5933 120.833 41.4397 118.134 26.1694 113.793C18.5274 111.62 12.4157 109.052 8.23759 106.243C4.02356 103.411 2 100.493 2 97.6663C2 94.8394 4.02356 91.9221 8.23759 89.0895C12.4157 86.281 18.5274 83.7125 26.1694 81.5398C41.4397 77.1982 62.5933 74.4996 86 74.4996C109.407 74.4996 130.56 77.1982 145.831 81.5398C153.473 83.7125 159.584 86.281 163.762 89.0895C167.976 91.9221 170 94.8394 170 97.6663Z"
                stroke="#30F4E2"
                stroke-width="2"
              />
              <path
                d="M170 121.833C170 124.66 167.976 127.577 163.762 130.41C159.584 133.219 153.473 135.787 145.831 137.96C130.56 142.301 109.407 145 86 145C62.5933 145 41.4397 142.301 26.1694 137.96C18.5274 135.787 12.4157 133.219 8.23759 130.41C4.02356 127.577 2 124.66 2 121.833C2 119.006 4.02356 116.089 8.23759 113.256C12.4157 110.448 18.5274 107.879 26.1694 105.707C41.4397 101.365 62.5933 98.6665 86 98.6665C109.407 98.6665 130.56 101.365 145.831 105.707C153.473 107.879 159.584 110.448 163.762 113.256C167.976 116.089 170 119.006 170 121.833Z"
                stroke="#30F4E2"
                stroke-width="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_22_1206"
                x="0"
                y="0"
                width="172"
                height="147"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.5"
                  result="effect1_foregroundBlur_22_1206"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
