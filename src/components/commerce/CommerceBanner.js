"use client"
import React from "react";
import ButtonOutline from "../misc/ButtonOutline";
import Image from "next/image";
import swift from "../../../public/assets/commerce/swift.png";
import multi from "../../../public/assets/commerce/multi.png";
import ironclad from "../../../public/assets/commerce/ironclad.png";
import { FaCircle } from "react-icons/fa6";

// 2nd seciton of banner
import diamond from "../../../public/assets/commerce/diamond.svg";
import btc from "../../../public/assets/commerce/btc.svg";
import y from "../../../public/assets/commerce/y.svg";
import square from "../../../public/assets/commerce/square.svg";
import dollor from "../../../public/assets/commerce/dollor.svg";
import coinbidex from "../../../public/assets/commerce/coinbidex.png";
import graph from "../../../public/assets/commerce/graph.png";
import avatar from "../../../public/assets/commerce/avatar.jpg";
const CommerceBanner = () => {
  return (
    <>
      <div className="max-w-screen-xl mt-32 px-18 xl:px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2   py-6 sm:py-32">
          <div>
            <div className="flex px-8 gap-8 py-5 justify-center items-start">
              <div className="p-5 bg-white-500 shadow-lg border border-blue-200 rounded-lg">
                <Image src={swift} width={100} />
              </div>
              <div>
                <h1 className="text-xl lg:text-xl xl:text-2xl  font-medium text-black-500 leading-normal">
                  Swift Transactions
                </h1>
                <p>
                  Experience Seamless And Rapid Transactions, Ensuring Your
                  Payments Are Processed With Lightning Speed For Unmatched
                  Efficiency.
                </p>
              </div>
            </div>
            <div className="flex px-8 gap-8 py-5 justify-center items-start">
              <div className="p-5 bg-white-500 shadow-lg border border-blue-200 rounded-lg">
                <Image src={multi} width={100} />
              </div>
              <div>
                <h1 className="text-lg lg:text-lg xl:text-xl  font-medium text-black-500 leading-normal">
                Multi-Currency Support
                </h1>
                <p>
                Embrace Global Commerce Effortlessly With Our Payment Gateways Robust Support For Multiple Currencies, Facilitating Transactions Worldwide.
                </p>
              </div>
            </div>
            <div className="flex px-8 gap-8 py-5 justify-center items-start">
              <div className="p-5 bg-white-500 shadow-lg border border-blue-200 rounded-lg">
                <Image src={ironclad} width={100} />
              </div>
              <div>
                <h1 className="text-xl lg:text-xl xl:text-2xl font-medium text-black-500 leading-normal">
                Ironclad Security
                </h1>
                <p>
                Rest Easy With Our State-Of-The-Art Security Measures, Safeguarding Your Financial Data During Every Transaction, Guaranteeing A Worry-Free Payment Experience.
                </p>
              </div>
            </div>
          </div>
{/* second column */}
          <div className="mt-8 w-100 relative" >
            <div className="" >

            <div className="flex justify-center ">
              <div className="card1 bg-blue-200 py-5 px-10 rounded-lg" style={{zIndex:"10"}}>
                <div>
                  <h1 className="text-xl lg:text-lg xl:text-xl font-medium text-black-500 leading-normal">
                    Start Accepting CryptoInvocies?
                  </h1>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 pt-4 gap-5">
                  <img src="assets/commerce/diamond.svg" />
                  <img src="assets/commerce/btc.svg" />
                  <img src="assets/commerce/y.svg" />
                  <img src="assets/commerce/dollor.svg" />
                  <img src="assets/commerce/square.svg" />
                </div>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start mt-10 ">
              <div className="card2 flex gap-5 bg-blue-200 py-5 px-10 rounded-lg" style={{zIndex:"10"}}>
                <div>
                  <Image src={coinbidex} width={60} />
                </div>
                <div>
                  <h1 className="text-lg font-bold">CBE</h1>
                  <p className="text-lg">+1.46%</p>
                </div>

                <div className="mx-5">
                  <h1 className="text-lg font-bold">$56,623.54</h1>
                  <Image src={graph} width={100} />
                </div>
              </div>
            </div>

            {/* <div className="flex justify-center sm:justify-end mt-10 ">
              <div className="bg-blue-200 rounded-large" style={{zIndex:"10"}}>
                <div className="card3      py-5 px-16" >
                  <div className="flex justify-center">
                    <Image className="rounded-full" src={avatar} width={100} />
                  </div>
                  <div className="flex flex-col text-center py-5   justify-center">
                    <h1 className="text-lg font-bold">Esther Howard</h1>
                    <p className="text-lg">estherhoward01@gmail.com</p>
                  </div>
                  <div className=" bg-white-300 rounded-large">
                    <div className=" py-5 px-10  rounded-lg p-5">
                      <div className="internalCard  rounded-lg ">
                        <div className="flex py-1 justify-between">
                          <h1>Portfolio</h1>
                          <FaCircle />
                        </div>
                      </div>
                      <div>
                        <p>Balance</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>$2,509.75 </h1>
                        <h4>+9.77%</h4>
                      </div>
                    </div>
                    <div className="flex w-100 py-2 px-5 flex-col gap-3">
                      <ButtonOutline>Deposit</ButtonOutline>
                      <ButtonOutline>Outlines</ButtonOutline>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
           
         <div className="hidden sm:block absolute bg-blue-800 rounded-large h-96 w-96 top-16 left-44 backColor" style={{zIndex:"0"}}></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CommerceBanner;
