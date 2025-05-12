
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./components/navbar'))
const Topnav = dynamic(() => import('./components/topnav'))
const Switcher = dynamic(() => import('./components/switcher'))
const Footer = dynamic(() => import('./components/footer'))

import TradingViewWidget from './components/TradingViewWidget';
import SimpleBarReact from "simplebar-react";

import { data } from './data/data'

import { BiRightArrowAlt } from "react-icons/bi"
import { PiBrowsers } from 'react-icons/pi';
import { LiaVolleyballBallSolid, LiaMusicSolid } from 'react-icons/lia'
import { TbCameraPlus } from 'react-icons/tb'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function Home() {
    const [toggle, setToggle] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState(null);

    const matchCategory = (category) => setSelectedCategory(category);

    const filteredData = selectedCategory
        ? data.slice(0, 8).filter((item) => item.category === selectedCategory)
        : data.slice(0, 8);

    const [productData, setProductData] = useState(filteredData);

    useEffect(() => {
        // Force dark mode
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');

        // Force full viewport coverage
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.documentElement.style.width = '100%';
        document.documentElement.style.height = '100%';
        document.documentElement.style.overflow = 'hidden scroll'; // Allow vertical scroll only
        document.documentElement.style.boxSizing = 'border-box';
        document.documentElement.style.backgroundColor = '#000000';

        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.overflow = 'visible';
        document.body.style.boxSizing = 'border-box';
        document.body.style.backgroundColor = '#000000';
        
        document.body.classList.add(
            "font-urbanist",
            "text-base",
            "text-black",
            "dark:text-white",
            "dark:bg-black"
        );
        
        const interval = setInterval(() => {
            remainingDays();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const remainingDays = () => {
        const formattedData = filteredData.map((item) => ({
            ...item,
            remaining: calculateDays(item.date),
        }));
        setProductData(formattedData);
    }

    const calculateDays = (date) => {
        let startDate = new Date(date);
        let currentDate = new Date();
        const diff = startDate.getTime() - currentDate.getTime();
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return { hours, minutes, seconds, days }
    }

    return (
        <>
            <div className={`page-wrapper dark:bg-black ${toggle ? "toggled" : ""}`}>
                <Navbar />
                <main className='page-content dark:bg-black min-h-screen'>
                    <Topnav toggle={toggle} setToggle={setToggle} />
                    
                    <div className="container-fluid relative px-3">
                        <div className="layout-specing">
                            <div className="md:flex justify-between items-center">
                                <div>
                                    <h5 className="font-semibold text-2xl mb-1">Welcome!</h5>
                                    <h5 className="font-medium text-base text-slate-400">Jenny Jimenez</h5>
                                </div>
                                <span className="text-slate-400">My balance: <span className="font-semibold text-emerald-600">$ 45,578.032</span></span>
                            </div>
                            <div className="grid lg:grid-cols-12 gap-6 mt-6">
                                <div className="xl:col-span-8 lg:col-span-12">
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-black p-2">
                                            <div id="tradingview_123"></div>
                                            <TradingViewWidget
                                                theme="Dark"
                                                symbol="BITSTAMP:ETHUSD"
                                                height={450}
                                                width={`100%`}
                                            />
                                        </div>

                                        <div>
                                            <div className="md:flex justify-between items-center">
                                                <div className="md:w-4/12 md:text-start text-center">
                                                    <h3 className="text-lg font-semibold">Explore Items</h3>
                                                </div>
                                                <div className="md:w-8/12 md:text-end text-center">
                                                    <div className="filters-group-wrap md:mt-0 mt-6">
                                                        <div className="filters-group">
                                                            <ul className="mb-0 list-none container-filter-box filter-options space-x-1">
                                                                <li onClick={() => matchCategory(null)} className={`${selectedCategory === null ? 'active' : ''} inline-flex items-center font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-200 dark:border-gray-700 rounded-full transition duration-500 `} data-group="all"><PiBrowsers className='me-1' />  All</li>
                                                                <li onClick={() => matchCategory("Games")} className={`${selectedCategory === 'Games' ? 'active' : ''} inline-flex items-center font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-200 dark:border-gray-700 rounded-full transition duration-500`} data-group="games"><LiaVolleyballBallSolid className='me-1' /> Games</li>
                                                                <li onClick={() => matchCategory("Music")} className={`${selectedCategory === 'Music' ? 'active' : ''} inline-flex items-center font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-200 dark:border-gray-700 rounded-full transition duration-500`} data-group="music"><LiaMusicSolid className='me-1' /> Music</li>
                                                                <li onClick={() => matchCategory("Video")} className={`${selectedCategory === 'Video' ? 'active' : ''} inline-flex items-center font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-200 dark:border-gray-700 rounded-full transition duration-500`} data-group="video"><TbCameraPlus className="me-1" /> Video</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                                                {
                                                    productData.slice(0, 8).map((item, index) => (
                                                        <div key={index} className="picture-item">
                                                            <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-black border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                                                                <div className="relative overflow-hidden">
                                                                    <div className="relative overflow-hidden rounded-lg">
                                                                        <Image src={item.image} width={0} height={0} sizes='100vw' placeholder='blur' blurDataURL={item.image} className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                                                                    </div>

                                                                    <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                                                        <Link href={`/item-detail/${item.id}`} className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</Link>
                                                                    </div>

                                                                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                                        <Link href="#" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></Link>
                                                                    </div>

                                                                    {item.date ? <div className="absolute bottom-2 start-0 end-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full items-center">
                                                                        <AiOutlineClockCircle className="align-middle inline" /><small id="auction-item-1" className="font-semibold"> {item.remaining?.days} : {item.remaining?.hours}: {item.remaining?.minutes}: {item.remaining?.seconds}</small>
                                                                    </div> : ''}
                                                                </div>

                                                                <div className="mt-3">
                                                                    <div className="flex items-center">
                                                                        <Image src={item.avatar} width={32} height={32} className="rounded-full size-8" alt="" />
                                                                        <Link href={`/creator-profile/${item.id}`} className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">{item.subtext}</Link>
                                                                    </div>

                                                                    <div className="my-3">
                                                                        <Link href={`/item-detail/${item.id}`} className="font-semibold hover:text-violet-600">{item.title}</Link>
                                                                    </div>

                                                                    <div className="flex justify-between p-2 bg-gray-50 dark:bg-black rounded-lg shadow dark:shadow-gray-700">
                                                                        <div>
                                                                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                                                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                                                        </div>

                                                                        <div>
                                                                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                                                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="xl:col-span-4 lg:col-span-12">
                                    <div className="grid xl:grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div className="relative table w-full py-16 px-6 overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 bg-bottom bg-no-repeat" style={{ backgroundImage: "url('/images/bg/bg1.jpg')" }}>
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                                            <div className="relative z-1">
                                                <h1 className="font-bold leading-snug text-white text-4xl">Discover rate <br /> collection or <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">Arts & NFTs</span></h1>

                                                <div className="mt-6">
                                                    <Link href="/explore" className="btn btn-sm bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full me-1">Explore Now</Link>
                                                    <Link href="/upload-work" className="btn btn-sm bg-transparent hover:bg-violet-600 border-violet-600 text-violet-600 hover:text-white rounded-full">Sell Now</Link>
                                                </div>
                                            </div>
                                        </div>

                                       <div className="relative overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-black">
                                            <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                                <h6 className="text-lg font-semibold">Top Creators</h6>

                                                <Link href="#" className="btn btn-link text-[16px] font-medium text-slate-400 hover:text-slate-900 dark:hover:text-slate-300 after:bg-slate-900 dark:after:bg-slate-300 duration-500 inline-flex items-center">View Creators <BiRightArrowAlt /></Link>
                                            </div>

                                            <SimpleBarReact className='relative overflow-x-auto block w-full max-h-[500px] p-4'>
                                                <ul className="list-none">
                                                    {data.map((item, index) => {
                                                        return (
                                                            <li className="flex justify-between items-center py-2" key={index}>
                                                                <span className="flex items-center">
                                                                    <Image src={item.avatar} width={56} height={56} placeholder='blur' blurDataURL={item.avatar} className="size-14 rounded-full border border-gray-100 dark:border-gray-800" alt="" />

                                                                    <span className="ms-3">
                                                                        <Link href={`/creator-profile/${item.id}`} className="font-semibold block hover:text-violet-600">{item.name}</Link>
                                                                        <span className="text-slate-400 text-[15px] block mt-0.5">{item.subtext}</span>
                                                                    </span>
                                                                </span>

                                                                <Link href="" className="btn btn-sm bg-gray-800/5 hover:bg-gray-800/10 dark:bg-black dark:hover:bg-gray-900 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full">{item.follow}</Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </SimpleBarReact>

                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 mt-6">
                                        <div className="relative overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-black">
                                            <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                                                <h6 className="text-lg font-semibold">Recently Added</h6>
                                            </div>
                                            <SimpleBarReact className="relative overflow-x-auto block w-full max-h-[412px] p-4">
                                                <ul className="list-none">
                                                    {data.map((item, index) => {
                                                        return (
                                                            <li className="flex justify-between items-center py-2" key={index}>
                                                                <span className="flex items-center">
                                                                    <Image src={item.image} width={80} height={80} placeholder='blur' blurDataURL={item.image} className="size-20 rounded-lg border border-gray-100 dark:border-gray-800" alt="" />

                                                                    <span className="ms-3">
                                                                        <Link href={`/creator-profile/${item.id}`} className="font-semibold block hover:text-violet-600">{item.title}</Link>
                                                                        <span className="text-slate-400 text-[15px] block mt-0.5">{item.name}</span>
                                                                    </span>
                                                                </span>

                                                                <span className="w-20 sm:w-[140px] space-x-1">
                                                                    <Link href={`/item-detail/${item.id}`}>
                                                                        <span className="btn btn-sm bg-gray-800/5 hover:bg-gray-800/10 dark:bg-black dark:hover:bg-gray-900 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full sm:inline-flex hidden"><i className="mdi mdi-lightning-bolt"></i> Bid Now</span>

                                                                        <span className="btn btn-icon btn-sm rounded-full bg-gray-800/5 hover:bg-gray-800/10 dark:bg-black dark:hover:bg-gray-900 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white sm:hidden inline-flex"><i className="mdi mdi-lightning-bolt"></i></span>
                                                                    </Link>
                                                                    <Link href="#" className="btn btn-icon btn-sm rounded-full bg-gray-800/5 hover:bg-gray-800/10 dark:bg-black dark:hover:bg-gray-900 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white"><i className="mdi mdi-plus"></i></Link>
                                                                </span>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </SimpleBarReact>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    <Footer />
                </main>
                <Switcher />
            </div>
        </>
    )
}