import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

const Filter = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Filter");
  const [showVerifiedAds, setShowVerifiedAds] = useState(false);
  const [showEligibleAds, setShowEligibleAds] = useState(false);
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

  const toggleDropdown = () => {
    setIsOpenCurrencyDropdown(!isOpenCurrencyDropdown);
  };

  const handleCurrencyItemClick = (currency) => {
    setSelectedCurrency(currency);
    setIsOpenCurrencyDropdown(false);
  };

  const handleShowVerifiedChange = () => {
    setShowVerifiedAds(!showVerifiedAds);
  };

  const handleShowEligibleChange = () => {
    setShowEligibleAds(!showEligibleAds);
  };

  const handleFilterClick = () => {
    if (isOpenCurrencyDropdown && selectedCurrency === "Filter") {
      setIsOpenCurrencyDropdown(false);
    } else {
      setSelectedCurrency("Filter");
      toggleDropdown();
    }
  };
  

  return (
    <div className="relative inline-block text-left">
      <button
        className="dropdown-toggle flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
        onClick={toggleDropdown}
      >
        <span>{selectedCurrency}</span>
        <FaAngleDown className={`ml-2 ${isOpenCurrencyDropdown ? "transform rotate-180" : ""}`} />
      </button>
      {isOpenCurrencyDropdown && (
        <div ref={dropdownRef} className="dropdown-menu origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white-300 ring-1 ring-black ring-opacity-5">
          {/* Dropdown menu for currency */}
          {/* Checkboxes */}
          <div className="p-2 space-y-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showVerifiedAds}
                onChange={handleShowVerifiedChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Show only Available ads</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showEligibleAds}
                onChange={handleShowEligibleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Show only Eligible ads</span>
            </label>
          </div>
          <div className="dropdown-divider border-t border-gray-200"></div>
          {/* Buttons */}
          <div className="flex justify-end p-2">
            <button
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
              onClick={() => {
                setSelectedCurrency("Filter");
                toggleDropdown();
              }}
            >
              Confirm
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
              onClick={toggleDropdown}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
