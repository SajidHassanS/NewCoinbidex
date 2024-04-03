import React, { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import ButtonOutline from "../misc/ButtonOutline";
import { AiOutlineBank } from "react-icons/ai"; 
import { FaRegCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { TbBrandCashapp } from "react-icons/tb";

const Table = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const data = [
    {
      advertiserName: "Mr_Kot",
      price: "4.03",
      available: "1,343.1811 USDT",
      limits: "10.00 ~ 5,413.01 PLN",
      paymentMethod: "PLN Balance",
      eligible: "Eligible",
    },
    {
      advertiserName: "John Doe",
      price: "5.55",
      available: "2,000.00 USDT",
      limits: "20.00 ~ 8,000.00 PLN",
      paymentMethod: "Credit Card",
      eligible: "Not Eligible",
    },
    {
      advertiserName: "Jane Smith",
      price: "3.20",
      available: "800.50 USDT",
      limits: "5.00 ~ 2,500.00 PLN",
      paymentMethod: "Bank Transfer",
      eligible: "Eligible",
    },
    {
      advertiserName: "Alice Johnson",
      price: "7.89",
      available: "4,500.25 USDT",
      limits: "50.00 ~ 10,000.00 PLN",
      paymentMethod: "PayPal",
      eligible: "Eligible",
    },
    {
      advertiserName: "Bob Williams",
      price: "6.75",
      available: "3,200.75 USDT",
      limits: "30.00 ~ 7,500.00 PLN",
      paymentMethod: "Cash",
      eligible: "Not Eligible",
    },
  ];
  

  return (
    <div className="table-container">
      <table className="table-fixed w-full ">
        <thead>
          <tr>
            <th className="w-1/5 text-left  border-t-2 py-3 border-b-2 border-white-500">Advertiser</th>
            <th className="w-1/5 text-left border-t-2 py-3 border-b-2 border-white-500">Price</th>
            <th className="w-2/5 text-left border-t-2 py-3 border-b-2 border-white-500">Available | Limits</th>
            <th className="w-1/5 text-left border-t-2 py-3 border-b-2 border-white-500">Payment Method</th>
            <th className="w-1/5 text-left border-t-2 py-3 border-b-2 border-white-500">
              <div className="gradient-background">Taker 0 Transaction Fees</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <LoadingPlaceholders count={data.length} />
          ) : (
            data.map((item, index) => <TableData key={index} {...item} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

const LoadingPlaceholders = ({ count }) => {
  const placeholders = Array.from({ length: count }, (_, index) => (
    <LoadingPlaceholder key={index} />
  ));

  return <>{placeholders}</>;
};

const LoadingPlaceholder = () => {
  return (
    <tr className="placeholder-glow">
      <td className="col-span-5">
        <div className="placeholder rounded-full w-12 h-12 mx-auto"></div>
        <div className="placeholder h-6 mt-2 mb-4 rounded"></div>
        <div className="flex justify-center">
          <button className="btn btn-secondary w-24 h-10 placeholder-button"></button>
        </div>
      </td>
    </tr>
  );
};

const TableData = ({ advertiserName, price, available, limits, paymentMethod, eligible }) => {
  const firstLetter = advertiserName.charAt(0).toUpperCase();
  const selectIcon = (paymentMethod) => {
    switch (paymentMethod) {
      case "PLN Balance":
        return <AiOutlineBank className="info-icon hidden sm:block ml-2 text-black-500" />;
        case "PayPal":
        return <FaPaypal className="info-icon hidden sm:block ml-2 text-black-500" />;
        case "Credit Card":
        return <FaRegCreditCard className="info-icon hidden sm:block ml-2 text-black-500" />;
        case "Cash":
        return <TbBrandCashapp className="info-icon hidden sm:block ml-2 text-black-500" />;
        case "Bank Transfer":
        return <AiOutlineBank className="info-icon hidden sm:block ml-2 text-black-500" />;
      // Add more cases for other payment methods if needed
      default:
        return <FaInfoCircle className="info-icon hidden sm:block ml-2 text-black-500" />;
    }
  };
  return (
    <tr className="tableRow">
       <td className="w-1/5 py-2">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-8 w-8 relative">
            {/* Grey background for the first letter */}
            <div className="first-letter border rounded-full flex items-center  justify-center">{firstLetter}</div>
            {/* Dot icon positioned at the bottom right */}
            <GoDotFill size={20} className="dot-icon" color="green" />
          </div>
          <div className="ml-3">
            <div className="font-semibold text-white">{advertiserName}</div>
            <div className="text-sm text-black-500">548 Order(s) | 99%</div>
            <div className="text-sm text-green-400">Online</div>
          </div>
        </div>
      </td>
      <td className="w-1/5 pln  py-2">
        <p className="font-semibold text-white">
          {price}{" "}
          <span className="text-black-500 font-normal text-sm">PLN</span>
        </p>
      </td>
      <td className="w-2/5  py-2">
        <div className="font-semibold text-white">
          <div><p>Available</p></div>
          <div>{available}</div>
        </div>
        <div className="font-semibold text-white">
          <div><p>Limits</p></div>
          <div>{limits}</div>
        </div>
      </td>
      <td className="w-1/5 py-2">
        <div className="flex items-center">
        <span className="font-semibold text-white">{paymentMethod}</span>
          {selectIcon(paymentMethod)} {/* Render the icon */}
          {/* Other content */}
          <div className="flex flex-col sm:hidden">
            <button className="buyUsdt-button">Buy USDT</button>
          </div>
        </div>
      </td>
      <td className="w-1/5 px-4 py-2">
        <div className="font-semibold text-white">
          <ButtonOutline className="eligible-button">{eligible}</ButtonOutline>
        </div>
      </td>
    </tr>
  );
};

export default Table;
