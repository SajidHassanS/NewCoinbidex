"use client"
import React,{useState,useEffect,useMemo} from "react";
import Layout from "../../components/Layout/Layout";
// import getScrollAnimation from "../utils/getScrollAnimation";
import Image from "next/image";
import bnb from "../../../public/assets/bnb.png";
import btc from "../../../public/assets/market/BTC.png";
import eth from "../../../public/assets/market/ETH.png";
import logo from "../../../public/assets/logonew.png";
import MobileMarketTable from "../../components/market/MobileMarketTable";

import MarketTable from "../../components/market/MarketTable";
const Market = () => {
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 520); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  return (
    <>
      <Layout>
        <div className="bg-blue-100 w-full ">
          <div className="max-w-screen-xl mt-32  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
            <div className="flex flex-col w-full mt-16 mb-10">
              <div className="content">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="card bg-white-300 border rounded-lg border-white-300  shadow-lg shadow-blue-800/50   border-gray-300">
                    <div className="flex justify-between px-3 p-4  items-center align-middle">
                      <div className="flex  items-center gap-3 align-middle icon-container  ">
                        <Image
                          className="rounded-lg"
                          src={bnb}
                          width={40}
                          height={40}
                        />
                        <h4 className="text-lg ">BNB</h4>
                      </div>

                      <div className=" text-end">
                        <h4 className=" text-red-300 ">-0.4%</h4>
                      </div>
                    </div>
                    <div className=" gap-4 px-5 py-3 text-left">
                      <h4 className="text-green-300">
                        0.07032 <span className="ml-3 text-xs">$0.0704</span>
                      </h4>
                      <h4 className="text-xs">24h Volume 2.098.234</h4>
                    </div>
                  </div>
                  <div className="card bg-white-300 border rounded-lg border-blue-200  shadow-lg shadow-blue-800/50   border-gray-300">
                    <div className="flex justify-between px-3 p-4  items-center align-middle">
                      <div className="flex  items-center gap-3 align-middle icon-container  ">
                        <Image
                          className="rounded-lg"
                          src={btc}
                          width={40}
                          height={40}
                        />
                        <h4 className="text-lg ">BTC</h4>
                      </div>

                      <div className=" text-end">
                        <h4 className=" text-red-300 ">-0.4%</h4>
                      </div>
                    </div>
                    <div className=" gap-4 px-5 py-3 text-left">
                      <h4 className="text-green-300">
                        0.07032 <span className="ml-3 text-xs">$0.0704</span>
                      </h4>
                      <h4 className="text-xs">24h Volume 2.098.234</h4>
                    </div>
                  </div>
                  <div className="card bg-white-300 border rounded-lg border-blue-200  shadow-lg shadow-blue-800/50   border-gray-300">
                    <div className="flex justify-between px-3 p-4  items-center align-middle">
                      <div className="flex  items-center gap-3 align-middle icon-container  ">
                        <Image
                          className="rounded-lg"
                          src={eth}
                          width={40}
                          height={40}
                        />
                        <h4 className="text-lg ">ETH</h4>
                      </div>

                      <div className=" text-end">
                        <h4 className=" text-red-300 ">-0.4%</h4>
                      </div>
                    </div>
                    <div className=" gap-4 px-5 py-3 text-left">
                      <h4 className="text-green-300">
                        0.07032 <span className="ml-3 text-xs">$0.0704</span>
                      </h4>
                      <h4 className="text-xs">24h Volume 2.098.234 </h4>
                    </div>
                  </div>
                  <div className="card border rounded-lg border-blue-200 bg-white-300  shadow-lg shadow-blue-800/50   border-gray-300">
                    <div className="flex justify-between px-3 p-4  items-center align-middle">
                      <div className="flex  items-center gap-3 align-middle icon-container  ">
                        <Image
                          className="rounded-lg"
                          src={logo}
                          width={40}
                          height={40}
                        />
                        <h4 className="text-lg ">Coinbidex</h4>
                      </div>

                      <div className=" text-end">
                        <h4 className=" text-red-300 ">-0.4%</h4>
                      </div>
                    </div>
                    <div className=" gap-4 px-5 py-3 text-left">
                      <h4 className="text-green-300">
                        0.07032 <span className="ml-3 text-xs">$0.0704</span>
                      </h4>
                      <h4 className="text-xs">24h Volume 2.098.234</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        

      <div className="bg-white-300 ">
      <div className="hidden sm:block max-w-screen-xl py-8 px-2 sm:px-8  mx-auto">
         <MarketTable/>
      </div>
      <div className="sm:hidden block max-w-screen-xl py-8 px-2 sm:px-8  mx-auto">
         <MobileMarketTable />
      </div>
      </div>
      </Layout>
    </>
  );
};

export default Market;
