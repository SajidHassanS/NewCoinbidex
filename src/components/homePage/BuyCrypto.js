"use client"
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import visa from "../../../public/assets/bank/visa.png";
import payoneer from "../../../public/assets/bank/payoneer.png";
import pay from "../../../public/assets/bank/pay.png";
import banx from "../../../public/assets/bank/banx.png";
import mercuryo from "../../../public/assets/bank/mercuryo.png";
import moonpay from "../../../public/assets/bank/moonpay.png";
import simplex from "../../../public/assets/bank/simplex.png";
import paygoogle from "../../../public/assets/bank/paygoogle.png";
import ButtonOutline from "../misc/ButtonOutline";

const BuyCrypto = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <div className="flex flex-col  justify-center ml-auto w-full ">
          <h3 className="text-3xl lg:text-4xl  mb-6 font-medium leading-relaxed text-black-600">
            Buy crypto with Easy
          </h3>
          <p className="my-2 text-black-500">
            Buy crypto immediately with Google Pay or Credit Card. Unlimited
            swaps to hundreds of cryptocurrencies.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-1 items-center py-4">
            <Image src={visa} width={70} height={35} />
            <Image src={payoneer} width={70} height={35} />
            <Image src={pay} width={70} height={35} />
            <Image src={paygoogle} width={70} height={35} />
          </div>
          <div className="py-4 mb-6">
            <hr />
          </div>

          <div>
            <h3 className="text-xl lg:text-xl font-medium leading-relaxed text-black-600">
              or buy using third-party methods
            </h3>
            <p className="my-2 text-black-500">
              Conveniently buy digital currency using third-party payment.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-4 items-center ">
            <div
              className=" "
              style={{ width: "100px", height: "auto" }}
            >
              <Image src={banx} />
            </div>
            {/* <div className="w-25">
                    <Image src={banx} width={100} />
                    </div> */}
            <div
              className=" "
              style={{ width: "100px", height: "auto" }}
            >
              <Image src={mercuryo} />
            </div>
            <div
              className=""
              style={{ width: "100px", height: "auto" }}
            >
              <Image src={moonpay} />
            </div>
            <div
              className=""
              style={{ width: "100px", height: "auto" }}
            >
              <Image src={simplex} />
            </div>
          </div>
          <div>
            <ButtonOutline>Start Trading</ButtonOutline>
          </div>
        </div>

        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCrypto;
