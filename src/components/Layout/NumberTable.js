"use client";
import React, { useState, useEffect } from "react";
import beta from "../../../public/assets/beta1.png";
import Link from "next/link";
import ButtonOutline from "../misc/ButtonOutline";
// import "./p2p.css";
// import { Link, NavLink } from "react-router-dom";

const NumberTable = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(2024, 3, 30); // Set the target date
      const diff = targetDate - now;
      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div className=" flex justify-between bg-gradient-to-r from-blue-800 to-blue-500 px-10 py-3 md:none">
      <div className="py-3 col-span-3 ">
      <h1 className="text-white-500 text-2xl lg:text-2xl xl:text-2xl text-white-900 font-medium  leading-normal">
             Countdown To Coinbidex
            </h1>
       
        <img src={beta} alt="" width={50} />
      </div>
      <div className="flex  shadow-lg gap-4 bg-gradient-to-l from-blue-800 to-blue-500">
        <div className=" px-4 text-xl text-white-300 py-2  flex flex-col items-center hover:bg-blue-800 hover:text-white-300">
          {days}
          <span className="text-xs text-white-300">DAYS</span>
        </div>
        <span className="flex items-center text-white-500">:</span>
        <div className="px-4 text-xl  text-xl text-white-300 py-2  flex flex-col items-center hover:bg-blue-800 hover:text-white-300">
          {hours}
          <span className="text-xs">HOURS</span>
        </div>
        <span className="flex items-center text-white-500">:</span>
        <div className="px-4 text-xl  text-xl text-white-300 py-2  flex flex-col items-center hover:bg-blue-800 hover:text-white-300">
          {minutes}
          <span className="text-xs">MINS</span>
        </div>
        <span className="flex items-center text-white-500">:</span>
        <div className="px-4 text-xl  text-xl text-white-300 py-2  flex flex-col items-center hover:bg-blue-800 hover:text-white-300">
          {seconds}
          <span className="text-xs">SECS</span>
        </div>
      </div>

      <div className="registerHead flex items-center col-span-3 ">
        <Link href="/whitelist">
        <ButtonOutline>Whitelist</ButtonOutline>
          
        </Link>
      </div>
    </div>
  );
};

export default NumberTable;
