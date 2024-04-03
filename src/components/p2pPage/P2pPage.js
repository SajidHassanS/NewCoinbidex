import React, { useState, useEffect } from "react";
import PaymentMethod from "./PaymentMethod";
import RefreshSetting from "./RefreshSetting";
import CurrencyDropdown from "./CurrencyDropdown";
import Filter from "./Filter";
import Table from "./Table";
import Usdt from "./Usdt";
import NumberTable from "./NumberTable";
import BuySell from "./BuySell";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Banner from "./Banner";
import { RiFilterLine } from "react-icons/ri";

// mobile

import MobPaymentMethod from "../p2pPageMobile/MobPaymentMethod";
import MobRefreshSetting from "../p2pPageMobile/MobRefreshSetting";
import MobCurrencyDropdown from "../p2pPageMobile/MobCurrencyDropdown";
import MobFilter from "../p2pPageMobile/MobFilter";
import MobTable from "../p2pPageMobile/MobTable";
import MobUsdt from "../p2pPageMobile/MobUsdt";
import MobNumberTable from "../p2pPageMobile/MobNumberTable";
import MobBuySell from "../p2pPageMobile/MobBuySell";

const P2pPage = () => {
  const [showMore, setShowMore] = useState(false);
 
  const handleViewMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="  mt-24 lg:mt-36 px-4  sm:px-0 flex flex-col  ">
      <div className="aboveTable bg-black-600  flex flex-col my-5 items-center gap-3 py-5 px-3 sm:p-5 ">
       <Banner/>
      </div>
      <div className="hidden  below max-w-screen-xl mx-auto lg:flex flex-col bg-blue-100 rounded-lg p-5 mb-5">
        <div className="belowTable  flex justify-between items-center ">
          <BuySell />

            
            <>
              <Usdt />
              <CurrencyDropdown />
              <PaymentMethod />
              <RefreshSetting />
              <Filter />
            </>
        

      
        </div>
        <Table />
      </div>

      <div className="flex  below   lg:hidden flex-col bg-blue-100 rounded-lg p-5 mb-5">
        <div className="belowTable  flex justify-between items-center ">
          <MobBuySell />
          <div className="rounded-large border px-3 py-2">
          <RiFilterLine size={25} />
          </div>
         

            
            <div className="hidden">
              <MobUsdt />
              <MobCurrencyDropdown />
              <MobPaymentMethod />
              <MobRefreshSetting />
              <MobFilter />
            </div>
        

      
        </div>
        <div>
        <MobTable />
        </div>
       
      </div>
    </section>
  );
};

export default P2pPage;
