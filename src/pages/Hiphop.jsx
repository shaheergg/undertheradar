import React, { useState } from "react";
import StarSVG from "../assets/svgs/orange-star.svg";
import { Link } from "react-router-dom";
import Travis from "../assets/travis.png";
import Drake from "../assets/drake.png";
import Savage from "../assets/savage.png";
import Balls from "../assets/svgs/cactus-jack.svg";
import Drink from "../assets/drink-2.png";
import HipHopMain from "../assets/hiphop-main.png";
import Select from "../components/Select";
const HipHop = () => {
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
      name: "TRAVIS SCOTT",
      img: Travis,
    },
    {
      id: 2,
      name: "DRAKE",
      img: Drake,
    },
    {
      id: 3,
      name: "21 SAVAGE",
      img: Savage,
    },
  ];

  return (
    <div>
      <div className="relative min-h-[100vh] hiphop-bg">
        <div className="absolute top-0 left-0 z-50 hidden md:block">
          <img className="animate-pulse" src={StarSVG} alt="" />
        </div>
        <div className="z-50 flex items-center justify-end p-4">
          <div className="z-50 flex flex-col items-center space-y-2">
            <Link
              to="/"
              href="#about"
              className="p-4 bg-transparent border-2 rounded hover:text-black text-[#FF7A00] hover:bg-[#FF7A00] border-[#FF7A00]"
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
            <span className="text-[18px] font-semibold font-orbitron text-[#FF7A00]">
              BACK TO HOME
            </span>
          </div>
        </div>
        <div className="z-50 flex flex-col flex-wrap items-center justify-start max-w-6xl px-4 py-10 mx-auto md:py-20 md:flex-row justify- md:px-0">
          <div className="z-50">
            <h2 className="max-w-sm leading-[70.7px] text-white font-semibold flex-1 text-[30px] md:text-[70px] font-orbitron">
              UNDER THE <span className="text-[#FF7A00]">RADAR</span>
              <span className="block text-left md:text-right text-[#FF7A00]">
                HIP HOP
              </span>
            </h2>
            <div className="flex flex-col justify-center gap-4 px-2 pt-16 text-center md:items-center">
              <div>
                <svg
                  width="17"
                  height="168"
                  viewBox="0 0 17 168"
                  fill="none"
                  className="ml-5 animate-bounce"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0923 13.839L16.6941 -0.00319594L0.7131 0.00222178L7.32431 13.84L10.0923 13.839ZM8.76037 167.463L16.7462 153.621L0.765169 153.626L8.76037 167.463ZM7.32435 13.9553L7.3275 23.2588L10.0955 23.2579L10.0923 13.9544L7.32435 13.9553ZM7.33065 32.5624L7.33381 41.8659L10.1018 41.865L10.0986 32.5614L7.33065 32.5624ZM7.33696 51.1695L7.34011 60.473L10.1081 60.4721L10.105 51.1685L7.33696 51.1695ZM7.34327 69.7765L7.34642 79.0801L10.1144 79.0791L10.1113 69.7756L7.34327 69.7765ZM7.34957 88.3836L7.35273 97.6872L10.1207 97.6862L10.1176 88.3827L7.34957 88.3836ZM7.35588 106.991L7.35903 116.294L10.127 116.293L10.1239 106.99L7.35588 106.991ZM7.36218 125.598L7.36534 134.901L10.1333 134.9L10.1302 125.597L7.36218 125.598ZM7.36849 144.205L7.37164 153.508L10.1396 153.507L10.1365 144.204L7.36849 144.205Z"
                    fill="#FF7A00"
                  />
                </svg>
              </div>

              <div className="flex items-center">
                <a
                  href="#about"
                  className="p-4 bg-transparent border-2 rounded hover:text-black text-[#FF7A00] hover:bg-[#FF7A00] border-[#FF7A00]"
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

      <div className="relative min-h-[100vh] z-50 hiphop-bg-2">
        <div className="absolute z-50 hidden md:block -top-56 right-5">
          <img src={Balls} alt="" />
        </div>
        <div className="absolute z-50 hidden md:block -bottom-20 left-6">
          <svg
            width="180"
            height="221"
            viewBox="0 0 180 221"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_104_91)">
              <path
                d="M179.572 193.964C172.8 90.4211 81.6383 58.6758 81.6383 58.6758C93.8602 33.8616 77.0881 0 77.0881 0L64.39 7.98923C43.0677 -2.48671 24.3909 7.98923 24.3909 7.98923L11.4283 0C-18.6768 74.9188 42.6445 132.06 42.6445 132.06C49.8401 137.404 48.1999 151.531 48.1999 151.531L44.3376 180.895L51.9035 183.752L36.9303 212.058L4.33852 211.847L0 221H111.743L108.251 211.794H87.3524L97.4051 185.921C101.902 185.498 108.463 184.493 108.463 184.493V173.647C109.892 173.012 127.14 194.757 127.14 194.757C129.785 199.043 135.976 201.53 135.976 201.53C150.102 206.027 165.922 197.826 165.922 197.826L161.001 183.911L179.572 193.964ZM173.805 185.287L167.139 182.006C121.584 159.361 86.7175 124.494 86.7175 124.494C76.0828 113.436 73.7019 95.9236 73.7019 95.9236C71.321 80.633 81.6912 64.3371 81.6912 64.3371C81.6912 64.3371 161.795 94.6009 173.805 185.287ZM13.8621 6.66651L25.3433 12.6452C25.3433 12.6452 43.6497 4.12688 63.9138 12.6452L74.5485 6.66651C74.5485 6.66651 81.6383 22.4862 81.6383 36.8774C81.6383 36.8774 83.2784 72.7496 45.1312 75.4479C45.1312 75.4479 8.94158 75.4479 7.67177 41.0572C7.72468 41.0572 7.40723 20.5286 13.8621 6.66651ZM49.6814 177.192L54.1786 142.589C59.9457 147.986 71.9559 158.303 71.9559 158.303L67.2471 180.895C60.6864 182.853 49.6814 177.192 49.6814 177.192ZM77.4585 211.741H48.0412L61.6916 185.921C62.5911 186.821 71.321 186.556 71.321 186.556L75.0776 168.25L80.9504 187.191H86.7175L77.4585 211.741ZM133.33 193.964C132.695 192.694 122.907 180.789 122.907 180.789C116.664 173.012 103.119 162.642 103.119 162.642V180.049C101.003 181.795 84.6011 182.059 84.6011 182.059L79.5748 166.028C77.6172 154.229 71.1623 150.525 71.1623 150.525L58.8875 140.367C57.6177 140.367 36.2954 117.299 36.2954 117.299C13.5446 90.1566 10.3172 64.3371 10.3172 64.3371C39.0467 96.1353 72.6438 70.1571 72.6438 70.1571C61.8504 95.1829 76.0828 118.304 76.0828 118.304C82.0615 130.42 114.336 154.176 114.336 154.176C128.568 164.811 154.07 180.207 154.07 180.207L159.837 195.075C141.637 201.371 133.33 193.964 133.33 193.964Z"
                fill="#FF7A00"
              />
              <path
                d="M25.2373 43.4381C25.2373 43.4381 32.7504 44.1259 35.5545 37.5652L44.6548 64.3371L52.8028 37.5652C57.7762 44.8666 63.12 43.4381 63.12 43.4381C69.5749 43.4381 74.8128 38.835 74.8128 32.4331C74.8128 26.0311 69.5749 20.7402 63.12 20.7402H53.2261L44.7077 52.4326L35.3958 20.7402H26.56C20.1052 20.7402 14.8672 25.9782 14.8672 32.4331C14.8672 38.8879 18.7824 43.4381 25.2373 43.4381ZM63.0671 25.0788C67.0353 25.0788 70.2627 28.2533 70.2627 32.1685C70.2627 36.0838 67.0353 39.2583 63.0671 39.2583C59.0989 39.2583 55.8715 36.0838 55.8715 32.1685C55.8715 28.2533 59.0989 25.0788 63.0671 25.0788ZM25.8193 24.9729C29.7875 24.9729 33.0149 28.1475 33.0149 32.0627C33.0678 35.978 29.8404 39.1525 25.8193 39.1525C21.8511 39.1525 18.6237 35.978 18.6237 32.0627C18.6237 28.1475 21.8511 24.9729 25.8193 24.9729Z"
                fill="#FF7A00"
              />
              <path
                d="M63.1206 37.5652C65.9842 37.5652 68.3057 35.2438 68.3057 32.3801C68.3057 29.5165 65.9842 27.1951 63.1206 27.1951C60.257 27.1951 57.9355 29.5165 57.9355 32.3801C57.9355 35.2438 60.257 37.5652 63.1206 37.5652Z"
                fill="#FF7A00"
              />
              <path
                d="M25.8199 36.9303C28.5375 36.9303 30.7404 34.751 30.7404 32.0627C30.7404 29.3744 28.5375 27.1951 25.8199 27.1951C23.1024 27.1951 20.8994 29.3744 20.8994 32.0627C20.8994 34.751 23.1024 36.9303 25.8199 36.9303Z"
                fill="#FF7A00"
              />
            </g>
            <defs>
              <clipPath id="clip0_104_91">
                <rect width="179.572" height="221" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          id="#about"
          className="flex flex-col flex-wrap items-center justify-start max-w-6xl px-4 py-20 mx-auto md:flex-row justify- md:px-0"
        >
          <div className="z-50 w-full space-y-4">
            <h2 className="font-orbitron text-[#FF7A00] text-[30px] md:text-[55px] font-semibold">
              PICK YOUR PREFERRED ARTISTS
            </h2>
            <div className="px-6 py-6 h-[70vh] grid grid-cols-2 md:grid-cols-3 gap-6 overflow-y-scroll bg-[#000000A1] rounded-xl w-full">
              {artists.map((artist) => {
                return (
                  <div className="flex flex-col items-center gap-4 text-center">
                    <img src={artist.img} alt="" />
                    <span className="uppercase text-[#FF7A00] text-[18px] md:text-[23.5px] font-orbitron font-semibold">
                      {artist.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[100vh] hiphop-bg-1">
        <div className="absolute md:block hidden z-[1000] -top-20 right-5">
          <svg
            width="179"
            height="181"
            viewBox="0 0 179 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M178.289 100.522C178.289 78.0312 168.9 57.7245 153.88 43.2053L153.891 43.1868C153.867 43.172 153.84 43.1609 153.816 43.1462C139.455 29.297 119.972 20.7276 98.493 20.7276C95.9454 20.7276 93.4329 20.8753 90.9444 21.1097L109.256 0L88.2289 21.4642C73.7447 23.3361 60.4899 29.0884 49.5059 37.6671L45.0753 25.2578L47.9035 38.8652C46.2605 40.2165 44.7043 41.6656 43.1739 43.1425C43.1517 43.1554 43.1277 43.1665 43.1056 43.1794L43.1148 43.196C41.3204 44.9295 39.6165 46.7442 37.9901 48.6382L29.297 44.2797L37.08 49.6388C32.1787 55.5425 28.1118 62.1606 25.0603 69.3141L7.59101 76.8276L24.237 71.5128C21.1485 79.3918 19.3098 87.8689 18.8889 96.7282L0 118.504L18.756 99.3625C18.7505 99.752 18.6969 100.13 18.6969 100.522C18.6969 123.012 28.086 143.323 43.1074 157.84L43.0982 157.857C43.1185 157.87 43.1425 157.879 43.1646 157.892C57.5233 171.745 77.0104 180.316 98.493 180.316C119.97 180.316 139.452 171.747 153.81 157.901C153.832 157.888 153.856 157.877 153.879 157.864L153.869 157.848C168.894 143.33 178.289 123.018 178.289 100.522ZM167.844 130.216C161.534 133.43 154.32 136.156 146.465 138.344C149.127 131.137 151.013 123.249 152.057 114.93C161.51 113.001 169.075 110.472 173.606 107.36C172.878 115.405 170.905 123.092 167.844 130.216ZM84.018 47.3127L62.168 54.2853L78.8546 35.0475C81.7307 34.5528 84.6475 34.1799 87.592 33.9029C86.2314 37.7372 85.037 42.249 84.018 47.3127ZM117.207 86.3607C129.224 86.9994 139.621 88.2141 148.086 89.7611C148.423 93.2871 148.656 96.8611 148.656 100.524C148.656 104.186 148.423 107.76 148.086 111.286C139.62 112.833 129.224 114.048 117.207 114.687C117.391 110.005 117.491 105.263 117.491 100.524C117.491 95.7848 117.391 91.0423 117.207 86.3607ZM116.994 82.0206C116.538 73.2924 115.767 64.8596 114.666 57.1892C123.967 57.959 132.928 59.3842 141.307 61.4019C144.25 68.6606 146.446 76.6744 147.624 85.2641C138.503 83.671 127.978 82.5965 116.994 82.0206ZM113.98 52.7919C112.763 45.4962 111.231 39.0775 109.396 33.9029C114.652 34.3958 119.813 35.2303 124.82 36.4117C130.411 41.6269 135.265 48.4259 139.112 56.4212C131.135 54.673 122.678 53.4694 113.98 52.7919ZM113.154 100.522C113.154 105.536 113.038 110.299 112.855 114.884C108.27 115.067 103.507 115.183 98.493 115.183C93.4791 115.183 88.7162 115.067 84.1306 114.884C83.9479 110.299 83.8316 105.536 83.8316 100.522C83.8316 95.5079 83.9479 90.7451 84.1306 86.1594C88.7162 85.9767 93.4791 85.8604 98.493 85.8604C103.507 85.8604 108.27 85.9767 112.855 86.1594C113.038 90.7469 113.154 95.5079 113.154 100.522ZM112.656 81.8083C107.973 81.6237 103.232 81.524 98.493 81.524C93.7542 81.524 89.0135 81.6237 84.33 81.8083C84.8266 72.4598 85.6684 64.0879 86.752 56.855C90.6343 56.6224 94.5443 56.4692 98.493 56.4692C102.442 56.4692 106.352 56.6243 110.234 56.855C111.316 64.0898 112.159 72.4598 112.656 81.8083ZM60.0174 64.2374L79.9622 74.2339L59.8715 60.3976C67.0176 58.882 74.568 57.8316 82.3196 57.1892C81.2175 64.8614 80.4477 73.2924 79.9918 82.0206C73.8499 82.3418 67.8447 82.8088 62.1569 83.4494L58.7583 67.1007L65.0645 73.7447L60.0174 64.2374ZM73.6081 53.7518L83.6063 49.4505C83.4014 50.5489 83.1965 51.651 83.0064 52.7919C79.8348 53.0392 76.7039 53.3586 73.6081 53.7518ZM60.7558 83.6267C56.7867 84.0974 52.9562 84.6346 49.3619 85.2623C50.3329 78.1697 51.987 71.4519 54.1838 65.2325L60.7558 83.6267ZM62.2511 87.8117L64.1932 93.2483L63.0449 87.7249C68.1954 87.1452 73.7742 86.68 79.7795 86.3607C79.5948 91.0423 79.4952 95.7848 79.4952 100.524C79.4952 105.263 79.5948 110.003 79.7795 114.687C67.7616 114.048 57.3646 112.833 48.9004 111.286C48.5625 107.76 48.3299 104.186 48.3299 100.524C48.3299 96.8611 48.5625 93.2871 48.9004 89.7611C52.9211 89.0264 57.3996 88.3729 62.2511 87.8117ZM79.9918 119.023C80.4477 127.751 81.2194 136.182 82.3196 143.854C73.0192 143.085 64.0584 141.659 55.6791 139.642C52.7365 132.383 50.5397 124.369 49.3619 115.78C58.4851 117.375 69.0077 118.449 79.9918 119.023ZM83.0082 148.252C84.2248 155.547 85.757 161.966 87.592 167.141C82.3363 166.648 77.1747 165.813 72.1681 164.632C66.5764 159.417 61.7231 152.618 57.8759 144.622C65.8509 146.371 74.3077 147.576 83.0082 148.252ZM84.33 119.235C89.0135 119.42 93.7542 119.52 98.493 119.52C103.232 119.52 107.973 119.42 112.656 119.235C112.159 128.584 111.318 136.956 110.234 144.189C106.352 144.421 102.442 144.574 98.493 144.574C94.5443 144.574 90.6343 144.419 86.752 144.189C85.6702 136.956 84.8266 128.586 84.33 119.235ZM113.98 148.252C122.68 147.576 131.135 146.371 139.114 144.621C135.267 152.616 130.411 159.415 124.822 164.63C119.815 165.812 114.653 166.646 109.398 167.139C111.229 161.966 112.763 155.547 113.98 148.252ZM114.665 143.854C115.767 136.182 116.536 127.751 116.992 119.023C127.976 118.449 138.501 117.375 147.62 115.781C146.443 124.371 144.246 132.383 141.303 139.642C132.928 141.659 123.967 143.085 114.665 143.854ZM152.531 110.398C152.806 107.155 152.994 103.872 152.994 100.524C152.994 97.1749 152.806 93.8908 152.531 90.6491C166.293 93.588 173.953 97.3724 173.953 100.524C173.951 103.673 166.293 107.459 152.531 110.398ZM173.606 93.6858C169.075 90.5734 161.51 88.0443 152.057 86.1152C151.013 77.7968 149.127 69.9086 146.465 62.6997C154.318 64.8873 161.532 67.6139 167.844 70.8297C170.905 77.9519 172.878 85.6389 173.606 93.6858ZM164.863 64.6491C158.654 61.904 151.776 59.578 144.403 57.6968C141.242 50.4584 137.336 43.9954 132.797 38.5956C139.405 40.7075 145.638 43.4268 151.305 46.7165C156.661 51.9741 161.255 58.0014 164.863 64.6491ZM135.855 35.0512C132.883 34.0451 129.837 33.1627 126.727 32.4021C125.401 31.2206 124.044 30.1185 122.649 29.1013C127.269 30.6668 131.685 32.6605 135.855 35.0512ZM117.088 30.5007C113.943 30.0078 110.764 29.6201 107.55 29.3801C106.944 28.0952 106.313 26.9433 105.654 25.9243C109.634 26.7845 113.466 28.3149 117.088 30.5007ZM98.493 25.064C99.8295 25.064 101.282 26.5095 102.735 29.1346C101.321 29.0847 99.9126 29.0016 98.493 29.0016C97.0734 29.0016 95.6648 29.0847 94.2526 29.1346C95.7036 26.5095 97.1564 25.064 98.493 25.064ZM98.493 33.3381C100.585 33.3381 102.665 33.4211 104.742 33.5319C106.481 38.112 108.133 44.5067 109.514 52.4522C105.868 52.251 102.194 52.131 98.493 52.131C94.7916 52.131 91.118 52.2528 87.472 52.4522C87.7803 50.6781 88.1015 48.9871 88.4356 47.3718L101.676 41.6767L88.755 45.799C89.8331 40.8681 91.0183 36.7588 92.2441 33.53C94.3209 33.4211 96.4014 33.3381 98.493 33.3381ZM91.3321 25.9243C90.6731 26.9433 90.0417 28.0952 89.4362 29.3801C87.3649 29.5352 85.2992 29.7142 83.2556 29.9745L85.061 27.8922C87.1028 27.0374 89.1962 26.3858 91.3321 25.9243ZM63.0707 47.1484C65.8011 43.0483 68.8729 39.4873 72.1663 36.4136C72.7663 36.2714 73.3736 36.1441 73.9791 36.0112L63.0707 47.1484ZM74.3373 29.1013C72.9416 30.1185 71.5848 31.2206 70.2593 32.4021C67.1487 33.1627 64.1027 34.0469 61.1287 35.053C65.2989 32.6605 69.7166 30.6686 74.3373 29.1013ZM64.1895 38.5938C60.7022 42.7419 57.6101 47.5417 54.913 52.8103L51.6178 43.5782C55.6071 41.6583 59.8143 39.9931 64.1895 38.5938ZM49.1514 44.8538L50.5138 51.4055L45.9282 46.5835C46.9749 45.9799 48.0641 45.4187 49.1514 44.8538ZM45.3799 46.9915L49.253 54.2816L42.0145 50.6523C43.1129 49.408 44.2021 48.1582 45.3799 46.9915ZM40.6835 52.1162L49.7975 58.3928C43.4582 60.1373 37.5545 62.2492 32.1252 64.6491C34.5509 60.1761 37.4345 55.9892 40.6835 52.1162ZM29.1419 70.8297C31.0397 69.8624 33.0076 68.9338 35.0623 68.057L47.0912 64.2171L23.6702 91.2177C24.5545 84.0697 26.3969 77.2171 29.1419 70.8297ZM48.413 69.0963C46.8291 74.4868 45.6716 80.193 44.9295 86.1152C37.008 87.7305 30.3677 89.7611 25.7655 92.209L48.413 69.0963ZM44.4569 90.6472C44.1818 93.8908 43.9935 97.1731 43.9935 100.522C43.9935 103.871 44.1818 107.155 44.4569 110.396C30.6945 107.457 23.0352 103.673 23.0352 100.522C23.0352 97.3706 30.6926 93.5843 44.4569 90.6472ZM23.3804 107.36C27.9106 110.472 35.4758 113.001 44.9295 114.93C45.9725 123.249 47.8592 131.137 50.5212 138.346C42.668 136.158 35.4518 133.432 29.1419 130.216C26.0812 123.092 24.1077 115.405 23.3804 107.36ZM32.1233 136.396C38.3316 139.141 45.2101 141.467 52.5833 143.349C55.7437 150.587 59.65 157.05 64.1895 162.45C57.5769 160.336 51.3445 157.615 45.6753 154.323C40.3236 149.068 35.7305 143.04 32.1233 136.396ZM61.1287 165.992C64.1027 166.999 67.1487 167.883 70.2593 168.643C71.5848 169.825 72.9416 170.927 74.3373 171.944C69.7166 170.377 65.3008 168.383 61.1287 165.992ZM79.8976 170.545C83.0433 171.038 86.2222 171.425 89.4362 171.665C90.0417 172.95 90.6731 174.102 91.3321 175.121C87.3539 174.259 83.5214 172.729 79.8976 170.545ZM98.493 175.98C97.1564 175.98 95.7036 174.534 94.2526 171.909C95.6667 171.959 97.0734 172.042 98.493 172.042C99.9126 172.042 101.321 171.959 102.735 171.909C101.282 174.534 99.8295 175.98 98.493 175.98ZM98.493 167.706C96.4014 167.706 94.3209 167.623 92.2441 167.512C90.5051 162.932 88.8529 156.537 87.472 148.59C91.118 148.791 94.7916 148.911 98.493 148.911C102.194 148.911 105.868 148.789 109.514 148.59C108.133 156.537 106.481 162.93 104.742 167.51C102.667 167.623 100.585 167.706 98.493 167.706ZM105.654 175.121C106.313 174.102 106.944 172.95 107.55 171.665C110.766 171.424 113.943 171.036 117.09 170.545C113.466 172.729 109.634 174.259 105.654 175.121ZM122.649 171.944C124.044 170.927 125.401 169.825 126.727 168.643C129.837 167.883 132.883 166.999 135.857 165.992C131.687 168.383 127.269 170.377 122.649 171.944ZM151.3 154.333C145.634 157.621 139.404 160.338 132.797 162.45C137.334 157.05 141.242 150.587 144.403 143.349C151.776 141.467 158.652 139.141 164.863 136.395C161.254 143.044 156.657 149.073 151.3 154.333Z"
              fill="#FF7A00"
            />
          </svg>
        </div>
        <div className="absolute z-[1000] hidden -bottom-16 right-56 md:block">
          <img src={HipHopMain} alt="" />
          hiphop
        </div>{" "}
        <div className="flex flex-col z-[1000] flex-wrap items-center justify-center max-w-6xl px-4 py-20 mx-auto md:flex-row justify- md:px-0">
          <div className="bg-[black]/30 z-50 py-12 px-6 w-full rounded-xl">
            <h2 className="text-[30px] md:text-[70px] text-[#FF7A00] font-semibold font-orbitron">
              PRE ORDER DRINKS
            </h2>
            <div className="px-4 py-6 bg-[#000000D1] rounded-xl h-[70vh] overflow-y-scroll">
              <div className="grid grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center gap-4 text-center border rounded-2xl border-green">
                  <img className="w-auto h-[150px]" src={Drink} alt="" />
                  <h2 className="font-orbitron font-semibold text-[#FF7A00] text-[30px]">
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
              <h2 className="md:text-[32px] text-[20px] text-green font-orbitron font-semibold">
                25 AED (PER HEAD)
              </h2>
              <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
                <div className="space-y-10 rounded-lg col-span-3 px-6 py-10 bg-[#000000B2] md:col-span-2">
                  <h2 className="font-semibold text-white text-[22px] font-orbitron">
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

export default HipHop;
