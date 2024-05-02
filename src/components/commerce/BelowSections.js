"use client"
import React from "react";
import ButtonOutline from "../misc/ButtonOutline";
import Image from "next/image";
import swift from "../../../public/assets/commerce/swift.png";
import multi from "../../../public/assets/commerce/multi.png";
import ironclad from "../../../public/assets/commerce/ironclad.png";
import { FaCircle } from "react-icons/fa6";

// 2nd seciton of banner
import diamond from "../../../public/assets/commerce/diamond.svg";
import btc from "../../../public/assets/commerce/btc.svg";
import y from "../../../public/assets/commerce/y.svg";
import square from "../../../public/assets/commerce/square.svg";
import dollor from "../../../public/assets/commerce/dollor.svg";
import coinbidex from "../../../public/assets/commerce/coinbidex.png";
import graph from "../../../public/assets/commerce/graph.png";
import avatar from "../../../public/assets/commerce/avatar.jpg";
const BelowSection = () => {

    const items = [

        {
            id: 1,
            name: 'WordPress',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 2,
            name: 'Wix',
            icon: "assets/swapicon/icon-book.48f825ef.svg"
        },
        {
            id: 3,
            name: 'Webflow',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        },
        {
            id: 4,
            name: 'Squarespace',
            icon: "assets/swapicon/icon-chatgpt.2bc83055.svg"
        },
        {
            id: 5,
            name: 'Notion',
            icon: "assets/swapicon/icon-coaching.72458114.svg"
        },
        {
            id: 6,
            name: 'Shopify',
            icon: "assets/swapicon/icon-comic.8110f8b3.svg"
        },
        {
            id: 7,
            name: 'software',
            icon: "assets/swapicon/icon-drawing.34aec43e.svg"
        },
        {
            id: 8,
            name: 'Instagram',
            icon: "assets/swapicon/icon-image.138baf9a.svg"
        },
        {
            id: 9,
            name: ' Stripe checkout',
            icon: "assets/swapicon/icon-instagram.3d396293.svg"
        },
        {
            id: 10,
            name: 'Linktree',
            icon: "assets/swapicon/icon-kickstarter.b497f9b1.svg"
        },
        {
            id: 11,
            name: 'Facebook',
            icon: "assets/swapicon/icon-link.9ebb9410.svg"
        },
        {
            id: 12,
            name: 'Pinterest',
            icon: "assets/swapicon/icon-livestream.a612cf1e.svg"
        },
        {
            id: 13,
            name: 'YouTube',
            icon: "assets/swapicon/icon-membership.b8b0dd2e.svg"
        },
        {
            id: 14,
            name: 'software',
            icon: "assets/swapicon/icon-music-cd.a8fbc0ba.svg"
        },
        {
            id: 15,
            name: 'TikTok',
            icon: "assets/swapicon/icon-music-filter.c0b8d14b.svg"
        },
        {
            id: 16,
            name: ' X (Twitter)',
            icon: "assets/swapicon/icon-pinterest.4fd53c1d.svg"
        },
        {
            id: 17,
            name: 'Payment links',
            icon: "assets/swapicon/icon-rss.8e8dbfef.svg"
        },
        {
            id: 18,
            name: 'Your blog',
            icon: "assets/swapicon/icon-shopify.2ea46655.svg"
        },
        {
            id: 19,
            name: 'Your website',
            icon: "assets/swapicon/icon-software.bdd1bf02.svg"
        },
        {
            id: 20,
            name: 'WhatsApp',
            icon: "assets/swapicon/icon-wix.9c6c427d.svg"
        },
        {
            id: 21,
            name: 'Anywhere you sell',
            icon: "assets/swapicon/icon-wordpress.6a74afbd.svg"
        },
        {
            id: 22,
            name: 'Notion templates',
            icon: "assets/swapicon/icon-x.18a05337.svg"
        },
        {
            id: 23,
            name: 'Photography',
            icon: "assets/swapicon/icon-software.bdd1bf02.svg"
        },
        {
            id: 24,
            name: 'Bundles',
            icon: "assets/swapicon/icon-software.bdd1bf02.svg"
        },
        {
            id: 25,
            name: 'Audio streaming',
            icon: "assets/swapicon/icon-software.bdd1bf02.svg"
        },
        {
            id: 26,
            name: 'Subscriptions',
            icon: "assets/swapicon/icon-software.bdd1bf02.svg"
        },
        {
            id: 27,
            name: 'ChatGPT plugins',
            icon: "assets/swapicon/icon-software.bdd1bf02.svg"
        }, {
            id: 28,
            name: 'Videos',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        }, {
            id: 29,
            name: 'Education',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        }, {
            id: 30,
            name: 'Fiction books',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        }, {
            id: 31,
            name: 'Meal plans',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        },
        {
            id: 32,
            name: 'Online courses',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        }, {
            id: 33,
            name: '3D printing',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        }, {
            id: 34,
            name: 'Workout plans',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        }, {
            id: 35,
            name: 'Event tickets',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        }, {
            id: 36,
            name: 'Design',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        }, {
            id: 37,
            name: 'Recipes',
            icon:  "assets/swapicon/icon-software.bdd1bf02.svg"
        },
    ]

    const items2 = [
        {
            id: 20,
            name: 'WhatsApp',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 21,
            name: 'Anywhere you sell',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 22,
            name: 'Notion templates',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 23,
            name: 'Photography',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 24,
            name: 'Bundles',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 25,
            name: 'Audio streaming',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 26,
            name: 'Subscriptions',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 27,
            name: 'ChatGPT plugins',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 28,
            name: 'Videos',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 29,
            name: 'Education',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 30,
            name: 'Fiction books',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 31,
            name: 'Meal plans',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 32,
            name: 'Online courses',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 33,
            name: '3D printing',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 34,
            name: 'Workout plans',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 35,
            name: 'Event tickets',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 36,
            name: 'Design',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 37,
            name: 'Recipes',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },

        {
            id: 1,
            name: 'WordPress',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 2,
            name: 'Wix',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 3,
            name: 'Webflow',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 4,
            name: 'Squarespace',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 5,
            name: 'Notion',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 6,
            name: 'Shopify',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 7,
            name: 'software',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 8,
            name: 'Instagram',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 9,
            name: ' Stripe checkout',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 10,
            name: 'Linktree',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 11,
            name: 'Facebook',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 12,
            name: 'Pinterest',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 13,
            name: 'YouTube',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 14,
            name: 'software',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 15,
            name: 'TikTok',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 16,
            name: ' X (Twitter)',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 17,
            name: 'Payment links',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 18,
            name: 'Your blog',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 19,
            name: 'Your website',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },

    ]
    const items3 = [
        {
            id: 10,
            name: 'Linktree',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 11,
            name: 'Facebook',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 12,
            name: 'Pinterest',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 13,
            name: 'YouTube',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 14,
            name: 'software',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 15,
            name: 'TikTok',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 16,
            name: ' X (Twitter)',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 17,
            name: 'Payment links',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 18,
            name: 'Your blog',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 19,
            name: 'Your website',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 20,
            name: 'WhatsApp',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 21,
            name: 'Anywhere you sell',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },

        {
            id: 22,
            name: 'Notion templates',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 23,
            name: 'Photography',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 24,
            name: 'Bundles',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 25,
            name: 'Audio streaming',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 26,
            name: 'Subscriptions',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 27,
            name: 'ChatGPT plugins',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 28,
            name: 'Videos',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 29,
            name: 'Education',
            icon:"assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 30,
            name: 'Fiction books',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 31,
            name: 'Meal plans',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 32,
            name: 'Online courses',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 33,
            name: '3D printing',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 34,
            name: 'Workout plans',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 35,
            name: 'Event tickets',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 36,
            name: 'Design',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        }, {
            id: 37,
            name: 'Recipes',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 1,
            name: 'WordPress',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 2,
            name: 'Wix',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 3,
            name: 'Webflow',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 4,
            name: 'Squarespace',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 5,
            name: 'Notion',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 6,
            name: 'Shopify',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 7,
            name: 'software',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 8,
            name: 'Instagram',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },
        {
            id: 9,
            name: ' Stripe checkout',
            icon: "assets/swapicon/icon-audiobook.0f928982.svg"
        },

    ]

    const icons = [
        {
            id: 1,
            name: 'software',
            icon: "assets/swapicon/newcoin/DOGE.svg"
        },
        {
            id: 2,
            name: 'software',
            icon: "assets/swapicon/newcoin/axie.png"
        },
        {
            id: 3,
            name: 'software',
            icon: "assets/swapicon/newcoin/binance.svg"
        },

        {
            id: 4,
            name: 'software',
            icon: "assets/swapicon/newcoin/bitcoin_1.svg"
        },
        {
            id: 5,
            name: 'software',
            icon: "assets/swapicon/newcoin/busd.svg"
        },

        {
            id: 6,
            name: 'Instagram',
            icon: "assets/swapicon/newcoin/cgpt.svg"
        },
        {
            id: 7,
            name: 'software',
            icon: "assets/swapicon/newcoin/crpto1.png"
        },
        {
            id: 8,
            name: 'software',
            icon: "assets/swapicon/newcoin/dai.svg"
        },
        {
            id: 9,
            name: 'software',
            icon: "assets/swapicon/newcoin/dash.svg"
        },
        {
            id: 10,
            name: 'software',
            icon: "assets/swapicon/newcoin/dogecoin.png"
        },
        {
            id: 11,
            name: 'software',
            icon: "assets/swapicon/newcoin/eos.png"
        },
        {
            id: 12,
            name: 'software',
            icon: "assets/swapicon/newcoin/etherium.svg"
        },
        {
            id: 13,
            name: 'software',
            icon: "assets/swapicon/newcoin/litecoin.svg"
        },
        {
            id: 14,
            name: 'software',
            icon: "assets/swapicon/newcoin/pancakeswap.png"
        },
        {
            id: 15,
            name: 'software',
            icon: "assets/swapicon/newcoin/polygon.svg"
        },
        {
            id: 16,
            name: 'software',
            icon: "assets/swapicon/newcoin/ripple.png"
        },
        {
            id: 17,
            name: 'software',
            icon: "assets/swapicon/newcoin/safemoon.png"
        },
        {
            id: 18,
            name: 'software',
            icon: "assets/swapicon/newcoin/solano.svg"
        },
        {
            id: 19,
            name: 'software',
            icon: "assets/swapicon/newcoin/tether.svg"
        },
        {
            id: 20,
            name: 'software',
            icon: "assets/swapicon/newcoin/ton.svg"
        },
        {
            id: 21,
            name: 'software',
            icon: "assets/swapicon/newcoin/"
        },
        {
            id: 22,
            name: 'software',
            icon: "assets/swapicon/newcoin/ton.svg"
        },

        {
            id: 23,
            name: 'Instagram',
            icon: "assets/swapicon/newcoin/xmr.svg"
        },

        {
            id: 24,
            name: 'software',
            icon:"assets/swapicon/newcoin/tether-usdt-seeklogo.svg"
        },
       
    ]
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="">
         
    
         <section className="banner swap-section">
                <div className="container">
                    <div className='animation-heading-main text-2xl sm:text-3xl lg:text-5xl sm:font-semibold'>

                        <span>Concentrate on what you do best.</span>
                        <h1>We’ll do the rest</h1>


                    </div>
                    <div className='dotherest-main-div'>

                        {/* active-animatioons */}
                        <div className='dotherest-main    '>
                            <div className='dotherest-heading'>
                                <p className='pag-1'>You</p>
                                {/* <img src={ada} alt=''></img> */}
                                <p className='pag-2'>You</p>
                            </div>
                            <div className='dotherest-body'>
                                <div className='icon-paraghp'>
                                    <div className="centered-circle-icon1">

                                        <img src="assets/images/icon/icon-wand (1).svg" alt="" />

                                    </div>
                                    <p >Create and upload products</p>
                                </div>
                                {/* <div>
                                    <img src={bnb} alt="" />
                                </div> */}
                                <div className='dotherest-ineer-body'>


                                    <div className='icon-paraghp' >
                                        <div className="centered-circle-icon">

                                            <img src="assets/images/icon/icon-cards.svg" alt="" />
                                        </div>
                                        <p>Integrate with payment gateways</p>

                                    </div>
                                    <div className='icon-paraghp'>
                                        <div className="centered-circle-icon">

                                            <img src="assets/images/icon/icon-chart (1).svg" alt="" />
                                        </div>
                                        <p>Create conversion-optimized checkout</p>
                                    </div>
                                    <div className='icon-paraghp' >
                                        <div className="centered-circle-icon">

                                            <img src="assets/images/icon/icon-3d-cube (1).svg" alt="" />
                                        </div>
                                        <p>Ensure secure, automated digital delivery at scale</p>
                                    </div>
                                </div>
                                <div className='icon-paraghp'>
                                    <div className="centered-circle-icon2 ">

                                        <img src="assets/images/icon/icon-pay (1).svg" alt="" />
                                    </div>
                                    <p >Get paid</p>
                                </div>
                            </div>

                        </div>
                        <div className='dotherest-main-borders active-animatioon'></div>
                        <div className=' border-large-animation active-animatioons'></div>
                    </div>
                </div>
            </section>
          
        </div>
      </div>
    </>
  );
};

export default BelowSection;
