"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {VscListFlat} from "react-icons/vsc"
import {FaRegPaperPlane} from "react-icons/fa"
import {FiHeart,FiUsers} from 'react-icons/fi'
import {BsTag} from "react-icons/bs"
import {LuSearch, LuCamera} from 'react-icons/lu'
import {PiWalletBold, PiFireSimpleBold, PiBrowsersLight,PiMusicNotesBold} from 'react-icons/pi'

import {activityData} from "../data/data";

const NavbarLight = dynamic(()=>import('../components/navbar-light'));
const Footer = dynamic(()=>import('../components/footer'));
const Switcher = dynamic(()=>import('../components/switcher'));

export default function Activity(){
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
    
    return(
        <>
         <NavbarLight/>
         <section className="relative table w-full py-36  bg-bottom bg-no-repeat" style={{backgroundImage:"url('/images/bg/bg1.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Activities</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/index">Giglink</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Activity</li>
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
                    <div className="md:flex">
                        <div className="lg:w-3/5 md:w-1/2 md:pe-4">
                        {activityData.map((item,index)=>{
                            return(
                                <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 overflow-hidden ease-in-out duration-500 w-full mx-auto lg:max-w-2xl mb-7" key={index}>
                                <div className="lg:flex">
                                    <div className="relative md:shrink-0">
                                    </div>
                                    <div className="p-6 w-full">
                                        <ul className="flex justify-between items-center list-none pb-6">
                                            <li className="block items-center">
                                                <span className="bg-slate-900 text-white dark:bg-slate-800 text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{item.title}</span>
                                                <span className="text-slate-400 text-sm ms-2">{item.time}</span>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-lg rounded-full text-gray-300 dark:text-gray-800 hover:text-red-600 focus:text-red-600 dark:hover:text-red-600 dark:focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                            </li>
                                        </ul>

                                        <Link href={`/item-detail/${item.id}`}  className="font-semibold">{item.description}</Link>

                                        <div className="pt-6">
                                            <Link href={`/item-detail/${item.id}`}  className="btn btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white">Buy now for {item.amount}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                           



                            <div className="mt-[30px] text-center">
                                <Link href="#" className="text-violet-600"><i className="mdi mdi-loading mdi-spin"></i> More Items</Link>
                            </div>
                        </div>

                        <div className="lg:w-2/5 md:w-1/2 md:ps-4">
                            <div className="sticky top-20">
                                <h5 className="text-lg font-semibold">Filter by</h5>

                                <div className="form-icon relative mt-4">
                                    <LuSearch className="text-lg absolute top-1/2 -translate-y-1/2 start-3"/>
                                    <input type="text" className="form-input w-full text-[15px] ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0" name="s" id="searchItem2" placeholder="Search..." />
                                </div>

                                <h5 className="text-lg font-semibold mt-6">Collection Type</h5>

                                <ul className="list-none mt-4">
                                    <li className="inline-flex m-2"><Link href="#" className="px-3 py-1.5 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-violet-600 dark:hover:bg-violet-600 font-semibold rounded-lg shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out flex items-center"><PiWalletBold className="me-1 text-base"/> <span>Purchased</span></Link></li>
                                    <li className="inline-flex m-2"><Link href="#" className="px-3 py-1.5 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-violet-600 dark:hover:bg-violet-600 font-semibold rounded-lg shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out flex items-center"><BsTag className="me-1 text-base"/> <span>Sales</span></Link></li>
                                    <li className="inline-flex m-2"><Link href="#" className="px-3 py-1.5 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-violet-600 dark:hover:bg-violet-600 font-semibold rounded-lg shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out flex items-center"><PiFireSimpleBold className='me-1 text-base'/><span>Burns</span></Link></li>
                                    <li className="inline-flex m-2"><Link href="#" className="px-3 py-1.5 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-violet-600 dark:hover:bg-violet-600 font-semibold rounded-lg shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out flex items-center"><FiHeart className="me-1 text-base"/><span>Likes</span></Link></li>
                                    <li className="inline-flex m-2"><Link href="#" className="px-3 py-1.5 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-violet-600 dark:hover:bg-violet-600 font-semibold rounded-lg shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out flex items-center"><PiBrowsersLight className='me-1 text-base'/><span>Bids</span></Link></li>
                                    <li className="inline-flex m-2"><Link href="#" className="px-3 py-1.5 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-violet-600 dark:hover:bg-violet-600 font-semibold rounded-lg shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out flex items-center"><FiUsers className="me-1 text-base"/><span>Following</span></Link></li>
                                    <li className="inline-flex m-2"><Link href="#" className="px-3 py-1.5 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-violet-600 dark:hover:bg-violet-600 font-semibold rounded-lg shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out flex items-center"><VscListFlat className="me-1 text-base"/><span>Listing</span></Link></li>
                                    <li className="inline-flex m-2"><Link href="#" className="px-3 py-1.5 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-violet-600 dark:hover:bg-violet-600 font-semibold rounded-lg shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out flex items-center"><PiMusicNotesBold className='me-1 text-base'/> <span>Music</span></Link></li>
                                    <li className="inline-flex m-2"><Link href="#" className="px-3 py-1.5 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-violet-600 dark:hover:bg-violet-600 font-semibold rounded-lg shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out flex items-center"><LuCamera className="me-1 text-base"/><span>Video</span></Link></li>
                                    <li className="inline-flex m-2"><Link href="#" className="px-3 py-1.5 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-violet-600 dark:hover:bg-violet-600 font-semibold rounded-lg shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out flex items-center"><FaRegPaperPlane className="me-1"/> <span>Illustration</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            <Switcher/>
        </>
    )
}