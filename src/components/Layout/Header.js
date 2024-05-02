"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFingerprint } from "react-icons/fa";

// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline";
// import LogoVPN from "../../public/assets/Logo.svg";
import LogoVPN from "../../../public/assets/New123.png";
import Image from "next/image";
import { IoGiftOutline } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import NumberTable from "./NumberTable";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import cash from "../../../public/assets/cash.png";
import margin from "../../../public/assets/margin.png";
import leveraged from "../../../public/assets/leveraged.png";
import quick from "../../../public/assets/quick.png";
import buy from "../../../public/assets/buy.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [isTradeHovered, setIsTradeHovered] = useState(false);
  const [isLearnHovered, setIsLearnHovered] = useState(false);
  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " md:shadow-md pt-0" : "md:shadow-md pt-0")
        }
      >
        {/* <div className="hidden md:block">
          <NumberTable />
        </div> */}
        <div className="w-full text-gray-700 bg-cream ">
          <div className="flex flex-col  px-8 py-3 mx-auto lg:items-center lg:justify-between lg:flex-row relative">
            <div className="flex flex-row items-center justify-between ">
              <div className="relative ">
                <Link href="/">
                  <div
                    className="col-start-1 col-end-2 flex items-center cursor-pointer"
                    style={{ width: "180px", height: "auto" }}
                  >
                    <Image src={LogoVPN} />
                  </div>
                </Link>
              </div>
              {/* hi saaji */}

              <button
                className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setOpen(!open)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    style={{ display: !open ? "block" : "none" }}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    style={{ display: open ? "block" : "none" }}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`${
                open ? "flex" : "hidden"
              } lg:flex flex-col lg:flex-row lg:items-center pb-4 md:pb-0 transition duration-300 ease-in-out`}
            >
              <Link href="/market">
                <div
                  activeClass="active"
                  to="market"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("market");
                  }}
                  className={
                    "px-2 py-2 mx-1 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "market"
                      ? " text-blue-800 animation-active "
                      : " text-black-500 hover:text-blue-800 a")
                  }
                >
                  Market
                </div>
              </Link>
              <div
                activeClass="active"
                to="trade"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("trade");
                }}
                className={
                  "px-2 py-2 mx-1 cursor-pointer animation-hover  flex-col items-start relative flex " +
                  (activeLink === "trade"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
                onMouseEnter={() => setIsTradeHovered(true)}
                onMouseLeave={() => setIsTradeHovered(false)}
              >
                <div className="flex gap-2">
                  Trade{" "}
                  <div className="mt-1">
                    <span className={` `}>
                      {isTradeHovered ? (
                        <IoIosArrowUp className="" />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </div>
                </div>

                {isTradeHovered && (
                  <div className="md:absolute top-8 right-auto left-0 w-max  bg-white-500 rounded-lg  shadow-xl shadow-blue-200 mt-2">
                    <div className="p-4  w-full">
                      <div className=" w-full pr-2">
                        {/* Left side menu items here */}
                        <div className="w-full">
                          <Link href="/p2p">
                            <div className="p-3 w-full  hover:bg-blue-100">
                              <h3 className=" text-black-600 text-lg ">P2P</h3>
                              <p>
                                Buy & sell cryptocurrencies using bank transfer
                                and 800+ options
                              </p>
                            </div>
                          </Link>
                          <Link href="/copytrading">
                            <div className="p-3  w-full hover:bg-blue-100">
                              <h3 className=" text-black-600 text-lg ">
                                Margin Trading
                              </h3>
                              <p>Increase your profits with leverage</p>
                            </div>
                          </Link>
                          <Link href="/market" target="_blank">
                            <div className="p-3 w-full hover:bg-blue-100">
                              <h3 className=" text-black-600 text-lg ">
                                Crypto Pricing
                              </h3>
                              <p>All Crypto Prising Chart</p>
                            </div>
                          </Link>

                          <Link
                            href="https://flooz.xyz/buy/eth"
                            target="_blank"
                          >
                            <div className="p-3 w-full hover:bg-blue-100">
                              <h3 className=" text-black-600 text-lg ">
                                Buy Crypto Via 3rd Party
                              </h3>
                              <p>Buy Crypto Via Visa or MasterCard</p>
                            </div>
                          </Link>

                          <Link
                            href="https://swap.coinbidex.com/"
                            target="_blank"
                          >
                            <div className="p-3 w-full hover:bg-blue-100">
                              <h3 className=" text-black-600 text-lg ">
                                Quick Buy & Swap
                              </h3>
                              <p>Buy & Sell on the spot</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* <div className="w-1/2 pl-2">
                      
                        Right Side Slider
                      </div> */}
                    </div>
                  </div>
                )}
              </div>
              <Link href="/bidexpay">
                <div
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("pricing");
                  }}
                  className={
                    "px-2 py-2 mx-1 cursor-pointer animation-hover inline-block relative " +
                    (activeLink === "pricing"
                      ? " text-blue-800 animation-active "
                      : " text-black-500 hover:text-blue-800 a")
                  }
                >
                  Bidex Pay
                </div>
              </Link>
              <Link href="/copytrading">
                <div
                  activeClass="active"
                  to="testimoni"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("testimoni");
                  }}
                  className={
                    "px-2 py-2 mx-1 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "testimoni"
                      ? " text-blue-800 animation-active "
                      : " text-black-500 hover:text-blue-800 a")
                  }
                >
                  Copy Trading
                </div>
              </Link>
              <Link href="/stacking">
                <div
                  activeClass="active"
                  to="testimoni"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("testimoni");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "testimoni"
                      ? " text-blue-800 animation-active "
                      : " text-black-500 hover:text-blue-800 a")
                  }
                >
                  Earn
                </div>
              </Link>

              <div
                activeClass="active"
                to="learn"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("learn");
                }}
                className={
                  "px-2 py-2 mx-1 cursor-pointer animation-hover flex-col items-start relative flex  w-100" +
                  (activeLink === "learn"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
                onMouseEnter={() => setIsLearnHovered(true)}
                onMouseLeave={() => setIsLearnHovered(false)}
              >
                <div className="flex gap-2">
                  Learn{" "}
                  <div className="mt-1">
                    <span className={` `}>
                      {isLearnHovered ? (
                        <IoIosArrowUp className="" />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </div>
                </div>

                {isLearnHovered && (
                  <div className="md:absolute top-8 right-auto left-0 w-max  bg-white-500 rounded-lg  shadow-xl shadow-blue-200 mt-2">
                    <div className="p-4  w-full">
                      <div className=" w-full pr-2">
                        {/* Left side menu items here */}
                        <div className="w-full">
                          <div className="p-3 w-full  hover:bg-blue-100">
                            <h3 className=" text-black-600 text-lg ">
                              Discover
                            </h3>
                            <p>Latest Updates About Us</p>
                          </div>
                          <div className="p-3  w-full hover:bg-blue-100">
                            <h3 className=" text-black-600 text-lg ">Digest</h3>
                            <p>Coinbidex Business Magazine</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="w-1/2 pl-2">
                      
                        Right Side Slider
                      </div> */}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:hidden md:flex   flex col-start-10 gap-2 col-end-12 font-medium  w-100   items-center">
                  <IoGiftOutline size={25} color="red" />
                  <RxQuestionMarkCircled size={25} />
                <Link href="/">
                  <div className="flex items-center  text-black-600 mx-2 sm:mx-2 capitalize tracking-wide hover:text-blue-800 transition-all">
                    <FaFingerprint size={20} />   Sign In
                  </div>
                </Link>
                <Link href="/whitelist">
                  <ButtonOutline>Sign Up</ButtonOutline>
                </Link>
                <Link href="/">
                  <div className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                      USD
                  </div>
                </Link>
              </div>
            </nav>
            <div className="hidden md:hidden lg:flex col-start-10 gap-2 col-end-12 font-medium  w-100   items-center">
                <IoGiftOutline size={25} color="red" />
                <RxQuestionMarkCircled size={25} />
              <Link href="/">
                <div className="flex items-center  text-black-600 mx-1 sm:mx-1 capitalize tracking-wide hover:text-blue-800 transition-all">
                  <FaFingerprint size={20} />  <span>Login</span>
                </div>
              </Link>
              <Link href="/whitelist">
                <button className="xl:font-medium xl:tracking-wide lg:py-2 px-2 xl:px-8 border border-blue-800 text-blue-800 bg-white-500 outline-none  rounded-large
      hover:bg-blue-800 hover:text-white-500 transition-all hover:shadow-blue">Sign Up</button>
              </Link>
              <Link href="/">
                <div className="text-black-600 mx-2 lg:hidden   capitalize tracking-wide hover:text-blue-800 transition-all">
                    USD
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
