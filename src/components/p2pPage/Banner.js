"use client"
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import Image from "next/image";
import slider1 from "../../../public/assets/slider/22.png";
import slider2 from "../../../public/assets/slider/2.png";
import slider3 from "../../../public/assets/slider/3.jpg";
import slider4 from "../../../public/assets/slider/4.png";

SwiperCore.use([Pagination]);

const Banner = () => {
  const swiperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      if (swiper) {
        if (swiper.activeIndex === swiper.slides.length - 1) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePaginationClick = (index) => {
    const swiper = swiperRef.current.swiper;
    setCurrentPage(index);
    swiper.slideTo(index);
  };

  return (
    <div className="">
      <div className="max-w-screen-xl  px-2 xl:px-4 mx-auto">
        <div className="flex flex-col w-100 lg:flex-row py-4">
          <div className="flex flex-col justify-center w-75 py-5 ">
            <div className="text-xl sm:text-2xl lg:text-4xl text-white-500 font-medium">
              <h1>Use P2P to buy and sell USDT</h1>
            </div>
            <div className="">
              <p className="text-white-300">
                Trade safely and easily with zero fees on Coinbidex P2P. Trade USDT
                via Various payment methods such as bank transfers and e-wallets
                now.
              </p>
            </div>
          </div>
          <div className=" w-25">
            <Swiper
              ref={swiperRef}
              slidesPerView={"auto"}
              spaceBetween={10}
              onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex)}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex justify-center  ">
                  <div className="">
                    <Image src={slider1} width={250} height={150} className="rounded-lg" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center rounded-lg ">
                  <div className="rounded-lg">
                    <Image src={slider2} width={250} height={150} className="rounded-lg" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center ">
                  <div className="rounded-lg">
                    <Image src={slider3} width={250} height={150} className="rounded-lg"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <div>
                    <Image src={slider4} width={250} height={150} className="rounded-lg" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="flex justify-center mt-4">
              {[...Array(4)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePaginationClick(index)}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    index === currentPage ? "bg-blue-500" : "bg-white-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
