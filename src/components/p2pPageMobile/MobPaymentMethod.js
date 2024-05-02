import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa";

const PaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [confirmedPaymentMethod, setConfirmedPaymentMethod] = useState("");
  const [paymentMethods] = useState([
    "Bank Transfer",
    "PayPal",
    "Venmo",
    "Cash App",
    "Credit Card",
    "Bitcoin",
    "Apple Pay",
    "Google Pay",
    "Stripe",
  ]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleConfirmClick = () => {
    setConfirmedPaymentMethod(selectedPaymentMethod);
    setIsDropdownOpen(false);
    console.log("Selected Payment Method:", selectedPaymentMethod);
  };

  const handleResetClick = () => {
    setSelectedPaymentMethod("");
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredPaymentMethods = paymentMethods.filter((method) =>
    method.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
        <div>{confirmedPaymentMethod ? confirmedPaymentMethod : "All Payment Method"}</div>
        <FaAngleDown className="ml-2" />
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu absolute top-full left-0 z-50 border border-gray-300 bg-white-300 rounded-md shadow-lg">
          <input
            className="search-input w-full p-2 border-b border-gray-300 rounded-t-md"
            type="text"
            value={selectedPaymentMethod}
            onChange={handleInputChange}
            placeholder="Search payment methods..."
          />
          <div className="dropdown-list max-h-40 overflow-y-auto">
            {filteredPaymentMethods.map((method, index) => (
              <div
                key={method}
                className={`dropdown-item flex items-center p-2 border-b border-gray-300 cursor-pointer ${
                  selectedPaymentMethod === method ? "bg-gray-300" : ""
                }`}
                onClick={() => setSelectedPaymentMethod(method)}
              >
                <div className="check-and-text">
                  {selectedPaymentMethod === method && <FaCheck className="check-icon" />}
                  {method}
                </div>
              </div>
            ))}
          </div>
          <div className="dropdown-buttons flex justify-between p-2">
            <button className="confirm-button py-2 px-4 bg-blue-500 text-white rounded cursor-pointer" onClick={handleConfirmClick}>
              Confirm
            </button>
            <button className="reset-button py-2 px-4 bg-blue-500 text-white rounded cursor-pointer" onClick={handleResetClick}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
