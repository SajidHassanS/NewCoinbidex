import React, { useState, useRef, useEffect } from "react";


const RefreshSetting = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Refresh Setting");
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
    <div className="dropdown relative" ref={dropdownRef}>
      <button
        className="dropdown-toggle bg-gray-700 text-white px-4 py-2 rounded flex justify-between items-center"
        onClick={() => setIsOpenCurrencyDropdown(!isOpenCurrencyDropdown)}
      >
        <span>{selectedCurrency}</span>
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
      {isOpenCurrencyDropdown && (
        <div className="dropdown-menu absolute bg-white-300 text-white rounded">
          <button
            className="dropdown-item px-4 py-2"
            onClick={() => handleCurrencyItemClick("Refresh Setting")}
          >
            Refresh Setting
          </button>
          <button
            className="dropdown-item px-4 py-2"
            onClick={() => handleCurrencyItemClick("Not Now")}
          >
            Not Now
          </button>
          <button
            className="dropdown-item px-4 py-2"
            onClick={() => handleCurrencyItemClick("5s to Refresh")}
          >
            5s to Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default RefreshSetting;
