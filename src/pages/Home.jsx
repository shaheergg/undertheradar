import React from "react";
import HeroSection from "../components/home/HeroSection";
import afro from "../assets/afro.png";
import edm from "../assets/edm.png";
import hiphop from "../assets/hiphop.png";
import ticket from "../assets/ticket.png";
import { Link } from "react-router-dom";
import Arrow2 from "../assets/arrow-2.svg";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <div
        id="about"
        className="font-orbitron md:px-0 px-4 z-50 relative py-10 flex items-center justify-center min-h-[100vh] dj-bg"
      >
        <div className="flex flex-col justify-center h-full max-w-6xl gap-10 mx-auto">
          <div className="font-semibold">
            <h2 className="text-[70px] leading-[70.7px] text-white">About</h2>
            <h3 className="text-[70px]  leading-[70.7px] text-green">
              UNDER THE RADAR
            </h3>
          </div>
          <div>
            <p className="text-[24px] font-semibold z-20 text-white leading-[34px]">
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
        <div className="absolute md:z-10 z-[-1] -bottom-10 left-20">
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
      <div className="font-orbitron md:px-0 z-50 px-4 relative py-10 flex items-center justify-center min-h-[100vh] bg-3">
        <div className="flex flex-col justify-center w-full h-full max-w-6xl gap-10 mx-auto">
          <div className="font-semibold">
            <h2 className="text-[70px] leading-[70.7px] text-white">Events</h2>
            <h3 className="text-[70px]  leading-[70.7px] text-green">
              UNDER THE RADAR
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center col-span-1 gap-4 md:items-start">
              {[afro, hiphop, edm].map((item) => {
                return (
                  <Link
                    to={`${
                      item === afro
                        ? "/afro"
                        : item === hiphop
                        ? "/hiphop"
                        : "/edm"
                    }`}
                    className="transition-all border-2 border-transparent rounded-2xl hover:border-green ring-transparent ring-2 hover:ring-accent"
                  >
                    <img className="h-[343px] w-[343px]" src={item} alt="" />
                  </Link>
                );
              })}
            </div>
            <div className="grid-cols-1 space-y-5">
              <div className="h-64"></div>
              <div className="flex flex-col items-center p-12 font-semibold border-2 rounded-md border-accent ring-2 ring-green">
                <img className="-mt-80" src={ticket} alt="" />
                <div>
                  <h2 className="text-[40px] text-green">TICKETS ONLY</h2>
                  <p className="text-white text-[30px]">
                    AED <span className="text-[100px] text-accent">25</span>
                  </p>
                  <div className="text-[24px] text-white">
                    <h2 className="font-semibold">THE EXPERIENCE:</h2>
                    <p className="font-medium">
                      We customize your experience by offering you the chance to
                      Pre-order your drinks for a discounted price, straight
                      from our venue Bar. We also give you the chance to let you
                      pick your favorite genres and artists to play at our
                      events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 -bottom-20 left-5">
          <svg
            width="200"
            height="200"
            viewBox="0 0 238 299"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_22_1361)">
              <path
                d="M237.615 119.307C237.631 137.71 233.381 155.865 225.2 172.339C217.019 188.813 205.131 203.155 190.474 214.233C188.795 215.5 187.071 216.75 185.3 218.124C184.153 219.001 183.082 219.972 182.096 221.027C181.117 222.106 180.207 223.246 179.37 224.439C169.637 236.267 175.12 261.496 158.687 263.75C148.816 264.846 147.722 247.26 137.85 239.571C135.355 238.634 132.671 238.316 130.027 238.644C128.275 239.658 126.816 241.111 125.792 242.86C119.216 253.853 115.92 264.846 112.101 275.778C111.362 277.446 110.561 279.098 109.821 280.719C107.569 285.586 104.829 290.211 101.644 294.523C97.2546 300.019 89.5697 298.923 86.2432 292.33C77.4649 272.551 79.6672 250.564 65.4063 231.866C62.126 228.577 56.166 226.91 52.131 230.214C50.3446 231.65 48.3117 235.819 42.3825 235.17C29.1226 233.719 30.3239 214.28 26.4891 203.641C25.8423 201.866 25.1801 200.167 24.5332 198.453C19.4357 180.203 8.47048 163.667 3.08029 144.83C2.71067 143.177 2.38726 141.525 2.11005 139.858C-0.621776 123.667 0.0214741 107.084 3.99926 91.1545C7.97704 75.2251 15.2031 60.2945 25.222 47.3039C35.2408 34.3133 47.8352 23.5444 62.2113 15.676C76.5874 7.80749 92.4334 3.01013 108.751 1.58624C125.068 0.162349 141.502 2.14282 157.018 7.40281C172.534 12.6628 186.795 21.0882 198.901 32.1481C211.008 43.2079 220.699 56.6623 227.362 71.6632C234.025 86.6641 237.516 102.886 237.615 119.307Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M229.684 119.307C229.914 151.715 217.346 182.899 194.725 206.05C193.292 207.501 191.814 208.906 190.32 210.265C187.169 212.356 184.394 214.967 182.111 217.985C180.966 219.473 179.896 221.019 178.908 222.617C168.544 234.043 172.933 268.12 154.267 262.623C144.396 259.319 143.302 229.643 127.886 240.296C126.572 241.436 125.38 242.709 124.329 244.095C117.999 252.432 116.089 264.707 113.425 274.28C112.778 276.01 112.116 277.708 111.408 279.345C107.85 287.559 104.477 297.086 97.3161 298.012C94.0204 300.22 88.4762 295.603 86.2893 292.299C74.2307 272.52 79.7133 218.912 53.1781 227.342C49.1586 228.624 43.9378 231.001 40.4265 229.766C33.2652 227.249 31.4634 209.864 27.8904 197.759C27.3822 195.952 26.8894 194.13 26.3504 192.324C22.6388 175.787 14.954 160.393 10.8112 144.907C10.4724 143.255 10.1644 141.587 9.88719 139.919C8.8095 133.102 8.28416 126.209 8.31633 119.307C8.31633 53.624 57.8753 0.416992 119 0.416992C180.125 0.416992 229.684 53.624 229.684 119.307Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M215.701 119.307C215.701 149.492 206.553 177.053 191.476 198.052C190.321 199.673 183.051 209.154 180.033 211.747C162.969 226.462 172.933 260.477 156.486 260.477C145.52 260.477 146.614 233.009 130.305 237.594C128.75 238.451 127.345 239.557 126.146 240.868C118.985 248.588 118.061 261.619 114.411 271.609C113.672 273.678 112.871 275.655 112.163 277.523C108.328 286.864 103.954 293.704 96.2694 293.457C71.6285 292.685 86.7827 251.166 64.4673 223.111C62.0032 220.023 57.8912 216.565 52.1468 217.244C39.272 218.788 37.7935 207.038 36.4845 198.87C36.1919 197.079 31.4947 164.902 26.8899 155.638C26.5819 154.495 22.2698 130.779 22.2698 119.415C22.2698 53.7322 65.5607 0.525146 118.954 0.525146C172.348 0.525146 215.701 53.6241 215.701 119.307Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M198.667 119.307C198.865 142.189 194.225 164.854 185.053 185.808C184.305 187.735 183.403 189.599 182.358 191.382C178.847 196.678 174.765 206.405 171.855 214.203C166.665 228.099 168.482 257.157 153.143 254.95C146.552 253.853 138.882 229.674 127.917 239.509C126.973 240.728 126.094 241.996 125.284 243.308C119.662 252.402 117.583 262.886 114.057 272.644C113.317 274.327 112.516 275.964 111.762 277.585C111.007 279.206 110.222 280.781 109.282 282.31C107.368 286.682 104.367 290.488 100.566 293.365C96.1919 296.669 91.8028 295.573 88.507 291.172C75.355 269.185 78.6353 243.91 70.9658 220.811C68.7789 214.218 65.4832 209.833 60.6628 204.244C58.861 201.943 57.1823 199.612 55.4575 197.002C54.0815 194.763 52.8718 192.425 51.8383 190.008C46.6176 177.918 45.0775 163.667 42.1206 150.867C41.8845 149.601 41.6688 148.335 41.4738 147.069C40.0046 137.878 39.2682 128.584 39.2715 119.276C39.2715 53.5935 74.9699 0.386475 119 0.386475C163.03 0.386475 198.667 53.6244 198.667 119.307Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M174.027 119.307C174.14 138.903 171.785 158.435 167.02 177.439C166.527 179.338 166.003 181.222 165.48 183.06C163.493 189.514 161.968 196.292 160.136 202.993C159.674 204.66 159.181 206.328 158.688 208.011C151.604 231.743 144.504 231.866 129.273 238.706C128.023 240.132 126.88 241.65 125.854 243.246C120.633 251.336 117.615 261.45 114.827 271.239C114.073 272.783 113.287 274.327 112.456 275.732C110.039 280.078 107.185 284.166 103.939 287.93C99.5499 292.33 91.8034 290.153 89.6781 284.641C78.3433 255.104 80.9152 223.081 74.4008 191.907C73.7848 188.402 73.1225 184.928 72.3525 181.546C71.5825 178.165 70.7201 174.861 69.7036 171.711C69.257 169.704 68.8412 167.681 68.4408 165.535C65.5143 150.27 64.065 134.758 64.1132 119.214C64.1132 53.5315 88.7541 0.324463 119.078 0.324463C149.401 0.324463 174.027 53.6241 174.027 119.307Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M139.144 119.307C139.144 135.735 138.575 151.376 137.604 165.627C137.45 167.666 137.296 169.673 137.142 171.634C135.726 179.832 134.925 188.618 133.97 197.527C133.662 200.491 133.323 203.471 132.938 206.436C132.799 208.289 132.63 210.126 132.414 211.948C132.199 213.77 131.937 215.592 131.644 217.414C128.025 235.201 119.324 251.691 113.78 268.181C111.619 265.068 109.624 261.841 107.804 258.516C107.041 256.79 106.378 255.022 105.818 253.22C99.7806 233.441 105.202 208.767 102.091 188.633C102.014 185.252 101.921 181.917 101.783 178.628C101.595 172.229 101.035 165.847 100.104 159.513C99.9808 157.382 99.8576 155.252 99.7498 153.075C99.2262 142.374 98.9336 131.041 98.9336 119.307C98.9336 53.624 107.943 0.416992 119.062 0.416992C130.181 0.416992 139.144 53.624 139.144 119.307Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M99.4726 291.234C94.8525 296.468 88.5074 291.234 86.3206 286.833C74.2619 268.151 74.3081 212.473 54.58 219.915C52.3624 220.795 48.1734 225.427 44.6621 225.536C32.6035 225.844 32.5265 208.783 27.9525 199.148C27.3365 197.342 26.7359 195.566 26.1044 193.837C19.436 174.706 5.19049 159.328 2.40299 140.043C2.07958 138.36 1.78697 136.677 1.52516 134.963C0.763215 129.779 0.382309 124.547 0.385518 119.307C0.385518 57.3297 53.4866 7.07178 118.97 7.07178C184.453 7.07178 237.554 57.3297 237.554 119.307C237.554 155.9 219.073 188.402 190.413 208.86C188.734 210.064 187.009 211.238 185.238 212.55C183.726 213.578 182.318 214.752 181.034 216.055C179.77 217.364 178.602 218.763 177.538 220.24C169.576 232.947 170.685 254.918 158.626 258.223C148.754 260.415 145.274 228.886 127.825 233.981C118.893 236.606 103.354 286.88 99.4726 291.234Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M105.848 264.692C103.107 270.868 98.8255 271.548 93.9897 270.343C76.0635 265.881 78.3119 222.17 67.9936 214.187C64.0356 211.099 56.9052 209.818 47.9729 212.829C40.5498 215.33 33.2807 205.031 30.1852 195.288C29.4306 193.605 28.6452 191.876 28.0292 190.131C21.5609 172.514 8.47047 158.232 3.17268 140.306C2.71067 138.607 2.31025 136.909 1.97144 135.18C0.928863 129.954 0.412918 124.636 0.431387 119.307C0.431387 65.7758 53.5325 22.3733 119.016 22.3733C184.499 22.3733 237.6 65.7758 237.6 119.307C237.6 149.724 220.459 176.884 193.631 194.655C191.845 195.829 190.012 196.971 188.149 198.083C182.47 200.766 177.381 204.556 173.179 209.231C172.086 210.358 171.008 211.516 169.93 212.705C161.952 225.273 157.763 246.751 149.37 229.797C141.547 213.971 135.848 212.165 130.612 216.997C119.601 227.157 106.526 263.133 105.848 264.692Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M98.872 221.845C87.0598 221.614 78.5741 188.68 61.4179 189.421C55.042 189.683 54.7186 200.044 49.3592 197.265C45.5707 195.257 40.0419 182.195 36.7 179.107C35.6065 178.088 34.5285 177.022 33.4659 176.019C24.9186 164.902 12.8599 157.197 6.93073 144.413C6.0837 142.869 5.39068 141.325 4.62065 139.626C1.83611 133.215 0.394607 126.299 0.385498 119.307C0.385498 77.2014 53.4866 43.2329 119 43.2329C184.514 43.2329 237.585 77.3249 237.585 119.384C237.585 146.899 214.746 170.646 180.849 184.372C169.545 189.004 166.835 204.753 159.288 205.88C149.463 207.332 150.171 194.501 134.047 195.412C117.922 196.323 111.855 222.108 98.872 221.845Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M104.124 182.473C88.954 182.473 88.5074 167.033 73.4765 164.578C70.6736 164.099 67.9323 163.558 65.2372 163.033L61.6027 162.123C52.3623 159.266 55.9969 162.586 44.5697 162.586C39.1179 162.586 31.3406 152.256 29.5233 151.392C11.3507 142.853 0.385498 131.613 0.385498 119.307C0.385498 92.2401 53.4866 70.3149 118.97 70.3149C184.453 70.3149 237.554 92.2401 237.554 119.307C237.554 137.032 211.681 152.256 177.492 160.872C174.073 161.752 170.485 176.714 166.835 177.439C153.344 180.126 145.674 161.999 125.854 168.175C113.78 172.097 115.335 182.488 104.124 182.473Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M119 139.595C184.51 139.595 237.615 130.512 237.615 119.307C237.615 108.102 184.51 99.0183 119 99.0183C53.4912 99.0183 0.385498 108.102 0.385498 119.307C0.385498 130.512 53.4912 139.595 119 139.595Z"
                stroke="white"
                stroke-miterlimit="10"
              />
            </g>
            <defs>
              <clipPath id="clip0_22_1361">
                <rect width="238" height="299" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div
        id="contact-us"
        className="font-orbitron md:px-0 px-4 z-40 relative py-10 flex items-center justify-center min-h-[100vh] bg-4"
      >
        <div className="flex flex-col justify-center w-full h-full max-w-6xl gap-10 mx-auto">
          <div className="font-semibold">
            <h2 className="text-[70px] leading-[70.7px] text-white">Contact</h2>
            <h3 className="text-[70px]  leading-[70.7px] text-accent">
              UNDER THE RADAR
            </h3>
          </div>
          <div className="grid grid-cols-5 gap-4 md:gap-0 md:grid-cols-12">
            <div className="col-span-5">
              <form className="w-full space-y-2">
                <div className="w-full space-y-2">
                  <label
                    htmlFor="name"
                    className="font-semibold  text-white text-[20px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-transparent text-white py-4 px-4 border-[2px] border-green rounded-[5px] outline-none w-full"
                  />
                </div>
                <div className="w-full space-y-2">
                  <label
                    htmlFor="phone"
                    className="font-semibold text-white text-[20px]"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="bg-transparent text-white py-4 px-4 border-[2px] border-green rounded-[5px] outline-none w-full"
                  />
                </div>
                <div className="w-full space-y-2">
                  <label
                    htmlFor="message"
                    className="font-semibold text-white text-[20px]"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    className="bg-transparent resize-none h-36 text-white py-4 px-4 border-[2px] border-green rounded-[5px] outline-none w-full"
                  />
                </div>
                <div className="flex items-center justify-end w-full">
                  <button className="p-2 rounded hover:ring-2 ring-green bg-accent">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 12 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 1.5L10.5 10.5L1.5 19.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="items-center justify-center hidden w-full col-span-2 md:flex">
              <img src={Arrow2} alt="" />
            </div>
            <div className="col-span-5">
              <div className="p-6 space-y-4 text-white border-2 rounded-md border-green ">
                <h2 className="text-[30px] font-semibold">DETAILS</h2>
                <p className="text-[20px]">+971 54 4831909</p>
                <p className="text-[20px]">undertheradar.dxb@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
