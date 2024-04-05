"use client"
import React, { useEffect, useState } from "react";
import ButtonOutline from "../misc/ButtonOutline";
import { useMarketDataStore } from "@/store/marketDataStore";

const Tab = ({ label, active, onClick }) => {
  return (
    <button
      className={`${active
        ? "border border-b-gray-400 rounded-large  py-2  bg-blue-800 text-white-300 border-blue-500"
        : " text-black-600"
        } focus:outline-none mr-4 `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TableRow = ({ item }) => {
  const [hoverIndex, setHoverIndex] = useState(false);

  return (

    <div
      className={`p-2 whitespace-nowrap  hover:bg-blue-100`}
      onMouseEnter={() => {
        setHoverIndex(true);
      }}
      onMouseLeave={() => {
        setHoverIndex(false);
      }}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-2 sm:mr-3">
          <img
            className="rounded-full"
            src={item.avatar}
            width="25"
            height="25"
            alt={item.name}
          />
        </div>
        <div className=" flex items-center gap-20">
          <div className="font-medium text-gray-800">{item.symbol}</div>
          <div className={`p-2 flex justify-end  ${parseFloat(item.change) > 0 ? "text-green-300" : "text-red-300"} whitespace-nowrap font-medium text-green-500`}>
            {item.change}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 whitespace-nowrap">${item.price}</div>

        <div className="p-2 whitespace-nowrap text-lg text-center">
          ${item.volume}
        </div>
      </div>

      {hoverIndex && (
        <div className="px-2 whitespace-nowrap text-md text-white-500  text-center"></div>
      )}
    </div>
  );
};

const TableList = ({ data }) => {
  return (
    <div className="overflow-x-auto py-3  ">
      <div className="w-full">
        {data?.map((item, index) => (
          <TableRow key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col justify-center align-middle items-center">
      {/* Display tabs as buttons on larger screens */}
      <div className="hidden sm:flex p-1 border  bg-blue-100 border-gray-400 rounded-large justify-center">
        {tabsData?.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      {/* Display tabs as dropdown on mobile screens */}
      <div className="w-full p-2 flex justify-between items-center rounded-lg  border border-gray-400 sm:hidden">
        <select
          className="  py-2 bg-white  rounded-full border-gray-300  focus:outline-none focus:border-blue-800"
          onChange={(e) => setActiveTab(parseInt(e.target.value))}
          value={activeTab}
        >
          {tabsData?.map((item, ind) => (
            <option key={ind} value={ind}>
              Symbol/Price
            </option>
          ))}
        </select>
        <select
          className="w-full   py-2 bg-white border rounded-full border-gray-300  focus:outline-none focus:border-blue-800"
          onChange={(e) => setActiveTab(parseInt(e.target.value))}
          value={activeTab}
        >
          {tabsData?.map((tab, index) => (
            <option key={index} value={index}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>
      {/* Render the table corresponding to the active tab */}
      <div className="w-full  rounded-lg border border-gray-400">
        {tabsData && <TableList data={tabsData[activeTab].data} />}
      </div>
    </div>
  );
};



const MobileTab = () => {
  const [tabData, setTabData] = useState()
  const { marketData } = useMarketDataStore()
  useEffect(() => {
    // Usage example
    const tabsData = [
      {
        label: 'New Listed',
        data: []
      },
      {
        label: 'Spot Market',
        data: []
      },
      {
        label: 'Futures Market',
        data: []
      },
      {
        label: 'Leveraged Token',
        data: []
      },
      {
        label: 'Coinbidex Earn',
        data: []
      },
    ];
    // Function to randomly select coins from the 17 coins array
    function getRandomCoins(array, count) {
      const shuffled = array?.sort(() => 0.5 - Math.random());
      return shuffled?.slice(0, count);
    }
    // Add coins to 'New Listed' tab
    const newCoins = getRandomCoins(marketData, 5); // Assuming adding 5 random coins
    newCoins?.forEach((coin) => {
      tabsData[0].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        change: parseFloat(coin.priceChangePercent).toFixed(1) + '%',
        volume: parseFloat(coin.volume) > 0 ? parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        button: 'Trade',
        avatar: coin.logo,
      });
    });
    // Add coins to 'Spot Market' tab
    const spotCoins = getRandomCoins(marketData, 5); // Assuming adding 5 random coins
    spotCoins?.forEach((coin) => {
      tabsData[1].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        change: parseFloat(coin.priceChangePercent).toFixed(1) + '%',
        volume: parseFloat(coin.volume) > 0 ? parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        button: 'Trade',
        avatar: coin.logo,
      });
    });
    // Add coins to 'Futures Market' tab
    const futureCoins = getRandomCoins(marketData, 5); // Assuming adding 5 random coins
    futureCoins?.forEach((coin) => {
      tabsData[2].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        change: parseFloat(coin.priceChangePercent).toFixed(1) + '%',
        volume: parseFloat(coin.volume) > 0 ? parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        button: 'Trade',
        avatar: coin.logo,
      });
    });
    // Add coins to 'Leveraged Market' tab
    const LeveragedCoins = getRandomCoins(marketData, 5); // Assuming adding 5 random coins
    LeveragedCoins?.forEach((coin) => {
      tabsData[3].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        change: parseFloat(coin.priceChangePercent).toFixed(1) + '%',
        volume: parseFloat(coin.volume) > 0 ? parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.volume).toLocaleString(undefined, { maximumFractionDigits: 6 }),
        button: 'Trade',
        avatar: coin.logo,
      });
    });
    // Add coins to 'Coinbidex Market' tab
    const CoinbidexCoins = getRandomCoins(marketData, 5); // Assuming adding 5 random coins
    CoinbidexCoins?.forEach((coin) => {
      tabsData[4].data.push({
        symbol: coin.useSymbol,
        price: '$' + parseFloat(coin.lastPrice) > 0 ? parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 1 }) : parseFloat(coin.lastPrice).toLocaleString(undefined, { maximumFractionDigits: 6 }),
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
      <div className="  ">
        <Tabs tabsData={tabData} />
      </div>
      <div className="flex py-8 justify-center">
        <ButtonOutline>View the Full List</ButtonOutline>
      </div>
    </>
  );
};

export default MobileTab;
