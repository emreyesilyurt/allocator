"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, { useEffect ,useState} from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarLight = dynamic(()=>import('../components/navbar-light'));
const Footer = dynamic(()=>import('../components/footer'));
const Switcher = dynamic(()=>import('../components/switcher'));

import {ExploreItems} from "../data/data";

import { TbCameraPlus } from "react-icons/tb"
import {PiBrowsersLight, PiRocketLaunchBold} from 'react-icons/pi'
import {MdOutlineSportsVolleyball} from 'react-icons/md'
import {AiOutlinePieChart} from "react-icons/ai"
import {LuMusic4} from 'react-icons/lu'



export default function ExploreThree(){
    const [selectedCategory, setSelectedCategory] = useState(null);
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
      const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? ExploreItems.filter((item) => item.category === selectedCategory)
        : ExploreItems;
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

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/index">Giglink</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Explore</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid grid-cols-1 items-center gap-[30px]">
                        <div className="filters-group-wrap text-center">
                            <div className="filters-group">
                                <ul className="mb-0 list-none container-filter-box filter-options">
                                    <li onClick={() => matchCategory(null)} className={`${selectedCategory === null ? 'active' : ''} inline-flex items-center font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-full transition duration-500 `} data-group="all"><PiBrowsersLight className='me-1'/><span>All</span></li>
                                    <li onClick={() => matchCategory('Games')} className={`${selectedCategory === 'Games' ? 'active' : ''} inline-flex items-center font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-full transition duration-500`}><MdOutlineSportsVolleyball className="me-1"/>  <span>Games</span></li>
                                    <li onClick={() => matchCategory('Art')} className={`${selectedCategory === 'Art' ? 'active' : ''} inline-flex items-center font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-full transition duration-500`} data-group="art"><AiOutlinePieChart className="me-1"/> <span>Art</span></li>
                                    <li onClick={() => matchCategory('Music')} className={`${selectedCategory === 'Music' ? 'active' : ''} inline-flex items-center font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-full transition duration-500`} data-group="music"><LuMusic4 className='me-1'/> <span>Music</span></li>
                                    <li onClick={() => matchCategory('Video')} className={`${selectedCategory === 'Video' ? 'active' : ''} inline-flex items-center font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-full transition duration-500`} data-group="video"><TbCameraPlus className="me-1"/> <span>Video</span></li>
                                    <li onClick={() => matchCategory('Memes')} className={`${selectedCategory === 'Memes' ? 'active' : ''} inline-flex items-center font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-full transition duration-500`} data-group="memes"><PiRocketLaunchBold className='me-1'/><span>Memes</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                        {
                            filteredData.map((item, index) => (
                                <div key={index} className="picture-item shuffle-item shuffle-item--visible" data-groups='["games"]'>
                                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                                        <div className="relative overflow-hidden">
                                            <div className="relative overflow-hidden rounded-lg">
                                                <Image src={item.image} placeholder='blur' blurDataURL={item.image} className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt=""  width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />
                                            </div>

                                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                                <Link href={`/item-detail/${item.id}`} className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</Link>
                                            </div>

                                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <Link href="/" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></Link>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div className="flex items-center">
                                                <Image src={item.avatar} placeholder='blur' blurDataURL={item.avatar} className="rounded-full size-8" alt="" width={64} height={64}  />
                                                <Link href={`/creator-profile/${item.id}`} className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">{item.subtext}</Link>
                                            </div>

                                            <div className="my-3">
                                                <Link href={`/item-detail/${item.id}`}className="font-semibold hover:text-violet-600">{item.title}</Link>
                                            </div>

                                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
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
            </section>
            <Footer/>
            <Switcher/>
        </>
    )
}