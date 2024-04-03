"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import ButtonOutline from "../misc/ButtonOutline";
const Tab = ({ label, active, onClick }) => {
  
  return (
    <button
      className={`${
        active ? 'border rounded-large px-8 py-2  hover:bg-blue-800 bg-white-300 text-blue-800 hover:text-white-300 border-blue-500' : ' text-black-600'
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
              <div className="font-semibold text-center">24th Volume</div>
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
              <td className="p-2 whitespace-nowrap">{item.price}</td>
              <td className="p-2 whitespace-nowrap font-medium text-green-500">
                {item.change}
              </td>
              <td className="p-2 whitespace-nowrap text-lg text-center">
                {item.volume}
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
      <div className="flex p-1 border w-3/4 flex bg-blue-100  border-gray-400  rounded-large justify-center">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="mt-5 w-full rounded-lg border border-gray-400">
        {tabsData.map((tab, index) => (
          <div key={index} className={activeTab === index ? '' : 'hidden'}>
            <TableList data={tab.data} />
          </div>
        ))}
        
      </div>
    </div>
  );
};

// Usage example
const tabsData = [
  {
    label: 'New Listed',
    data: [
      {
        symbol: 'LOOM',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: '../../assets/loom.png',
      },
      {
        symbol: 'AITECH',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: '../../assets/aitech.png',
      },
      {
        symbol: 'STASH',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: '../../assets/stash.jpeg',
      },
      {
        symbol: 'AITECH',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: '../../assets/aitech.png',
      },
      {
        symbol: 'STASH',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: '../../assets/stash.jpeg',
      },
        {
        symbol: 'AITECH',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: '../../assets/aitech.png',
      },
      {
        symbol: 'STASH',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: '../../assets/stash.jpeg',
      },
      {
        symbol: 'ZK',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: '../../assets/zk.png',
      },
      {
        symbol: 'ETHFI',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: '../../assets/ethfi.png',
      },
    ],
  },
  {
    label: 'Spot Market',
    data: [
      {
        symbol: 'Alice Brown',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: 'https://via.placeholder.com/150',
      },
      {
        symbol: 'Bob Williams',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: 'https://via.placeholder.com/150',
      },
      {
        symbol: 'Eva Davis',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: 'https://via.placeholder.com/150',
      },
      {
        symbol: 'Jack Wilson',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: 'https://via.placeholder.com/150',
      },
      {
        symbol: 'Sophia Martinez',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: 'https://via.placeholder.com/150',
      },
    ],
  },
  {
    label: 'Futures Market',
    data: [
      {
        symbol: 'Mark Taylor',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: 'https://via.placeholder.com/150',
      },
      {
        symbol: 'Sarah Clark',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: 'https://via.placeholder.com/150',
      },
      {
        symbol: 'Oliver Lewis',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: 'https://via.placeholder.com/150',
      },
      {
        symbol: 'Emma Turner',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: 'https://via.placeholder.com/150',
      },
      {
        symbol: 'James Rodriguez',
        price: ' 0.0002321/$0.0002 ',
        change: '+17.05%',
        volume: '29.2701421',
        button: 'Trade',
        avatar: 'https://via.placeholder.com/150',
      },
    ],
  },
  {
    label: 'Leveraged Token',
    data: [
      // Add data for Tab 4
    ],
  },
  {
    label: 'Coinbidex Earn',
    data: [
      // Add data for Tab 5
    ],
  },
];


const App = () => {
  return ( 
    <>
    <div className=" mx-auto px-4 py-5">
      <Tabs tabsData={tabsData} />
      
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