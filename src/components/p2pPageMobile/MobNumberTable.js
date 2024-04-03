"use client";
import React, { useState, useEffect } from "react";

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
    <div className=" flex justify-between bg-gradient-to-r  px-10 py-3 md:none">
     
      <div className="flex  shadow-lg gap-4 bg-gradient-to-l bg-white-300 rounded-lg border border-blue-100 ">
        <div className=" px-4 text-xl text-black-500 py-2  flex flex-col items-center hover:bg-blue-800 hover:text-white-300">
          {days}
          <span className="text-xs text-black-500 ">DAYS</span>
        </div>
        <span className="flex items-center text-black-500 ">:</span>
        <div className="px-4 text-xl  text-xl text-black-500  py-2  flex flex-col items-center hover:bg-blue-800 hover:text-white-300">
          {hours}
          <span className="text-xs">HOURS</span>
        </div>
        <span className="flex items-center text-black-500 ">:</span>
        <div className="px-4 text-xl  text-xl text-black-500  py-2  flex flex-col items-center hover:bg-blue-800 hover:text-white-300">
          {minutes}
          <span className="text-xs">MINS</span>
        </div>
        <span className="flex items-center text-black-500 ">:</span>
        <div className="px-4 text-xl  text-xl text-black-500  py-2  flex flex-col items-center hover:bg-blue-800 hover:text-white-300">
          {seconds}
          <span className="text-xs">SECS</span>
        </div>
      </div>

     
    </div>
  );
};

export default NumberTable;
