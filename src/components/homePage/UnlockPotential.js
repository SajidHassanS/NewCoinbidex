"use client"
import React, { Fragment } from 'react';

const UnlockPotential = () => {
    return (
        <Fragment>
            <section className="">
                <div className="">
                    <div className="content">
                        <div className='text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium py-8 text-left'>
                        <h1 className="">Unlock the full potential</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="card  transform transition-transform duration-300 hover:scale-110 border border-blue-200  py-5 px-3 flex flex-col justify-start items-start shadow-lg shadow-blue-800/50 rounded-large">
                                <div className="icon-container p-4 border rounded-full my-2 bg-blue-100 border-blue-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                        <path fill="currentColor" fillRule="evenodd" d="M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3M5 5h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1 0-2m15 10h-1a1 1 0 0 1 0-2h1zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.83A3 3 0 0 0 5 9h14a1 1 0 0 1 1 1z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg font-semibold">Wallet</h2>
                                <p className="mt-2 text-sm text-left">Keep your funds in a secure custodial wallet</p>
                            </div>
                            <div className="card  transform transition-transform duration-300 hover:scale-110 border border-blue-200  py-5 px-3 flex flex-col justify-start items-start  shadow-lg shadow-blue-800/50 rounded-large">
                                <div className="icon-container p-4  border rounded-full my-2 bg-blue-100 border-blue-100  ">
                                    <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10v8a2 2 0 0 1-2 2H5"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 11 3-3 3 3M5 14V6a2 2 0 0 1 2-2h12"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 13-3 3-3-3"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg font-semibold">Trade</h2>
                                <p className="mt-2 text-sm text-left">Trade and exchange with cryptocurrencies</p>
                            </div>
                            <div className="card  transform transition-transform duration-300 hover:scale-110 border border-blue-200  py-5 px-3 flex flex-col justify-start items-start  shadow-lg shadow-blue-800/50 rounded-large">
                                <div className="icon-container p-4  border rounded-full my-2 bg-blue-100 border-blue-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg font-semibold">Payments</h2>
                                <p className="mt-2 text-sm text-left">Accept cryptocurrency payments worldwide</p>
                            </div>
                            <div className="card  transform transition-transform duration-300 hover:scale-110 border border-blue-200  py-5 px-3 flex flex-col justify-start items-start  shadow-lg shadow-blue-800/50 rounded-large">
                                <div className="icon-container p-4  border rounded-full my-2 bg-blue-100 border-blue-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg font-semibold">Explorer</h2>
                                <p className="mt-2 text-sm text-left">
                                View transaction status and review addresses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default UnlockPotential;
