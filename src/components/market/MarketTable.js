import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoStar } from "react-icons/go";


import ButtonOutline from "../misc/ButtonOutline";
import { useMarketDataStore } from "@/store/marketDataStore";
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
                      src={item.avatar}
                      width="25"
                      height="25"
                      alt={item.name}
                    />
                  </div>
                  <div className=" text-gray-800">{item.name}</div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">${item.price}</td>
              <td className={`p-2 whitespace-nowrap font-medium ${parseFloat(item.change) > 0 ? "text-green-300" : "text-red-300"}`}>
                {item.change}
              </td>
              <td className="p-2 whitespace-nowrap text-green-300">
                ${item.highPrice}
              </td>
              <td className="p-2 text-red-300 whitespace-nowrap ">
                $ {item.lowPrice}
              </td>

              <td className="p-2 whitespace-nowrap text-start">
                ${item.volume}
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
          {tabsData?.map((tab, index) => (
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
          {tabsData?.map((tab, index) => (
            <div key={index} className={activeTab === index ? "" : "hidden"}>
              <TableList data={tab.data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const MarketTable = () => {
  const { marketData } = useMarketDataStore()
  const [tabData, setTabData] = useState()
  useEffect(() => {
    // Usage example
    const tabsData = [
      {
        label: "Favorite",
        data: [],
      },
      {
        label: "Sector",
        data: [],
      },
      {
        label: "New Listed",
        data: [],
      },
      {
        label: "Spot Market",
        data: [],
      },
      {
        label: "Futures Market",
        data: [],
      },
      {
        label: "Leveraged Token",
        data: [],
      },
    ];
    // Function to randomly select coins from the 17 coins array
    function getRandomCoins(array, count) {
      const shuffled = array?.sort(() => 0.5 - Math.random());
      return shuffled?.slice(0, count);
    }
    // Add coins to 'Favourite' tab
    const favouriteCoins = getRandomCoins(marketData, 10); // Assuming adding 5 random coins
    favouriteCoins?.forEach((coin) => {
      tabsData[0].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        highPrice: '$' + parseFloat(coin.highPrice) > 0 ? parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        lowPrice: '$' + parseFloat(coin.lowPrice) > 0 ? parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        change: parseFloat(coin.priceChangePercent).toFixed(1) + '%',
        volume: parseFloat(coin.volume) > 0 ? parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        button: 'Trade',
        avatar: coin.logo,
      });
    });
    // Add coins to 'Sector' tab
    const sectorCoins = getRandomCoins(marketData, 5); // Assuming adding 5 random coins
    sectorCoins?.forEach((coin) => {
      tabsData[1].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        highPrice: '$' + parseFloat(coin.highPrice) > 0 ? parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        lowPrice: '$' + parseFloat(coin.lowPrice) > 0 ? parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        change: parseFloat(coin.priceChangePercent).toFixed(1) + '%',
        volume: parseFloat(coin.volume) > 0 ? parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        button: 'Trade',
        avatar: coin.logo,
      });
    });
    // Add coins to 'New Listed' tab
    const newCoins = getRandomCoins(marketData, 5); // Assuming adding 5 random coins
    newCoins?.forEach((coin) => {
      tabsData[2].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        highPrice: '$' + parseFloat(coin.highPrice) > 0 ? parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        lowPrice: '$' + parseFloat(coin.lowPrice) > 0 ? parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        change: parseFloat(coin.priceChangePercent).toFixed(1) + '%',
        volume: parseFloat(coin.volume) > 0 ? parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        button: 'Trade',
        avatar: coin.logo,
      });
    });
    // Add coins to 'Spot Market' tab
    const spotCoins = getRandomCoins(marketData, 5); // Assuming adding 5 random coins
    spotCoins?.forEach((coin) => {
      tabsData[3].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        highPrice: '$' + parseFloat(coin.highPrice) > 0 ? parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        lowPrice: '$' + parseFloat(coin.lowPrice) > 0 ? parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        change: parseFloat(coin.priceChangePercent).toFixed(1) + '%',
        volume: parseFloat(coin.volume) > 0 ? parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        button: 'Trade',
        avatar: coin.logo,
      });
    });
    // Add coins to 'Futures Market' tab
    const futureCoins = getRandomCoins(marketData, 5); // Assuming adding 5 random coins
    futureCoins?.forEach((coin) => {
      tabsData[4].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        highPrice: '$' + parseFloat(coin.highPrice) > 0 ? parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        lowPrice: '$' + parseFloat(coin.lowPrice) > 0 ? parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        change: parseFloat(coin.priceChangePercent).toFixed(1) + '%',
        volume: parseFloat(coin.volume) > 0 ? parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        button: 'Trade',
        avatar: coin.logo,
      });
    });
    // Add coins to 'Leveraged Market' tab
    const LeveragedCoins = getRandomCoins(marketData, 5); // Assuming adding 5 random coins
    LeveragedCoins?.forEach((coin) => {
      tabsData[5].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        highPrice: '$' + parseFloat(coin.highPrice) > 0 ? parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.highPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        lowPrice: '$' + parseFloat(coin.lowPrice) > 0 ? parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lowPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        change: parseFloat(coin.priceChangePercent).toFixed(1) + '%',
        volume: parseFloat(coin.volume) > 0 ? parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        button: 'Trade',
        avatar: coin.logo,
      });
    });
    setTabData(tabsData)
  }, [marketData])
  return (
    <>
      <div className=" mx-auto px-4 py-5">
        <Tabs tabsData={tabData} />
      </div>
    </>
  );
};

export default MarketTable;
