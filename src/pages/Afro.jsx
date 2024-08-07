import React, { useState } from "react";
import StarSVG from "../assets/svgs/yellow-star.svg";
import { Link } from "react-router-dom";
import BurnaBoy from "../assets/burnaboy.png";
import OmahLay from "../assets/omahlay.png";
import Rema from "../assets/rema.png";
import Balls from "../assets/svgs/balls.svg";
import Shine from "../assets/svgs/shine.svg";
import Checks from "../assets/svgs/checks.svg";
import Drink from "../assets/drink-2.png";
import AfroMain from "../assets/afro-main.png";
import Select from "../components/Select";
const Afro = () => {
  const ticketOptions = [
    {
      name: 1,
    },
    {
      name: 3,
    },
    {
      name: 6,
    },
  ];
  const genres = [
    {
      name: "Afro",
    },
    {
      name: "EDM",
    },
    {
      name: "Hip Hop",
    },
  ];
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [selectedTicket, setSelectedTicket] = useState(ticketOptions[0]);
  const artists = [
    {
      id: 1,
      name: "Burna Boy",
      img: BurnaBoy,
    },
    {
      id: 2,
      name: "Omah Lay",
      img: OmahLay,
    },
    {
      id: 3,
      name: "Rema",
      img: Rema,
    },
  ];

  return (
    <div>
      <div className="relative min-h-[100vh] afro-bg">
        <div className="absolute top-0 left-0 hidden md:block">
          <img className="animate-pulse" src={StarSVG} alt="" />
        </div>
        <div className="flex items-center justify-end p-4">
          <div className="flex flex-col items-center space-y-2">
            <Link
              to="/"
              href="#about"
              className="p-4 bg-transparent border-2 rounded hover:text-black text-[#FFD304] hover:bg-[#FFD304] border-[#FFD304]"
            >
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-90"
              >
                <path
                  d="M1.2561 1.6869L9.35212 9.83321L16.8699 1.6869"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <span className="text-[18px] font-semibold font-orbitron text-[#FFD304]">
              BACK TO HOME
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-start max-w-6xl px-4 py-10 mx-auto md:py-20 md:flex-row justify- md:px-0">
          <div>
            <h2 className="max-w-sm leading-[70.7px] text-white font-semibold flex-1 text-[30px] md:text-[70px] font-orbitron">
              UNDER THE <span className="text-[#FFD304]">RADAR</span>
              <span className="block md:text-right text-[#FFD304]">AFRO</span>
            </h2>
            <div className="flex flex-col justify-center gap-4 p-2 pt-16 text-center md:items-center">
              <div>
                <svg
                  width="17"
                  height="168"
                  viewBox="0 0 17 168"
                  className="ml-5 animate-bounce"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0923 13.839L16.6941 -0.00319594L0.7131 0.00222178L7.32431 13.84L10.0923 13.839ZM8.76037 167.463L16.7462 153.621L0.765169 153.626L8.76037 167.463ZM7.32435 13.9553L7.3275 23.2588L10.0955 23.2579L10.0923 13.9544L7.32435 13.9553ZM7.33065 32.5624L7.33381 41.8659L10.1018 41.865L10.0986 32.5614L7.33065 32.5624ZM7.33696 51.1695L7.34011 60.473L10.1081 60.4721L10.105 51.1685L7.33696 51.1695ZM7.34327 69.7765L7.34642 79.0801L10.1144 79.0791L10.1113 69.7756L7.34327 69.7765ZM7.34957 88.3836L7.35273 97.6872L10.1207 97.6862L10.1176 88.3827L7.34957 88.3836ZM7.35588 106.991L7.35903 116.294L10.127 116.293L10.1239 106.99L7.35588 106.991ZM7.36218 125.598L7.36534 134.901L10.1333 134.9L10.1302 125.597L7.36218 125.598ZM7.36849 144.205L7.37164 153.508L10.1396 153.507L10.1365 144.204L7.36849 144.205Z"
                    fill="#FFD304"
                  />
                </svg>
              </div>

              <div className="flex items-center">
                <a
                  href="#about"
                  className="p-4 bg-transparent border-2 rounded hover:text-black text-[#FFD304] hover:bg-[#FFD304] border-[#FFD304]"
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
        </div>
      </div>

      <div className="relative min-h-[100vh] afro-bg-1">
        <div className="absolute z-50 -top-8 right-5">
          <img className="h-12 md:h-auto" src={Balls} alt="" />
        </div>
        <div className="absolute bottom-0 left-0 z-50">
          <img src={Checks} alt="" />
        </div>
        <div className="flex flex-col flex-wrap items-center justify-start max-w-6xl px-4 py-20 mx-auto md:flex-row justify- md:px-0">
          <div className="z-50 w-full space-y-4">
            <h2 className="font-orbitron text-[#FFD304] text-[30px] md:text-[55px] font-semibold max-w-3xl">
              PICK YOUR PREFERED ARTISTS
            </h2>
            <div className="px-6 py-6 h-[70vh] grid grid-cols-2 md:grid-cols-3 gap-6 overflow-y-scroll bg-[#00000082] rounded-xl w-full">
              {artists.map((artist) => {
                return (
                  <div className="flex flex-col items-center w-auto h-auto gap-4 text-center">
                    <img src={artist.img} className="w-full h-full" alt="" />
                    <span className="uppercase text-[#FFD304] text-[23.5px] font-orbitron font-semibold">
                      {artist.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[100vh] afro-bg-2">
        <div className="absolute z-50 hidden w-48 h-48 -top-16 right-2 md:block">
          <img className="h-20 md:h-auto" src={Shine} alt="" />
        </div>
        <div className="absolute z-50 hidden -bottom-16 right-56 md:block">
          <img src={AfroMain} alt="" />
        </div>{" "}
        <div className="flex flex-col flex-wrap items-center justify-center max-w-6xl px-4 py-20 mx-auto md:flex-row justify- md:px-0">
          <div className="bg-[#5C0303C9] py-12 px-6 w-full rounded-xl">
            <h2 className="text-[30px] py-2 md:text-[70px] text-[#FFD304] font-semibold font-orbitron">
              PRE ORDER DRINKS
            </h2>
            <div className="px-4 py-6 bg-[#000000B2] rounded-xl h-[70vh] overflow-y-scroll">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                <div className="flex flex-col items-center gap-4 px-4 py-4 text-center border rounded-2xl border-green">
                  <img
                    className="w-auto h-[150px] md:h-[150px]"
                    src={Drink}
                    alt=""
                  />
                  <h2 className="font-orbitron text-[#FFD304] text-[30px]">
                    BEER
                  </h2>
                  <span className="text-green font-orbitron text-[20px]">
                    30 AED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-[100vh] bg-5">
        <div className="flex flex-col flex-wrap items-center justify-start max-w-6xl px-4 py-20 mx-auto md:flex-row justify- md:px-0">
          <div className="z-50 w-full pt-20 space-y-4">
            <h2 className="font-semibold text-white uppercase font-orbitron text-[30px] md:text-[62px]">
              Book your ticket
            </h2>
            <div className="flex items-center">
              <Select
                options={genres}
                setSelectedOption={setSelectedGenre}
                selectedOption={selectedGenre}
              />
            </div>
            <div className="bg-[#000000B2] space-y-4 rounded-2xl p-8 w-full">
              <h2 className="text-[20px] md:text-[30px] text-green font-orbitron font-semibold">
                25 AED (PER HEAD)
              </h2>
              <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
                <div className="space-y-10 rounded-lg col-span-3 px-6 py-10 bg-[#000000B2] md:col-span-2">
                  <h2 className="font-semibold text-white text-[20px] md:text-[22px] font-orbitron">
                    NO. OF TICKETS
                  </h2>
                  <div>
                    <Select
                      options={ticketOptions}
                      selectedOption={selectedTicket}
                      setSelectedOption={setSelectedTicket}
                    />
                  </div>
                  <div>
                    <button className="px-8 py-2 font-semibold text-white border rounded-md bg-accent font-orbitron border-green">
                      CONFIRM
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-3 p-4 md:col-span-4">
                  <Link
                    to="/checkout"
                    className="flex items-center gap-4 px-4 py-2 font-semibold text-white border rounded-md bg-accent font-orbitron border-green"
                  >
                    <span className="max-w-xs">
                      PROCEED TO <br /> CHECKOUT
                    </span>
                    <span className="p-3 font-semibold border-2 rounded text-green border-green">
                      <svg
                        width="18"
                        height="11"
                        viewBox="0 0 18 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-rotate-90"
                      >
                        <path
                          d="M1.2561 1.6869L9.35212 9.83321L16.8699 1.6869"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Afro;
