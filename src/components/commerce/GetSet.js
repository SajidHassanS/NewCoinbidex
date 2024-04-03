
"use client"


const CommerceBanner = () => {

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
  return (
    <>
      <div className="max-w-screen-xl   xl:px-4 mx-auto">
        <div className="flex w-100  py-3 sm:py-12">
          <div className="star flex justify-start gap-8 ">
            <div className=" flex items-center ">
              <img src="assets/commerce/star.svg" width={30} />
              <h1>Get set up in 20 seconds</h1>
            </div>

            <div className=" flex items-center">
              <img src="assets/commerce/star.svg" width={30} />
              <h1>Get set up in 20 seconds</h1>
            </div>

            <div className=" flex items-center">
              <img src="assets/commerce/star.svg" width={30} />
              <h1>Get set up in 20 seconds</h1>
            </div>
          </div>
        </div>

        <div className="py-10 flex justify-between">
          <div className="flex flex-col justify-start text-2xl sm:text-3xl lg:text-5xl font-bold">
            <h1>
              Wherever you sell, whatever you sell ... <br /> we’ve got you
              covered
            </h1>
          </div>
          <div className=" ">
            <button
              className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-800 text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full
                 capitalize hover:bg-blue-800 hover:text-white-500 transition-all hover:shadow-blue"
            >
              Try free
            </button>
          </div>
        </div>

        <div className='swap-page-main-div pb-24'>
                        <div className='swapmain-div'>
                            <div className='swap-heading'>
                                <p>Anything you sell</p>
                            </div>

                            <div className="slider-container">
                                <div
                                    className="slider-track"
                                    style={{
                                        // animation: `scrollss 20s linear infinite`,
                                        // scrollSnapType: " x mandatory",
                                        // transform: `translateX(-${currentIndex * (100 / items.length)}%)`,
                                        // transition: 'transform 0.02s linear', // Adjust the transition duration
                                    }}
                                >
                                    {items.map((item) => (
                                        <div key={item.id} className="slider-item">
                                            <img src={item.icon} alt="" />
                                            <p>

                                                {item.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='swapmain-div'>
                            <div className='swap-heading'>

                                <p>Anyway you sell</p>
                            </div>

                            <div className="slider-container">
                                <div
                                    className="slider-track"
                                    style={{
                                        // animation: `scrollss 20s linear infinite`,
                                        // scrollSnapType: " x mandatory",
                                        // transform: `translateX(-${currentIndex * (100 / items.length)}%)`,
                                        // transition: 'transform 0.02s linear', // Adjust the transition duration
                                    }}
                                >
                                    {items2.map((item, index) => (
                                        <div key={item.id} className="slider-item">
                                            <img src={item.icon} alt="" />
                                            <p>

                                                {item.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='swapmain-div'>
                            <div className='swap-heading'>

                                <p>Anywhere you sell</p>
                            </div>

                            <div className="slider-container">
                                <div
                                    className="slider-track"
                                    style={{
                                            // animation: `scrollss 20s linear infinite`,
                                            // scrollSnapType: " x mandatory",
                                        // transform: `translateX(-${currentIndex * (100 / items.length)}%)`,
                                        // transition: 'transform 0.02s linear', 
                                    }}
                                >
                                    {items3.map((item, index) => (
                                        <div key={item.id} className="slider-item">
                                            <img src={item.icon} alt="" />
                                            <p>

                                                {item.name}
                                            </p>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
      </div>
    </>
  );
};

export default CommerceBanner;
