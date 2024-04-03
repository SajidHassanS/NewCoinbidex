"use client"
import React,{useState} from "react";
import Image from "next/image";
import { CiGift } from "react-icons/ci";
import ButtonOutline from "../misc/ButtonOutline";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const AllProduct = () => {
  // Define an array containing objects with data for each card
  const products = [
    {
      id: 1,
      name: "SOL",
      image: "/assets/stacking/sol.png",
      apr: "7.00% ~ 13.00%",
    },
    {
      id: 2,
      name: "ETH2.0",
      image: "/assets/stacking/eth.png",
      apr: "6.50% ~ 12.50%",
    },
    {
      id: 3,
      name: "NEAR",
      image: "/assets/stacking/near.png",
      apr: "8.00% ~ 14.00%",
    },
    {
      id: 4,
      name: "MANTA",
      image: "/assets/stacking/manta.png",
      apr: "7.50% ~ 13.50%",
    },
    {
      id: 5,
      name: "DYM",
      image: "/assets/stacking/dym.jpeg",
      apr: "7.20% ~ 13.20%",
    },
    {
      id: 6,
      name: "OSMO",
      image: "/assets/stacking/osmo.png",
      apr: "7.80% ~ 13.80%",
    },
    {
      id: 7,
      name: "IOST",
      image: "/assets/stacking/lost.png",
      apr: "6.80% ~ 12.80%",
    },
  
    {
      id: 8,
      name: "CORE",
      image: "/assets/stacking/core.png",
      apr: "5.50% ~ 11.50%",
    },
    {
      id: 9,
      name: "CORE",
      image: "/assets/stacking/core.png",
      apr: "5.50% ~ 11.50%",
    },
    {
      id: 10,
      name: "CORE",
      image: "/assets/stacking/core.png",
      apr: "5.50% ~ 11.50%",
    },
    {
      id: 11,
      name: "CORE",
      image: "/assets/stacking/core.png",
      apr: "5.50% ~ 11.50%",
    },
    {
      id: 12,
      name: "CORE",
      image: "/assets/stacking/core.png",
      apr: "5.50% ~ 11.50%",
    },
  ];

    // State to manage whether to show all products or not
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    console.log("Toggling showAll");
    setShowAll(!showAll);
  };

  // Determine the number of products to display based on the showAll state
  const displayedProducts = showAll ? products : products.slice(0, 8);

  console.log("showAll:", showAll);

  return (
    <div className="max-w-screen-xl mt-24 py-24 px-4 xl:px-4 mx-auto">
      <div className="flex pb-6 flex-col justify-center items-start">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl text-black-600 leading-normal">
          <strong className=" text-black-600">All Products</strong>
        </h1>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8">
        {/* Map over the displayed products array to render each card */}
        {displayedProducts.map((product, index) => (
          <div
            key={product.id}
            className={`relative bg-white-500 border border-blue-200  shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-3 ${
              !showAll && index > 7 ? "hidden" : ""
            }`}
          >
            {/* Card content */}
            <div className="text-2xl py-5 flex justify-center">
              <h1 className="text-black-500">{product.name}</h1>
            </div>
            <div className="mx-auto flex justify-center">
              <Image
                className="rounded-full"
                src={product.image}
                width={100}
                height={100}
              />
            </div>
            <div className="mx-auto flex justify-center items-center">
              <div className="bg-blue-200 rounded-lg p-1 flex justify-center items-center">
                <CiGift />
                <h1 className="">Coinbidex Bounus</h1>
              </div>
            </div>
            <div className="text-center mt-2">
              <p className="text-gray-500">APR</p>
            </div>
            <div className="text-2xl py-4 mt-2 text-gray-700 flex items-center justify-around">
              <h1>{product.apr}</h1>
            </div>
            <div className="p-4 px-8 mt-2">
              <button className="font-medium p-2 tracking-wide w-full border border-blue-800 text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-800 hover:text-white-500">
                Stake
              </button>
            </div>
            <span className="absolute bg-orange-300 top-3 right-0 bg-red-500 text-white px-2 py-1 ">Hot</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center  my-14">
  <button className="border border-blue-800 text-blue-800 bg-white-500 py-2 px-4 rounded-full flex items-center capitalize hover:bg-blue-800 hover:text-white-500 transition-all hover:shadow-blue" onClick={toggleShowAll}>
    Show all {showAll ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
  </button>
</div>

    </div>
  );
};

export default AllProduct;