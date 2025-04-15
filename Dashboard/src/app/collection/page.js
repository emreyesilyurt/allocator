'use client'
import React,{ useState}  from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../components/navbar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Switcher = dynamic(() => import('../components/switcher'))
const Footer = dynamic(() => import('../components/footer'))

import { data } from "../data/data";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function Collection(){
    const[toggle, setToggle] = useState(true)
    return(
        <>
        <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
            <Navbar/>
            <main className='page-content bg-gray-50 dark:bg-slate-800'>

                <Topnav toggle={toggle} setToggle={setToggle}/>

                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                        <div className="md:flex justify-between items-center">
                            <h5 className="text-lg font-semibold">Collections</h5>

                            <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/">Giglink</Link></li>
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Collection</li>
                            </ul>
                        </div>

                        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                            {data.slice(0,10).map((item, index)=>{
                                return(
                                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg p-3 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 hover:scale-105 ease-in-out duration-500" key={index}>
                                    <Image src={item.image} width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL={item.image}  className="rounded-lg w-full h-auto" alt=""/>

                                    <div className="relative p-4 -mt-14">
                                        <div className="relative inline-block">
                                            <Image src={item.avatar} width={64} height={64} placeholder="blur" blurDataURL={item.avatar} className="h-16 rounded-md shadow-md dark:shadow-gray-800" alt=""/>
                                            <i className="mdi mdi-check-decagram text-emerald-600 text-2xl absolute -bottom-3 -end-2"></i>
                                        </div>

                                        <div className="mt-3">
                                            <Link href="/explore" className="font-semibold block text-[18px] hover:text-violet-600">{item.collection}</Link>
                                            <span className="text-slate-400 mt-1 text-sm"><span className="italic">by</span> <Link href={`/creator-profile/${item.id}`} className="text-violet-600 font-medium">{item.subtext}</Link></span>
                                            <span className="text-slate-400 block text-[16px] mt-1">25 Items</span>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                            
                        </div>

                        <div className="grid grid-cols-1 mt-6 text-center">
                            <nav>
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link href="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                        <MdOutlineKeyboardArrowLeft className="text-[20px]"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">1</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">2</Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-current="page" className="z-10 size-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-violet-600 shadow-sm dark:shadow-gray-700">3</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">4</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                            <MdOutlineKeyboardArrowRight className="text-[20px]"/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <Footer/>
            </main>
           <Switcher/> 
        </div>
            
        </>
    )
}