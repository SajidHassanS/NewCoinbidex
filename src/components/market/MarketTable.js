import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoStar } from "react-icons/go";


import ButtonOutline from "../misc/ButtonOutline";
const Tab = ({ label, active, onClick }) => {
  return (
    <button
      className={`${active
        ? "border-b-4 px-8 py-2  hover:bg-blue-800 bg-white-300 text-blue-800 hover:text-white-300 border-blue-500"
        : " text-black-600"
        } focus:outline-none mr-4 `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TableList = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div className=" overflow-x-auto  px-6">
      <table className="table-fixed w-full ">
        <thead className="text-xs  font-semibold uppercase border border-gray-100 bg-gray-100 text-black-500 bg-gray-50">
          <tr className=" ">
            <th className="p-2 whitespace-nowrap">
              {" "}
              <div className="flex items-center">
                Pair
                <div className="font-semibold text-left flex flex-col items-center ml-2">
                  <IoMdArrowDropup
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleIncreasePair()}
                  />

                  <IoMdArrowDropdown
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleDecreasePair()}
                  />
                </div>
              </div>
            </th>
            <th className="p-2 whitespace-nowrap">
              {" "}
              <div className="flex items-center">
                Last Price
                <div className="font-semibold text-left flex flex-col items-center ml-2">
                  <IoMdArrowDropup
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleIncreasePair()}
                  />

                  <IoMdArrowDropdown
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleDecreasePair()}
                  />
                </div>
              </div>
            </th>
            <th className="p-2 whitespace-nowrap">
              {" "}
              <div className="flex items-center">
                24h Change
                <div className="font-semibold text-left flex flex-col items-center ml-2">
                  <IoMdArrowDropup
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleIncreasePair()}
                  />

                  <IoMdArrowDropdown
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleDecreasePair()}
                  />
                </div>
              </div>
            </th>
            <th className="p-2 whitespace-nowrap">
              {" "}
              <div className="flex items-center">
                24h High
                <div className="font-semibold text-left flex flex-col items-center ml-2">
                  <IoMdArrowDropup
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleIncreasePair()}
                  />

                  <IoMdArrowDropdown
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleDecreasePair()}
                  />
                </div>
              </div>
            </th>
            <th className="p-2 whitespace-nowrap">
              {" "}
              <div className="flex items-center">
                24h Low
                <div className="font-semibold text-left flex flex-col items-center ml-2">
                  <IoMdArrowDropup
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleIncreasePair()}
                  />

                  <IoMdArrowDropdown
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleDecreasePair()}
                  />
                </div>
              </div>
            </th>
            <th className="p-2 whitespace-nowrap">
              {" "}
              <div className="flex items-center">
                24h Volume
                <div className="font-semibold text-left flex flex-col items-center ml-2">
                  <IoMdArrowDropup
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleIncreasePair()}
                  />

                  <IoMdArrowDropdown
                    className="text-blue-500 cursor-pointer "
                    onClick={() => handleDecreasePair()}
                  />
                </div>
              </div>
            </th>
            <th className="p-2 whitespace-nowrap">
              {" "}
              <div className="flex items-center">Go Trade</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm ">
          {data?.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-blue-100 border-b border-gray-400 "
              onMouseEnter={() => setHoverIndex(index)} // Set the hoverIndex when mouse enters the row
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center ">
                  <div className="mr-3"> <GoStar /></div>

                  <div className=" flex-shrink-0 mr-2 sm:mr-3">
                    <img
                      className="rounded-full"
                      src={item.logo}
                      width="25"
                      height="25"
                      alt={item.useSymbol}
                    />
                  </div>
                  <div className=" text-gray-800">{item.useSymbol}</div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">${parseFloat(item.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 })}</td>
              <td className={parseFloat(item.priceChangePercent) < 0 ? "p-2 whitespace-nowrap text-red-300" : "p-2 whitespace-nowrap text-green-300"}>
                {parseFloat(item.priceChangePercent).toFixed(1)}%
              </td>
              <td className="p-2 whitespace-nowrap text-green-300">
                ${parseFloat(item.highPrice).toLocaleString(undefined, { maximumFractionDigits: 1 })}
              </td>
              <td className="p-2 text-red-300 whitespace-nowrap ">
                $ {parseFloat(item.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 1 })}
              </td>

              <td className="p-2 whitespace-nowrap text-start">
                ${parseFloat(item.volume) > 0 ? parseFloat(item.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(item.volume).toLocaleString(undefined, { maximumFractionDigits: 6 })}
              </td>

              <td className="px-2 whitespace-nowrap  text-white-500  text-center">
                <button className="bg-blue-800  hover:bg-red-600 px-4 py-1 rounded-lg text-white">
                  Trade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showTabs, setShowTabs] = useState(false); // State to toggle visibility of tabs on mobile screens
  const [searchTerm, setSearchTerm] = useState("");
  const toggleTabs = () => {
    setShowTabs(!showTabs);
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="border border-blue-100 bg-white-500 rounded-lg">
      <div className="flex flex-col justify-center align-middle items-center">
        <div className="flex p-3   w-full   justify-between">
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          ))}
          <div className=" flex items-center border border-gray-500 rounded-large overflow-hidden">
            <button
              className="flex items-center px-2 justify-center bg-gray-200 text-gray-600 hover:text-gray-900 "
              onClick={handleSearch}
            >
              <CiSearch />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="  outline-none"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className=" w-full rounded-lg ">
          {tabsData.map((tab, index) => (
            <div key={index} className={activeTab === index ? "" : "hidden"}>
              <TableList data={tab.data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Usage example
const tabsData = [
  {
    label: "Favorite",
    data: [
      {
        icon: <GoStar />,
        symbol: "LOOM",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/loom.png",
      },
      {
        symbol: "AITECH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/aitech.png",
      },
      {
        symbol: "STASH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/stash.jpeg",
      },
      {
        symbol: "AITECH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/aitech.png",
      },
      {
        symbol: "STASH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/stash.jpeg",
      },
      {
        symbol: "AITECH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/aitech.png",
      },
      {
        symbol: "STASH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/stash.jpeg",
      },
      {
        symbol: "AITECH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/aitech.png",
      },
      {
        symbol: "STASH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/stash.jpeg",
      },
      {
        symbol: "AITECH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/aitech.png",
      },
      {
        symbol: "STASH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/stash.jpeg",
      },
      {
        symbol: "ZK",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/zk.png",
      },
      {
        symbol: "ETHFI",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/ethfi.png",
      },
      {
        symbol: "ETHFI",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/ethfi.png",
      },
      {
        symbol: "ETHFI",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/ethfi.png",
      },
      {
        symbol: "ETHFI",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        high: "+19.05%",
        low: "+11.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/ethfi.png",
      },
    ],
  },
  {
    label: "Sector",
    data: [
      {
        symbol: "LOOM",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/loom.png",
      },
      {
        symbol: "AITECH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/aitech.png",
      },
      {
        symbol: "STASH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/stash.jpeg",
      },
      {
        symbol: "ZK",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/zk.png",
      },
      {
        symbol: "ETHFI",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/ethfi.png",
      },
    ],
  },
  {
    label: "New Listed",
    data: [
      {
        symbol: "LOOM",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/loom.png",
      },
      {
        symbol: "AITECH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/aitech.png",
      },
      {
        symbol: "STASH",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/stash.jpeg",
      },
      {
        symbol: "ZK",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/zk.png",
      },
      {
        symbol: "ETHFI",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "../../assets/ethfi.png",
      },
    ],
  },
  {
    label: "Spot Market",
    data: [
      {
        symbol: "Alice Brown",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "https://via.placeholder.com/150",
      },
      {
        symbol: "Bob Williams",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "https://via.placeholder.com/150",
      },
      {
        symbol: "Eva Davis",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "https://via.placeholder.com/150",
      },
      {
        symbol: "Jack Wilson",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "https://via.placeholder.com/150",
      },
      {
        symbol: "Sophia Martinez",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    label: "Futures Market",
    data: [
      {
        symbol: "Mark Taylor",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "https://via.placeholder.com/150",
      },
      {
        symbol: "Sarah Clark",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "https://via.placeholder.com/150",
      },
      {
        symbol: "Oliver Lewis",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "https://via.placeholder.com/150",
      },
      {
        symbol: "Emma Turner",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "https://via.placeholder.com/150",
      },
      {
        symbol: "James Rodriguez",
        price: " 0.0002321/$0.0002 ",
        change: "+17.05%",
        volume: "29.2701421",
        button: "Trade",
        avatar: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    label: "Leveraged Token",
    data: [
      // Add data for Tab 4
    ],
  },
];

const MarketTable = ({ marketData }) => {
  return (
    <>
      <div className=" mx-auto px-4 py-5">
        {/* <Tabs tabsData={tabsData} /> */}
        <TableList data={marketData} />
      </div>
    </>
  );
};

export default MarketTable;
