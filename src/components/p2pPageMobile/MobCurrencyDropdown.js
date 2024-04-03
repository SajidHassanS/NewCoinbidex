"use client"
import React, { useState, useEffect, useRef } from "react";

import PLNImage from "../../../public/assets/images/coin/PLN.svg";
import RONImage from "../../../public/assets/images/coin/RON.svg";
import RSDImage from "../../../public/assets/images/coin/RSD.svg";
import TJSImage from "../../../public/assets/images/coin/TJS.svg";
import SARImage from "../../../public/assets/images/coin/SAR.svg";
import SEKImage from "../../../public/assets/images/coin/SEK.svg";
import XMRImage from "../../../public/assets/images/coin/xmr.svg";

const CurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState(["PLN", "RON", "RSD", "TJS", "SAR", "SEK", "xmr"]);
  const [selectedCurrency, setSelectedCurrency] = useState("PLN");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleCurrencyItemClick = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    const filtered = ["PLN", "RON", "RSD", "TJS", "SAR", "SEK", "xmr"].filter(currency =>
      currency.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredCurrencies(filtered);
  };

  return (
    <div className="relative flex text-left rounded-full bg-white-300 border" ref={dropdownRef}>
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Enter Amount"
        className=" border-gray-300 rounded-full px-3 py-1 "
      />

      <button className="dropdown-toggle  text-black-500 px-3 py-1 flex items-center" onClick={() => setIsOpen(!isOpen)}>
        {selectedCurrency === "PLN" && <><img src="assets/images/coin/PLN.svg" width={25} alt="PLN" className="mr-2 bg-black-500 border rounded-full " />PLN</>}
        {selectedCurrency === "RON" && <><img src="assets/images/coin/RON.svg" width={25} alt="RON" className="mr-2 bg-black-500 border rounded-full" />RON</>}
        {selectedCurrency === "RSD" && <><img src="assets/images/coin/RSD.svg" width={25} alt="RSD" className="mr-2 bg-black-500 border rounded-full" />RSD</>}
        {selectedCurrency === "TJS" && <><img src="assets/images/coin/TJS.svg" width={25} alt="TJS" className="mr-2 bg-black-500 border rounded-full" />TJS</>}
        {selectedCurrency === "SAR" && <><img src="assets/images/coin/SAR.svg" width={25} alt="SAR" className="mr-2 bg-black-500 border rounded-full" />SAR</>}
        {selectedCurrency === "SEK" && <><img src="assets/images/coin/SEK.svg" width={25} alt="SEK" className="mr-2 bg-black-500 border rounded-full" />SEK</>}
        {selectedCurrency === "xmr" && <><img src="assets/images/coin/xmr.svg" width={25} alt="XMR" className="mr-2 bg-black-500 border rounded-full" />XMR</>}
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
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-white-500 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <input className="search-input1 border border-gray-300 rounded px-3 py-1 mb-2" onChange={handleInputChange} placeholder="Search currency..." />
            {filteredCurrencies.map(currency => (
              <button key={currency} className="dropdown-item  text-white px-3 py-1 rounded flex items-center mb-2" onClick={() => handleCurrencyItemClick(currency)}>
                {currency === "PLN" && <><img src="assets/images/coin/PLN.svg" width={25} alt="PLN" className="mr-2 bg-black-500 border rounded-full" />PLN</>}
                {currency === "RON" && <><img src="assets/images/coin/RON.svg" width={25} alt="RON" className="mr-2 bg-black-500 border rounded-full" />RON</>}
                {currency === "RSD" && <><img src="assets/images/coin/RSD.svg" width={25} alt="RSD" className="mr-2 bg-black-500 border rounded-full" />RSD</>}
                {currency === "TJS" && <><img src="assets/images/coin/TJS.svg" width={25} alt="TJS" className="mr-2 bg-black-500 border rounded-full" />TJS</>}
                {currency === "SAR" && <><img src="assets/images/coin/SAR.svg" width={25} alt="SAR" className="mr-2 bg-black-500 border rounded-full" />SAR</>}
                {currency === "SEK" && <><img src="assets/images/coin/SEK.svg" width={25} alt="SEK" className="mr-2 bg-black-500 border rounded-full" />SEK</>}
                {currency === "xmr" && <><img src="assets/images/coin/xmr.svg" width={25} alt="XMR" className="mr-2 bg-black-500 border rounded-full" />XMR</>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
