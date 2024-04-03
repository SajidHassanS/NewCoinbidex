import React, { useState, useRef, useEffect } from 'react';
import usdt from "../../../public/assets/images/coin/usdt.png";

import eth from "../../../public/assets/images/coin/eths.png";
import usdc from "../../../public/assets/images/coin/usdc.png";
import btc from "../../../public/assets/images/coin/bitcoin.png";
import Image from 'next/image';

const Usdt = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [isOpenCurrencyDropdown, setIsOpenCurrencyDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenCurrencyDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleCurrencyItemClick = (currency) => {
    setSelectedCurrency(currency);
    setIsOpenCurrencyDropdown(false);
  };

  return (
    <div className="relative block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex justify-center w-full rounded-large border border-gray-300 shadow-sm bg-white-300 px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          onClick={() => setIsOpenCurrencyDropdown(!isOpenCurrencyDropdown)}
        >
          {selectedCurrency === "USDT" && (
            <>
              <Image src={usdt} width={15} alt="" className="mr-2" /> USDT
            </>
          )}
          {selectedCurrency === "EUR" && (
            <>
              <Image src={eth} width={15} alt="" className="mr-2" /> ETH
            </>
          )}
          {selectedCurrency === "BTC" && (
            <>
              <Image src={btc} width={15} alt="" className="mr-2" /> BTC
            </>
          )}
          {selectedCurrency === "USDC" && (
            <>
              <Image src={usdc} width={15} alt="" className="mr-2" /> USDC
            </>
          )}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpenCurrencyDropdown && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white-300 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              onClick={() => handleCurrencyItemClick("USDT")}
            >
              <Image src={usdt} width={15} alt="" className="mr-2" /> USDT
            </button>
            <button
              className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              onClick={() => handleCurrencyItemClick("EUR")}
            >
              <Image src={eth} width={15} alt="" className="mr-2" /> ETH
            </button>
            <button
              className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              onClick={() => handleCurrencyItemClick("BTC")}
            >
              <Image src={btc} width={15} alt="" className="mr-2" /> BTC
            </button>
            <button
              className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              onClick={() => handleCurrencyItemClick("USDC")}
            >
              <Image src={usdc} width={15} alt="" className="mr-2" /> USDC
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usdt;
