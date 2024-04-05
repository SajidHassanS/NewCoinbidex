"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ButtonOutline from "../misc/ButtonOutline";
import { useMarketDataStore } from '@/store/marketDataStore';
const Tab = ({ label, active, onClick }) => {

  return (
    <button
      className={`${active ? 'border rounded-large px-8 py-2  hover:bg-blue-800 bg-white-300 text-blue-800 hover:text-white-300 border-blue-500' : ' text-black-600'
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
    <div className=" overflow-x-auto py-3 px-6">
      <table className="table-fixed w-full ">
        <thead className="text-xs font-semibold uppercase border-b text-black-500 bg-gray-50">
          <tr className=' '>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Symbol</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Price(USD)</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Change</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-start">24th Volume</div>
            </th>
            <th className="p-2 whitespace-nowrap text-white-300">
              <div className="font-semibold text-center"> </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm ">
          {data.map((item, index) => (
            <tr key={index} className='hover:bg-blue-100'

              onMouseEnter={() => setHoverIndex(index)} // Set the hoverIndex when mouse enters the row
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center ">
                  <div className=" flex-shrink-0 mr-2 sm:mr-3">
                    <img
                      className="rounded-full"
                      src={item.avatar}
                      width="25"
                      height="25"
                      alt={item.name}
                    />
                  </div>
                  <div className="font-medium text-gray-800">{item.symbol}</div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">${item.price}</td>
              <td className={`p-2 whitespace-nowrap font-medium ${parseFloat(item.change) > 0 ? "text-green-300" : "text-red-300"}`}>
                {item.change}
              </td>
              <td className="p-2 whitespace-nowrap text-lg text-start">
                ${item.volume}
              </td>

              <td className="px-2 whitespace-nowrap text-md text-white-500  text-center">
                {hoverIndex === index && ( // Render button only when row is hovered
                  <button className="bg-blue-800  hover:bg-red-600 px-4 py-2 rounded-large text-white">
                    Trade
                  </button>
                )}
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

  const toggleTabs = () => {
    setShowTabs(!showTabs);
  };

  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <div className="flex p-1 border w-3/4 bg-blue-100  border-gray-400  rounded-large justify-center">
        {tabsData?.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="mt-5 w-full rounded-lg border border-gray-400">
        {tabsData?.map((tab, index) => (
          <div key={index} className={activeTab === index ? '' : 'hidden'}>
            <TableList data={tab.data} />
          </div>
        ))}

      </div>
    </div>
  );
};




const App = () => {
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
      <div className=" mx-auto px-4 py-5">
        <Tabs tabsData={tabData} />

      </div>
      <div className='flex justify-center'>
        <Link href="/market">
          <div>
            <ButtonOutline>View the Full List</ButtonOutline>
          </div>
        </Link>
      </div>
    </>
  );
};

export default App;