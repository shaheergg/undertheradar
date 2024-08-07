import React from "react";
import StarSVG from "../assets/svgs/star.svg";
import QrCode from "../assets/qrcode.png";
import Drink from "../assets/drink.png";
import Hiphop from "../assets/hiphop.png";
import { Link } from "react-router-dom";
const Purchased = () => {
  return (
    <div className="overflow-hidden font-orbitron md:px-0 px-4 z-40 relative flex items-center py-10 min-h-[100vh] checkout-bg">
      <div className="absolute top-0 left-0 hidden md:block">
        <img src={StarSVG} alt="" />
      </div>
      <div className="absolute top-5 -right-12">
        <svg
          width="184"
          height="87"
          viewBox="0 0 184 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.34221 17C2.901 17 2.49287 16.8897 2.11784 16.6691C1.7428 16.4485 1.44498 16.1507 1.22437 15.7756C1.00377 15.4006 0.893463 14.9925 0.893463 14.5513V5.08716H3.45803V14.4189H10.2086V5.08716H12.8063V14.5513C12.8063 14.9925 12.6905 15.4006 12.4588 15.7756C12.2382 16.1507 11.9404 16.4485 11.5654 16.6691C11.2014 16.8897 10.7988 17 10.3575 17H3.34221ZM14.6284 17V5.08716H17.2757L23.9436 13.0291V5.08716H26.5412V17H23.8939L17.193 9.02502V17H14.6284ZM28.4279 17V5.08716H37.8755C38.3277 5.08716 38.7358 5.19747 39.0998 5.41808C39.4749 5.63868 39.7727 5.93651 39.9933 6.31154C40.225 6.67554 40.3408 7.08367 40.3408 7.53591V14.5513C40.3408 14.9925 40.225 15.4006 39.9933 15.7756C39.7727 16.1507 39.4749 16.4485 39.0998 16.6691C38.7358 16.8897 38.3277 17 37.8755 17H28.4279ZM30.976 14.4189H37.7431V7.66828H30.976V14.4189ZM42.2267 17V5.08716H53.2295V7.66828H44.8244V9.75302H51.5915V12.3341H44.8244V14.4189H53.2295V17H42.2267ZM64.1103 17L60.6523 12.8801H64.0111L66.7576 16.1231V17H64.1103ZM54.8613 17V5.10371H64.3089C64.7611 5.10371 65.1693 5.21401 65.5333 5.43462C65.9083 5.65523 66.2061 5.95305 66.4267 6.32808C66.6584 6.70312 66.7742 7.11124 66.7742 7.55246V10.6299C66.7742 11.0712 66.6584 11.4793 66.4267 11.8543C66.2061 12.2294 65.9083 12.5272 65.5333 12.7478C65.1693 12.9684 64.7611 13.0787 64.3089 13.0787L57.4259 13.0952V17H54.8613ZM57.4259 10.4976H64.1765V7.66828H57.4259V10.4976ZM77.917 17V7.66828H73.2511V5.08716H85.164V7.66828H80.4981V17H77.917ZM86.418 17V5.08716H88.9825V9.75302H96.0144V5.08716H98.579V17H96.0144V12.3341H88.9825V17H86.418ZM100.508 17V5.08716H111.511V7.66828H103.106V9.75302H109.873V12.3341H103.106V14.4189H111.511V17H100.508Z"
            fill="white"
          />
          <path d="M0 19.0682H112.222V19.8955H0V19.0682Z" fill="white" />
          <path
            d="M16.6966 42.2097L11.0225 35.4496H16.5337L21.0404 40.7708V42.2097H16.6966ZM1.52034 42.2097V22.6896H17.0224C17.7645 22.6896 18.4341 22.8706 19.0314 23.2326C19.6468 23.5946 20.1355 24.0833 20.4975 24.6986C20.8775 25.314 21.0676 25.9837 21.0676 26.7077V31.7574C21.0676 32.4813 20.8775 33.151 20.4975 33.7664C20.1355 34.3818 19.6468 34.8705 19.0314 35.2324C18.4341 35.5944 17.7645 35.7754 17.0224 35.7754L5.72843 35.8026V42.2097H1.52034ZM5.72843 31.5402H16.8052V26.8977H5.72843V31.5402ZM23.9778 42.2097V26.6805C23.9778 25.9385 24.1588 25.2688 24.5208 24.6715C24.8828 24.0561 25.3715 23.5674 25.9868 23.2055C26.6022 22.8435 27.2719 22.6625 27.9959 22.6625H39.4799C40.2219 22.6625 40.8916 22.8435 41.4889 23.2055C42.1043 23.5674 42.5929 24.0561 42.9549 24.6715C43.335 25.2688 43.5251 25.9385 43.5251 26.6805V42.2097H39.2627V35.9112H28.1859V42.2097H23.9778ZM28.1859 31.6759H39.2627V26.8977H28.1859V31.6759ZM46.6726 42.2097V22.6625H62.1747C62.9167 22.6625 63.5864 22.8435 64.1837 23.2055C64.7991 23.5674 65.2878 24.0561 65.6497 24.6715C66.0298 25.2688 66.2199 25.9385 66.2199 26.6805V38.1917C66.2199 38.9156 66.0298 39.5853 65.6497 40.2007C65.2878 40.8161 64.7991 41.3048 64.1837 41.6667C63.5864 42.0287 62.9167 42.2097 62.1747 42.2097H46.6726ZM50.8536 37.9745H61.9575V26.8977H50.8536V37.9745ZM69.3144 42.2097V26.6805C69.3144 25.9385 69.4954 25.2688 69.8574 24.6715C70.2194 24.0561 70.7081 23.5674 71.3234 23.2055C71.9388 22.8435 72.6085 22.6625 73.3325 22.6625H84.8165C85.5585 22.6625 86.2282 22.8435 86.8255 23.2055C87.4409 23.5674 87.9295 24.0561 88.2915 24.6715C88.6716 25.2688 88.8617 25.9385 88.8617 26.6805V42.2097H84.5993V35.9112H73.5225V42.2097H69.3144ZM73.5225 31.6759H84.5993V26.8977H73.5225V31.6759ZM107.131 42.2097L101.457 35.4496H106.968L111.475 40.7708V42.2097H107.131ZM91.9549 42.2097V22.6896H107.457C108.199 22.6896 108.869 22.8706 109.466 23.2326C110.081 23.5946 110.57 24.0833 110.932 24.6986C111.312 25.314 111.502 25.9837 111.502 26.7077V31.7574C111.502 32.4813 111.312 33.151 110.932 33.7664C110.57 34.3818 110.081 34.8705 109.466 35.2324C108.869 35.5944 108.199 35.7754 107.457 35.7754L96.163 35.8026V42.2097H91.9549ZM96.163 31.5402H107.24V26.8977H96.163V31.5402Z"
            fill="white"
          />
          <path d="M0 45.6033H112.832V46.9608H0V45.6033Z" fill="white" />
          <path
            d="M29.662 63.2378V51.3229H40.6667V53.9044H32.2601V55.9895H39.0284V58.5711H32.2601V60.6562H40.6667V63.2378H29.662ZM48.852 63.2378L41.9513 51.3229H44.93L49.9277 59.9777L54.9253 51.3229H57.8875L50.9868 63.2378H48.852ZM58.9289 63.2378V51.3229H69.9337V53.9044H61.527V55.9895H68.2954V58.5711H61.527V60.6562H69.9337V63.2378H58.9289ZM71.5658 63.2378V51.3229H74.2135L80.8826 59.2662V51.3229H83.4807V63.2378H80.8329L74.1308 55.2614V63.2378H71.5658ZM89.4056 63.2378V53.9044H84.7389V51.3229H96.6538V53.9044H91.9871V63.2378H89.4056ZM100.308 63.2378C99.8663 63.2378 99.4581 63.1275 99.083 62.9068C98.7079 62.6862 98.41 62.3883 98.1893 62.0132C97.9687 61.6381 97.8584 61.2299 97.8584 60.7886V59.6799H100.423V60.6562H107.175V58.5711H100.308C99.8663 58.5711 99.4581 58.4608 99.083 58.2401C98.7079 58.0195 98.41 57.7271 98.1893 57.3631C97.9687 56.988 97.8584 56.5743 97.8584 56.1219V53.772C97.8584 53.3197 97.9687 52.9115 98.1893 52.5475C98.41 52.1724 98.7079 51.8745 99.083 51.6538C99.4581 51.4332 99.8663 51.3229 100.308 51.3229H107.324C107.765 51.3229 108.168 51.4332 108.532 51.6538C108.907 51.8745 109.205 52.1724 109.426 52.5475C109.657 52.9115 109.773 53.3197 109.773 53.772V54.8808H107.175V53.9044H100.423V55.9895H107.324C107.765 55.9895 108.168 56.0999 108.532 56.3205C108.907 56.5412 109.205 56.839 109.426 57.2141C109.657 57.5782 109.773 57.9864 109.773 58.4387V60.7886C109.773 61.2299 109.657 61.6381 109.426 62.0132C109.205 62.3883 108.907 62.6862 108.532 62.9068C108.168 63.1275 107.765 63.2378 107.324 63.2378H100.308Z"
            fill="white"
          />
        </svg>
      </div>
      <section className="z-50 w-full max-w-6xl px-2 py-8 mx-auto space-y-10 md:space-y-20 md:px-0">
        <div className="font-semibold">
          <h2 className="text-[30px] text-center md:text-left pt-8 pb-4 md:py-10 md:text-[70px] md:leading-[70.7px] text-white">
            THANK YOU FOR
          </h2>
          <h3 className="text-[30px] md:text-[70px] text-center md:text-left  leading-[70.7px] text-green">
            YOUR PURCHASE.
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          <div className="flex flex-col items-center justify-center col-span-3 gap-8 p-4 md:col-span-2">
            <h2 className="text-[35px] text-center md:text-left text-white font-semibold">
              TICKET INFO:
            </h2>
            <img
              src={QrCode}
              alt="qr-code"
              className="w-auto h-auto bg-white"
            />
            <span className="text-[21px] text-accent font-semibold">
              SCAN CODE
            </span>
          </div>
          <div className="col-span-3 border-2 rounded-3xl border-green bg-black/50 md:col-span-4">
            <div className="grid w-full h-full grid-cols-1 md:grid-cols-2">
              <div className="w-full h-full col-span-1 p-8 space-y-8 border-r-2 border-dashed border-green">
                <div>
                  <h2 className="text-[20px] md:text-[27px] text-white font-semibold">
                    TICKET HOLDER:{" "}
                  </h2>
                  <span className="text-[20px] md:text-[27px] font-semibold text-green">
                    DYLAN SUARIS
                  </span>
                </div>
                <div>
                  <h2 className="text-[20px] md:text-[27px] font-semibold text-white">
                    TOTAL TICKETS:{" "}
                    <span className="underline text-green">3</span>
                  </h2>
                </div>
                <div>
                  <h2 className="text-[20px] md:text-[27px] font-semibold text-white">
                    TOTAL DRINKS:{" "}
                  </h2>
                  <div className="flex items-center gap-2 pt-4">
                    <div className="flex flex-col items-center justify-center gap-2 p-3 bg-black border-2 rounded-3xl border-green">
                      <img className="animate-bounce" src={Drink} alt="" />
                      <span className="text-center text-green">BEER X3</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 p-3 bg-black border-2 rounded-3xl border-green">
                      <img className="animate-bounce" src={Drink} alt="" />
                      <span className="text-center text-green">BEER X3</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Link className="font-semibold underline text-accent" to="/">
                    SEE ALL THE DRINKS
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="inline ml-2 size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-full col-span-1 p-8">
                <div>
                  <h2 className="text-[18px] md:text-[25px] font-semibold text-white">
                    GENRE
                  </h2>
                  <img
                    className="transition-all h-[250px] md:h-auto hover:skew-x-12"
                    src={Hiphop}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchased;
