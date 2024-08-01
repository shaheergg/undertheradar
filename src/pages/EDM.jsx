import React, { useState } from "react";
import StarSVG from "../assets/svgs/red-star.svg";
import { Link } from "react-router-dom";
import FredAgain from "../assets/fred-again.png";
import Peggy from "../assets/peggy.png";
import DomDolla from "../assets/domdolla.png";
import Balls from "../assets/svgs/people.svg";
import Drink from "../assets/drink-2.png";
import EdmMain from "../assets/edm-main.png";
import Select from "../components/Select";
const EDM = () => {
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
      name: "FRED AGAIN.",
      img: FredAgain,
    },
    {
      id: 2,
      name: "PEGGY GOU",
      img: Peggy,
    },
    {
      id: 3,
      name: "DOM DOLLA",
      img: DomDolla,
    },
  ];

  return (
    <div>
      <div className="relative min-h-[100vh] edm-bg">
        <div className="absolute top-0 left-0 z-50 hidden md:block">
          <img className="animate-pulse" src={StarSVG} alt="" />
        </div>
        <div className="z-50 flex items-center justify-end p-4">
          <div className="z-50 flex flex-col items-center space-y-2">
            <Link
              to="/"
              href="#about"
              className="p-4 bg-transparent border-2 rounded hover:text-black text-[#FF0000] hover:bg-[#FF0000] border-[#FF0000]"
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
            <span className="text-[18px] font-semibold font-orbitron text-[#FF0000]">
              BACK TO HOME
            </span>
          </div>
        </div>
        <div className="z-50 flex flex-col flex-wrap items-center justify-start max-w-6xl px-4 py-10 mx-auto md:py-20 md:flex-row justify- md:px-0">
          <div className="z-50">
            <h2 className="max-w-sm leading-[70.7px] text-white font-semibold flex-1 text-[30px] md:text-[70px] font-orbitron">
              UNDER THE <span className="text-[#FF0000]">RADAR</span>
              <span className="block md:text-right text-[#FF0000]">EDM</span>
            </h2>
            <div className="flex flex-col justify-center gap-4 p-2 pt-8 text-center md:items-center">
              <div>
                <svg
                  width="17"
                  height="168"
                  viewBox="0 0 17 168"
                  fill="none"
                  className="animate-bounce"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0923 13.839L16.6941 -0.00319594L0.7131 0.00222178L7.32431 13.84L10.0923 13.839ZM8.76037 167.463L16.7462 153.621L0.765169 153.626L8.76037 167.463ZM7.32435 13.9553L7.3275 23.2588L10.0955 23.2579L10.0923 13.9544L7.32435 13.9553ZM7.33065 32.5624L7.33381 41.8659L10.1018 41.865L10.0986 32.5614L7.33065 32.5624ZM7.33696 51.1695L7.34011 60.473L10.1081 60.4721L10.105 51.1685L7.33696 51.1695ZM7.34327 69.7765L7.34642 79.0801L10.1144 79.0791L10.1113 69.7756L7.34327 69.7765ZM7.34957 88.3836L7.35273 97.6872L10.1207 97.6862L10.1176 88.3827L7.34957 88.3836ZM7.35588 106.991L7.35903 116.294L10.127 116.293L10.1239 106.99L7.35588 106.991ZM7.36218 125.598L7.36534 134.901L10.1333 134.9L10.1302 125.597L7.36218 125.598ZM7.36849 144.205L7.37164 153.508L10.1396 153.507L10.1365 144.204L7.36849 144.205Z"
                    fill="#FF0000"
                  />
                </svg>
              </div>

              <div className="flex items-center">
                <a
                  href="#about"
                  className="p-4 bg-transparent border-2 rounded hover:text-black text-[#FF0000] hover:bg-[#FF0000] border-[#FF0000]"
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

      <div className="relative min-h-[100vh] z-50 edm-bg-1">
        <div className="absolute z-50 hidden md:block -top-36 right-5">
          <img src={Balls} alt="" />
        </div>
        <div className="absolute bottom-0 z-50 left-6">
          <svg
            width="73"
            height="320"
            viewBox="0 0 73 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_101_36)">
              <path
                d="M36.1495 0L72.2988 62.592H0.000205994L36.1495 0ZM35.7824 42.7401C38.0855 42.7401 39.9547 40.8717 39.9547 38.5695C39.9547 36.2673 38.0855 34.3989 35.7824 34.3989C33.4792 34.3989 31.61 36.2673 31.61 38.5695C31.61 40.8717 33.4792 42.7401 35.7824 42.7401ZM37.0508 32.764C39.7211 33.3312 41.7238 35.7335 41.7238 38.5695C41.7238 39.4703 41.5235 40.3045 41.1563 41.0718L68.0931 58.8552L37.0508 5.10479V32.764ZM40.155 42.5732C39.0535 43.7744 37.5181 44.5084 35.749 44.5084C34.1468 44.5084 32.7115 43.8745 31.6434 42.8402L4.47298 60.7903H67.7927L40.155 42.5732ZM30.5752 41.4388C30.1079 40.5714 29.8409 39.6038 29.8409 38.5695C29.8409 35.4666 32.2442 32.9309 35.2817 32.664V5.10479L4.23933 58.8552L30.5752 41.4388Z"
                fill="#EB0C0C"
              />
              <path
                d="M36.1495 86.9482L72.2988 149.574H0.000205994L36.1495 86.9482ZM37.0508 119.712C39.7211 120.279 41.7238 122.682 41.7238 125.518C41.7238 126.419 41.5235 127.253 41.1563 128.02L68.0931 145.803L37.0508 92.053V119.712ZM40.155 129.521C39.0535 130.723 37.5181 131.457 35.749 131.457C34.1468 131.457 32.7115 130.823 31.6434 129.788L4.47298 147.739H67.7927L40.155 129.521ZM30.5752 128.42C30.1079 127.553 29.8409 126.585 29.8409 125.551C29.8409 122.448 32.2442 119.912 35.2817 119.646V92.0864L4.23933 145.837L30.5752 128.42Z"
                fill="#EB0C0C"
              />
              <path
                d="M5.97491 222.642L30.1078 180.836C31.2093 178.934 33.0785 177.7 35.2148 177.433C35.5152 177.4 35.8156 177.366 36.116 177.366C36.4164 177.366 36.7168 177.4 37.0173 177.433C39.1535 177.7 41.0227 178.934 42.1242 180.836L66.2905 222.642C67.3253 224.444 67.4922 226.579 66.7912 228.481C66.6577 228.848 66.4908 229.215 66.2905 229.582C66.1904 229.749 66.0902 229.915 65.9901 230.082C64.6883 231.951 62.6188 233.052 60.2823 233.052H11.9831C9.67997 233.052 7.5771 231.951 6.27532 230.082C6.17518 229.915 6.07505 229.749 5.97491 229.582C5.77464 229.215 5.60774 228.848 5.44085 228.481C4.77327 226.579 4.94017 224.477 5.97491 222.642ZM64.7551 223.543L40.5888 181.737C39.8211 180.402 38.5193 179.502 37.0173 179.235V203.19C39.6876 203.758 41.6903 206.16 41.6903 208.996C41.6903 209.897 41.49 210.731 41.1229 211.498L65.2224 227.413C65.6229 226.179 65.456 224.777 64.7551 223.543ZM11.9831 231.283H60.2823C61.9846 231.283 63.5201 230.483 64.4881 229.115L40.1549 213.066C39.0534 214.267 37.4846 215.002 35.7489 215.002C34.1467 215.002 32.7114 214.368 31.6433 213.333L7.77737 229.115C8.74535 230.449 10.2808 231.283 11.9831 231.283ZM7.00965 227.48L30.5751 211.899C30.1078 211.031 29.8408 210.064 29.8408 209.029C29.8408 205.926 32.2441 203.357 35.2816 203.09V179.235C33.7795 179.468 32.5111 180.369 31.71 181.737L7.54372 223.543C6.84276 224.777 6.64249 226.179 7.00965 227.48Z"
                fill="#EB0C0C"
              />
              <path
                d="M66.2902 316.53C66.19 316.697 66.0899 316.864 65.9897 317.03L66.8242 315.429C66.6907 315.796 66.4904 316.163 66.2902 316.53Z"
                fill="#EB0C0C"
              />
              <path
                d="M7.00965 314.395L5.47423 315.429C4.77327 313.527 4.94016 311.425 6.00829 309.59L30.1412 267.784C31.2427 265.882 33.1119 264.648 35.2482 264.381V266.183V290.038C35.4151 290.005 35.582 290.005 35.7822 290.005C36.2162 290.005 36.6501 290.038 37.0506 290.139V266.183V264.381C39.1869 264.648 41.0561 265.882 42.1576 267.784L66.2905 309.59C67.3253 311.392 67.4922 313.527 66.7912 315.429L65.2558 314.395L41.1562 298.48C40.8892 299.014 40.5554 299.514 40.1549 299.981L64.4881 316.03L65.9901 317.03C64.6883 318.899 62.6188 320 60.2823 320H11.9831C9.67997 320 7.5771 318.899 6.27532 317.03L7.77737 316.03L31.6433 300.248C31.2093 299.848 30.8422 299.347 30.5418 298.847L7.00965 314.395ZM31.3428 298.38L31.8102 299.114V299.147C32.7448 300.315 34.1467 301.049 35.7489 301.049C38.5527 301.049 40.7891 298.78 40.7891 295.977C40.7891 293.175 38.5193 290.939 35.7489 290.939C32.945 290.939 30.7086 293.208 30.7086 295.977C30.7086 296.845 30.9423 297.646 31.3428 298.38Z"
                fill="#EB0C0C"
              />
              <path
                d="M35.7817 291.807C38.0849 291.807 39.9541 293.675 39.9541 295.977C39.9541 298.28 38.0849 300.148 35.7817 300.148C33.4786 300.148 31.6094 298.28 31.6094 295.977C31.6094 293.675 33.4786 291.807 35.7817 291.807Z"
                fill="#EB0C0C"
              />
            </g>
            <defs>
              <clipPath id="clip0_101_36">
                <rect
                  width="72.2986"
                  height="320"
                  fill="white"
                  transform="matrix(-1 0 0 1 72.2988 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-start max-w-6xl px-4 py-20 mx-auto md:flex-row justify- md:px-0">
          <div className="z-50 w-full space-y-4">
            <h2 className="font-orbitron text-[#FF0000] text-[30px] md:text-[55px] font-bold max-w-3xl">
              PICK YOUR PREFERED ARTISTS
            </h2>
            <div className="px-6 py-6 h-[90vh] flex justify-between flex-wrap gap-6 overflow-y-scroll bg-[#00000099] rounded-xl w-full">
              {artists.map((artist) => {
                return (
                  <div className="flex flex-col items-center gap-4 text-center">
                    <img src={artist.img} alt="" />
                    <span className="uppercase text-[#FF0000] text-[23.5px] font-orbitron font-semibold">
                      {artist.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[100vh] edm-bg-2">
        <div className="absolute z-[1000] -top-8 right-5">
          <svg
            width="143"
            height="50"
            viewBox="0 0 243 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_110_181)">
              <path
                d="M189.343 0.0579183C205.795 0.0579183 222.305 0.116052 238.757 -0.000215638C241.606 -0.000215638 243.001 0.581124 243.001 3.83663C242.885 25.4625 243.001 47.0883 243.001 68.7141C243.001 80.5153 242.826 92.3165 242.943 104.06C242.943 107.315 241.838 108.303 238.641 108.303C205.563 108.187 172.484 108.245 139.406 108.303C136.092 108.303 134.813 107.315 134.813 103.827C134.93 70.6326 134.872 37.4962 134.813 4.3017C134.813 1.27873 135.627 -0.0583496 139.057 -0.0583496C155.8 0.174186 172.601 0.0579183 189.343 0.0579183ZM236.78 6.56892C204.574 6.56892 173.007 6.56892 141.208 6.56892C141.208 38.4263 141.208 69.9931 141.208 101.734C173.24 101.734 204.923 101.734 236.78 101.734C236.78 69.8187 236.78 38.3682 236.78 6.56892Z"
                fill="#EB0C0C"
              />
              <path
                d="M228.815 63.7146C231.025 71.3883 225.211 76.9691 221.607 82.9569C216.898 90.805 208.352 87.7239 201.027 88.6541C200.737 90.0493 200.446 91.3864 199.981 93.828C194.575 89.1773 189.633 84.9335 183.994 80.1665C189.284 75.2833 194.284 70.6907 199.923 65.4586C200.33 68.0165 200.562 69.4699 200.853 71.2139C207.771 71.2139 214.805 71.8534 221.549 70.8651C224.107 70.5163 226.199 66.4469 228.815 63.7146Z"
                fill="#EB0C0C"
              />
              <path
                d="M209.283 29.8225C210.678 29.183 212.015 28.6598 214.05 27.7297C212.655 35.0545 211.376 41.6818 210.039 48.8904C203.121 46.7395 196.726 44.7629 189.576 42.5538C191.61 40.9261 192.948 39.8797 194.517 38.6007C191.436 33.3105 188.587 27.9041 185.216 22.8464C182.425 18.6026 178.24 17.4981 172.484 20.3466C176.263 14.1263 181.204 14.5332 186.088 14.5332C191.145 14.5332 196.726 13.4868 200.563 17.6143C203.935 21.1605 206.318 25.5206 209.283 29.8225Z"
                fill="#EB0C0C"
              />
              <path
                d="M162.659 87.5496C154.694 85.9218 152.892 77.8412 149.637 71.7371C145.509 63.9472 151.962 57.785 155.101 51.274C153.764 50.3438 152.602 49.53 150.567 48.0185C157.659 45.4606 163.88 43.1934 170.914 40.6936C172.542 47.6697 173.995 54.1226 175.681 61.3312C173.239 60.5754 171.902 60.1104 169.751 59.4709C166.612 65.2261 162.659 70.8651 160.392 77.1436C159.403 79.8759 161.787 83.8872 162.659 87.5496Z"
                fill="#EB0C0C"
              />
              <path
                d="M178.356 42.4376C173.124 39.7054 168.59 37.3219 163.532 34.7058C166.032 30.6365 168.067 26.7996 170.625 23.3116C172.776 20.3467 177.601 20.1723 180.856 22.7884C185.1 26.2183 186.786 29.125 184.286 32.4967C182.077 35.5197 180.449 38.9496 178.356 42.4376Z"
                fill="#EB0C0C"
              />
              <path
                d="M226.142 58.9477C225.793 64.9936 223.526 67.4352 219.34 68.3654C215.387 69.2374 212.481 69.063 210.271 64.5285C205.97 55.7503 205.621 55.9247 213.934 50.3438C215.038 49.6462 216.027 48.7742 217.189 48.1929C217.887 47.8441 219.399 47.5534 219.573 47.8441C222.073 51.9135 224.456 56.0991 226.142 58.9477Z"
                fill="#EB0C0C"
              />
              <path
                d="M172.948 71.4464C180.797 71.3883 180.797 71.3883 181.61 78.5388C182.657 87.7821 182.657 87.7821 173.355 87.7821C163.938 87.7821 160.45 81.678 165.042 73.4811C167.251 69.528 170.739 72.2603 172.948 71.4464Z"
                fill="#EB0C0C"
              />
              <path
                d="M108.245 107.955C106.269 108.071 104.99 108.129 103.711 108.129C70.6328 108.129 37.5545 108.071 4.47632 108.245C0.930143 108.245 0 107.083 0 103.769C0.058134 70.6909 0.116268 37.6126 0 4.53439C0 1.04635 1.27895 0.116211 4.65072 0.116211C37.7289 0.232479 70.8072 0.232479 103.885 0.116211C107.025 0.116211 108.187 0.813819 108.187 4.24372C108.129 33.8339 108.187 63.4241 108.245 92.9562C108.245 97.7813 108.245 102.548 108.245 107.955ZM101.909 6.74348C100.397 6.56908 99.4091 6.39468 98.4208 6.39468C68.9469 6.39468 39.5311 6.45281 10.0572 6.27841C6.3366 6.27841 6.22033 8.02243 6.22033 10.871C6.27847 39.7054 6.27847 68.598 6.27847 97.4325C6.27847 98.8858 6.39474 100.281 6.45287 101.909C38.4266 101.909 70.1096 101.909 101.851 101.909C101.909 70.0514 101.909 38.6009 101.909 6.74348Z"
                fill="#EB0C0C"
              />
              <path
                d="M54.2391 12.1498C77.202 12.0917 96.2118 30.9852 96.3281 54.0644C96.5025 77.2017 76.9114 96.5022 53.5415 96.3278C31.0437 96.1534 12.092 77.1436 11.9757 54.7039C11.9176 30.9852 30.5786 12.2079 54.2391 12.1498ZM34.4154 38.3101C31.4506 37.4381 28.7183 36.5079 25.9279 35.9847C25.0559 35.8103 23.4281 36.5079 23.1374 37.2055C21.3934 41.6819 19.9401 46.2744 18.2542 51.274C23.8932 51.274 28.3114 51.274 32.6714 51.274C33.2528 46.9139 33.776 42.9027 34.4154 38.3101ZM89.9915 51.4484C88.1312 45.635 86.5035 40.5773 84.7594 35.229C80.4575 36.5079 77.0276 37.4381 73.714 38.4263C74.5279 43.1352 75.2255 47.2046 75.9231 51.4484C80.2831 51.4484 84.2944 51.4484 89.9915 51.4484ZM90.224 57.0873C84.8757 57.0873 81.1551 56.9711 77.4346 57.1455C76.737 57.2036 75.6324 58.1919 75.5161 58.9476C74.8185 62.6101 74.3535 66.3307 73.7721 70.1675C76.6788 70.9814 79.2367 71.9115 81.9109 72.3766C82.8992 72.551 84.8176 71.9115 85.1082 71.1558C86.9104 66.9701 88.2475 62.6101 90.224 57.0873ZM34.4154 70.1675C33.776 65.8074 33.1946 61.5637 32.6133 57.2618C28.0788 57.2618 23.835 57.2618 18.3123 57.2618C20.0563 62.3775 21.5097 66.8539 23.2537 71.1558C23.5444 71.9115 25.4047 72.4929 26.3929 72.3185C29.0671 71.9115 31.625 70.9814 34.4154 70.1675ZM38.1941 51.274C43.0774 51.274 47.0886 51.274 51.0999 51.274C51.0999 47.3208 51.0999 43.7747 51.0999 40.0541C47.2049 39.7634 43.6587 39.4728 39.7056 39.124C39.1824 43.4259 38.6592 47.2046 38.1941 51.274ZM69.7609 51.6228C69.7609 49.7043 69.819 48.4254 69.7609 47.1464C69.2958 39.124 69.2377 39.2984 61.4477 39.589C57.8434 39.7053 56.797 40.868 56.8551 44.4141C57.0877 53.1924 56.5645 51.4484 64.0638 51.6228C65.7496 51.6809 67.4937 51.6228 69.7609 51.6228ZM39.7638 69.3536C43.8913 68.9467 47.5537 68.5979 51.158 68.2491C51.158 64.1797 51.158 60.8079 51.158 57.2036C46.9142 57.2036 42.903 57.2036 38.2523 57.2036C38.7755 61.273 39.2406 65.0517 39.7638 69.3536ZM57.4365 67.9003C68.947 70.4 69.9934 70.6907 69.4121 57.378C57.7853 55.4015 55.6925 57.1455 57.2039 67.5515C57.2039 67.6677 57.3783 67.784 57.4365 67.9003ZM51.2161 73.8299C47.9606 74.1206 45.1702 74.295 42.3798 74.5275C42.0891 74.9345 41.7984 75.3995 41.5078 75.8065C44.2982 79.4689 47.1468 83.1895 49.9372 86.8519C50.3441 86.6194 50.8092 86.3287 51.2161 86.0962C51.2161 82.3175 51.2161 78.4807 51.2161 73.8299ZM57.1458 73.8881C57.1458 78.4807 57.1458 82.3175 57.1458 86.0962C57.6109 86.3287 58.0178 86.6194 58.4829 86.8519C61.2733 83.1895 64.1219 79.4689 66.9123 75.8065C66.6216 75.3995 66.331 74.9345 66.0403 74.5275C63.2499 74.3531 60.4594 74.1206 57.1458 73.8881ZM41.4496 32.4967C41.7403 32.9618 42.0891 33.4268 42.3798 33.8338C45.1702 33.8338 47.9606 33.8338 51.0417 33.8338C51.0417 29.8807 51.0417 25.9857 51.0417 22.0907C50.5767 21.8582 50.1697 21.6256 49.7047 21.4512C46.9724 25.1718 44.1819 28.8342 41.4496 32.4967ZM58.541 21.5094C58.076 21.8 57.6109 22.1488 57.2039 22.4395C56.1575 34.822 57.3202 36.2754 67.1449 32.9036C64.1219 28.8924 61.3315 25.2299 58.541 21.5094ZM26.7999 78.0737C32.2645 81.678 36.9152 84.701 41.5078 87.7821C41.7403 87.4333 41.9728 87.1426 42.2054 86.7938C40.8683 84.5266 39.1243 82.4338 38.3685 80.0503C36.9152 75.574 34.241 75.1089 30.4623 76.6785C29.7066 77.0273 28.8927 77.2598 26.7999 78.0737ZM27.6719 29.8807C27.8463 30.2876 28.0207 30.6945 28.1951 31.1015C29.9972 31.5665 31.7413 32.2641 33.5434 32.3223C34.7061 32.3804 36.4501 31.7991 36.9733 30.9271C38.9499 27.7878 40.5776 24.4742 42.3217 21.1606C42.1473 20.8699 42.031 20.6374 41.8566 20.3467C37.0896 23.5441 32.3807 26.6833 27.6719 29.8807ZM65.9822 87.2008C66.1566 87.4914 66.331 87.7821 66.5635 88.0146C71.1561 84.8754 75.8068 81.7362 80.3994 78.5969C80.1669 78.19 79.9925 77.783 79.7599 77.318C76.9114 77.2017 73.9465 73.6555 71.3305 77.3761C69.1795 80.4572 67.7262 83.8871 65.9822 87.2008ZM66.5054 20.4048C66.2728 20.6955 66.0403 20.928 65.8078 21.2187C67.203 23.4859 68.6563 25.7531 69.9353 28.1366C72.7839 33.3687 74.5279 33.7756 80.6319 29.7063C75.6905 26.4507 71.098 23.4278 66.5054 20.4048Z"
                fill="#EB0C0C"
              />
            </g>
            <defs>
              <clipPath id="clip0_110_181">
                <rect width="243" height="108.304" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute z-[1000] hidden -bottom-16 right-56 md:block">
          <img src={EdmMain} alt="" />
        </div>{" "}
        <div className="flex flex-col z-[1000] flex-wrap items-center justify-center max-w-6xl px-4 py-20 mx-auto md:flex-row justify- md:px-0">
          <div className="bg-[black]/30 z-50 py-12 px-6 w-full rounded-xl">
            <h2 className="text-[30px] md:text-[70px] text-[#FF0000] font-semibold font-orbitron">
              PRE ORDER DRINKS
            </h2>
            <div className="px-4 py-6 bg-[#000000B2] rounded-xl h-[100vh] overflow-y-scroll">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-col items-center gap-4 px-4 py-4 text-center border rounded-2xl border-green">
                  <img
                    className="w-auto h-[150px] md:h-auto"
                    src={Drink}
                    alt=""
                  />
                  <h2 className="font-orbitron font-semibold text-[#FF0000] text-[30px]">
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
              <h2 className="text-[20px] md:text-[32px] text-green font-orbitron font-semibold">
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

export default EDM;
