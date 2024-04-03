import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoStar } from "react-icons/go";
import ButtonOutline from "../misc/ButtonOutline";

const Tab = ({ label, active, onClick }) => {
  return (
    <button
      className={`${
        active
          ? "border-b-4 px-8 py-2 hover:bg-blue-800 bg-white-300 text-blue-800 hover:text-white-300 border-blue-500"
          : "text-black-600"
      } focus:outline-none mr-4`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TableRow = ({ item, onMouseEnter, onMouseLeave }) => {
  const [hoverIndex, setHoverIndex] = useState(false);

  return (
    <div
      className={`p-2 whitespace-nowrap hover:bg-blue-100`}
      onMouseEnter={() => {
        setHoverIndex(true);
        onMouseEnter();
      }}
      onMouseLeave={() => {
        setHoverIndex(false);
        onMouseLeave();
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
        <div className="flex items-center gap-20">
          <div className="font-medium text-gray-800">{item.symbol}</div>
          <div className="p-2 flex justify-end whitespace-nowrap font-medium text-green-500">
            {item.change}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 whitespace-nowrap">{item.price}</div>
        <div className="p-2 whitespace-nowrap text-lg text-center">
          {item.volume}
        </div>
      </div>
      <div className="flex">
        <div className="p-2 whitespace-nowrap">{item.low}</div>
        <div className="p-2 whitespace-nowrap text-lg text-center">
          {item.high}
        </div>
      </div>
      {hoverIndex && (
        <div className="px-2 whitespace-nowrap text-md text-white-500 text-center"></div>
      )}
    </div>
  );
};

const TableList = ({ data }) => {
  return (
    <div className="overflow-x-auto py-3">
      <div className="w-full">
        {data.map((item, index) => (
          <TableRow
            key={index}
            item={item}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <div className="hidden sm:flex p-1 border bg-blue-100 border-gray-400 rounded-large justify-center">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="w-full p-2 flex justify-between items-center rounded-lg border border-gray-400 sm:hidden">
        <select
          className="py-2 bg-white rounded-full border-gray-300 focus:outline-none focus:border-blue-800"
          onChange={(e) => setActiveTab(parseInt(e.target.value))}
          value={activeTab}
        >
          {tabsData.map((item, index) => (
            <option key={index} value={index}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full rounded-lg border border-gray-400">
        <TableList data={tabsData[activeTab].data} />
      </div>
    </div>
  );
};

const MobileMarketTable = () => {
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

  return (
    <>
      <div className="mx-auto px-4 py-5">
        <Tabs tabsData={tabsData} />
      </div>
     
    </>
  );
};

export default MobileMarketTable;
