"use client"
import React, { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(-1);

  const toggleAccordion = (index) => {
    if (index === isOpen) {
      // Clicking on the same accordion, so close it
      setIsOpen(-1);
    } else {
      // Clicking on a different accordion, so open it and close the previously open one
      setIsOpen(index);
    }
  };

  // Data for accordions
  const accordionData = [
    {
      title: "What is Proof-of-Stake (PoS)?",
      content:
        "While proof-of-work (PoW) is a consensus mechanism where miners rely on hardware and software to validate transactions on the blockchain, PoS consensuses use staked tokens. In PoS, validators have a higher chance to obtain the right to validate new transactions based on their staked amount or staking duration.",
    },
 
    {
        title: "Why choose Coinbidex Staking?",
        content: `
          1. Interest is credited every day. If you stake on D (date), interest starts to accrue on D+1 and is paid on D+2. Coinbidex will pay interest to your spot account each day for as long as you keep staking.<br>
          2. You can stake at any time and redeem before the end of a staking period. Staking offers a flexible, free, and smooth experience.<br>
          3. You get as much as you earn on the chain. Coinbidex does not take a cut of your earnings, and the ROI exactly matches that of the nodes.<br>
          4. Earn principal-protected and low-risk income. Your assets will only grow during staking. No setup required, and no penalty (such as slashing) or other on-chain node staking risks. Coinbidex makes you an effortless earner!<br>
        `,
      },
    {
        title: "How is APR calculated?",
        content:
         "The ROI displayed is the exact same as offered by the respective nodes and is not modified by Coinbidex in any way."  },
      {
        title: "How are my rewards calculated if I've subscribed to multiple PoS products?",
        content:
        "Coinbidex aggregates your rewards from each network according to their respective APR, shown as your total earnings."  },
      {
        title: "When can I redeem my staking rewards?",
        content:
    "Interest accrues the day after you start staking. You get daily earnings, starting from the day following interest accrual. After the subscription period, the earnings are deposited into your spot account."   },
      {
        title: "What's the difference between Express Redeem and Redeem?",
        content:
     `Redemption (Standard): If you stake on D (date), you can request a standard redemption on D+1. The redemption period aligns with the on-chain nodes. The staked tokens and interest (after deducting the service fee) will be distributed to your spot account after the redemption period. No interest will be generated during the redemption period.<br>
     Redemption (Express): If you stake on D (date), depending on the project, you can request an express redemption on D+3. The staked assets and the interest will be distributed to your spot account within 10 minutes, and the platform will deduct 10% of the proceeds as a service fee. The daily quota is limited — the portion that exceeds the quota can only be redeemed the next day.`,  },
   
  ];

  return (
    <>
      <div className="max-w-screen-xl py-24 px-4 xl:px-4 mx-auto">
        <div className="flex  pb-6 flex-col justify-center items-start">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl text-black-600 leading-normal">
            <strong className="text-black-600">Staking dictionary</strong>
          </h1>
        </div>
        <div className="max-w-screen-xl mx-auto">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="shadow-lg bg-white-300 rounded-lg mb-6"
            >
              <div
                className="flex justify-between items-center py-8 px-4 cursor-pointer "
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg">{item.title}</h3>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    index === isOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      index === isOpen
                        ? "M19 9l-7 7-7-7"
                        : "M5 15l7-7 7 7"
                    }
                  />
                </svg>
              </div>
              {index === isOpen && (
  <div className="p-4">
    <p dangerouslySetInnerHTML={{ __html: item.content }} />
  </div>
)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
