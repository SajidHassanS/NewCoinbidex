"use client"
import React from "react";
// import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../../public/assets/Icon/facebook.svg";
import Twitter from "../../../public/assets/Icon/twitter.svg";
import Instagram from "../../../public/assets/Icon/instagram.svg";
import LogoVPN from "../../../public/assets/New123.png";

import eth from "../../../public/assets/eth1.png";
// import ada from "../../public/assets/ada.png";
import coin from "../../../public/assets/icon-01.png";
import logo from "../../../public/assets/logonew.png";

import Image from "next/image";
const Footer = () => {

  
  return (
    <div className=" bg-gradient-to-b from-white-300 to-white-500 w-full py-5 sm:py-14 sm:pt-56 mb-16 sm:pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
       <div style={{ width: '200px', height: 'auto' }}>

       <Image src={LogoVPN} />
         
       </div>
       
        
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500  w-10 h-10 rounded-full items-center justify-center flex p-2 shadow-md">
            <Image src={logo} width={35} height={35}/>
            </div>
            <div className="mx-2 bg-white-500  w-10 h-10 rounded-full items-center justify-center flex p-2 shadow-md">
            <Image src="/assets/pancake.svg" width={35} height={35}/>
            </div>
            <div className="mx-2 bg-white-500  w-10 h-10 rounded-full items-center justify-center flex p-2 shadow-md">
            <Image src={coin} width={45} height={45}/>
            </div>
          </div>

          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full  w-10 h-10 items-center justify-center flex p-2 shadow-md">
            <Image src="/assets/bakery.svg" width={35} height={35}/>
            </div>
            <div className="mx-2 bg-white-500 rounded-full  w-10 h-10 items-center justify-center flex p-2 shadow-md">
            <Image src={eth} width={35} height={35}/>
            </div>
            <div className="mx-2 bg-white-500 rounded-full  w-10 h-10 items-center justify-center flex p-3 shadow-md">
            <img
      priority
      src= "/assets/poocoin.svg"
      height={35}
      width={35}
      alt="Follow us on Twitter"
    />
            </div>
          </div>

          <p className="text-gray-400">©{new Date().getFullYear()} - Coinbidex</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-5  flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">LEGAL</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Agreements
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Privacy
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Data Policy
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Cookie Policy
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Important
            </li>
         
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-7  flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">PRODUCTS</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Exchange
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Credit Card
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Active Trader
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Mobile
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Derivative
            </li>
            
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9  flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">COMPANY</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            About
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            carreers
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Affiliates
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Security
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11  flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">RESOURCES</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Audit
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            White Paper
            </li>
            <li className="my-2 hover:text-blue-800 cursor-pointer transition-all">
            Token Creation
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
