"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";
import Select from 'react-select';

const NavbarLight = dynamic(()=>import('../components/navbar-light'));
const Footer = dynamic(()=>import('../components/footer-light'));
const Switcher = dynamic(()=>import('../components/switcher'));
const DiscoverItems = dynamic(()=>import('../components/discover-items'));

import {AiOutlineAppstore, AiOutlineStar} from "react-icons/ai"
import {LuClock, LuSearch} from 'react-icons/lu'

export default function ExploreOne(){
    useEffect(() => {
        document.documentElement.classList.add("dark");
        document.body.classList.add(
          "font-urbanist",
          "text-base",
          "text-black",
          "dark:text-white",
          "dark:bg-slate-900"
        );
      }, []);
      const options = [
        { value: 'Art', label: 'Art' },
        { value: 'Domain', label: 'Domain Names' },
        { value: 'Music', label: 'Music' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Trading', label: 'Trading Cards' },
        { value: 'Virtual', label: 'Virtual World' },
    ];
    
    const buyOptions = [
        { value: 'now', label: 'Buy Now' },
        { value: 'auctions', label: 'Auctions' },
        { value: 'offers', label: 'Offers' }
    ]
    const rateOptions = [
        { value: 'top', label: 'Top Rated' },
        { value: 'low', label: 'Lower Rated' }
    ]
    return(
        <>
        <NavbarLight/>
        <section className="relative table w-full py-36  bg-bottom bg-no-repeat" style={{backgroundImage:"url('/images/bg/bg1.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Explore Items</h3>

                    </div>
                </div>

            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:pb-24 pb-16 -mt-16">
                <div className="container z-1">
                    <div className="grid grid-cols-1">
                        <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700">
                            <div className="registration-form text-dark text-start">
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                    <div>
                                        <label className="form-label font-medium dark:text-white">Search:</label>
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <LuSearch className="icons"/>
                                            <input name="name" type="text" id="job-keyword" className="form-input w-full filter-input-box text-slate-900 dark:text-white bg-gray-50 dark:bg-slate-800 border-0 focus:ring-transparent" placeholder="Search your keaywords" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="choices-catagory" className="form-label font-medium dark:text-white">Categories:</label>
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <AiOutlineAppstore className="icons"/>
                                            <Select id="long-value-select" instanceid="long-value-select" className="form-input z-2 filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={options} />

                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="choices-min-price" className="form-label font-medium dark:text-white">Items:</label>
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <LuClock className="icons text-base"/>
                                            <Select id="long-value-select" instanceid="long-value-select" className="form-input z-2 filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={buyOptions} />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="choices-max-price" className="form-label font-medium dark:text-white">Sort By:</label>
                                        <div className="filter-search-form relative mt-2">
                                            <AiOutlineStar className="icons"/>
                                            <Select id="long-value-select" instanceid="long-value-select" className="form-input z-2 filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={rateOptions} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <DiscoverItems all={true} pagination={true}/>
            </section>
            <Footer/>
            <Switcher/>
        </>
    )
}