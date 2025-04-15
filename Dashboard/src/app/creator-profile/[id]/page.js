'use client'
import React,{ useState, useEffect}  from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../../components/navbar'))
const Topnav = dynamic(() => import('../../components/topnav'))
const Switcher = dynamic(() => import('../../components/switcher'))
const Footer = dynamic(() => import('../../components/footer'))

import { data } from "../../data/data";
import { UserCheck, UserPlus ,DollarSign, Film } from 'react-feather'
import {AiOutlineClockCircle} from 'react-icons/ai'

export default function CreatorProfile(props){
    
    const creater = data.find((creatorr) => creatorr.id === parseInt (props.params.id));
    const[toggle, setToggle] = useState(true)

    const activities = [
        {
         image:'/images/items/1.gif',
         tag:"Listing",
         title:"QUEEN'S COURT - Silver Card #72/250 was put up for sale for",
         time:"3min 50sec ago"
        },
        {
         image:'/images/items/1.jpg',
         tag:"Sale",
         title:"ethkun #5001 was sold for $9.27.",
         time:"7min 5sec ago"
        },
        {
         image:'/images/items/2.jpg',
         tag:"Offer",
         title:"A global offer of $100.00 was placed for FACES",
         time:"13min 25sec ago"
        },
        {
         image:'/images/items/3.jpg',
         tag:"Deposit",
         title:"Anatomy Science Ape Club #1113 was sold for $32.87.",
         time:"15min 50sec ago"
        }
     ]
     const [ productData ,setProductData] = useState(data);  

     useEffect(() => {
         const interval = setInterval(() => {
             remainingDays();
         }, 1000);
         
         return () => clearInterval(interval);
     });
     
     const remainingDays = () => {
         const formattedData = data.map((item) => ({
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

    return(
        <>
        <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
            <Navbar/>
            <main className='page-content bg-gray-50 dark:bg-slate-800'>

                <Topnav toggle={toggle} setToggle={setToggle}/>
                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                        <div className="md:flex justify-between items-center">
                            <h5 className="text-lg font-semibold">Jenny Jimenez</h5>

                            <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/">Giglink</Link></li>
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Profile</li>
                            </ul>
                        </div>

                        <div className="container-fluid mt-6">
                            <div className="group profile-banner relative overflow-hidden text-transparent rounded-xl shadow dark:shadow-gray-700">
                                <input id="pro-banner" name="profile-banner" type="file" className="hidden"  />
                                <div className="relative shrink-0">
                                    <Image src='/images/blog/single.jpg' width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL='/images/blog/single.jpg' className="h-80 w-full object-cover" id="profile-banner" alt="" />
                                    <div className="absolute inset-0 bg-slate/10 group-hover:bg-slate-900/40 transition duration-500"></div>
                                    <label className="absolute inset-0 cursor-pointer" ></label>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-12 gap-6 mt-6">
                            <div className="lg:col-span-3 md:col-span-4">
                                <div className="pt-4 px-4 -mt-20">
                                    <div className="group profile-pic w-[112px]">
                                        <input id="pro-img" name="profile-image" type="file" className="hidden"  />
                                        <div>
                                            <div className="relative size-28 rounded-full shadow-md dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                                                <Image src={creater?.avatar} width={112} height={112} placeholder="blur" blurDataURL={creater?.avatar} className="rounded-full" id="profile-image" alt=""/>
                                                <div className="absolute inset-0 group-hover:bg-slate-900/40 transition duration-500"></div>
                                                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div className="mt-4">
                                        <h5 className="text-lg font-semibold">Jenny Jimenez<i className="mdi mdi-check-decagram text-emerald-600 align-middle text-lg"></i></h5>
                                        <p className="text-slate-400 text-[16px] mt-1">Created by <Link href="#" className="text-violet-600 font-semibold">1x5484dcdvcdscds56c4</Link></p>

                                        <div className="mt-3 space-x-1">
                                            <Link href="#" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i> Follow me</Link>
                                            <Link href="/creator-profile-setting" className="btn btn-icon btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"><i className="mdi mdi-cog"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="lg:col-span-9 md:col-span-8">
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                                        <div className="group relative overflow-hidden flex items-center p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                                            <div className="flex items-center justify-center size-16 rounded-md bg-violet-600/10 text-violet-600">
                                            <UserCheck className="size-6"/>
                                            </div>

                                            <div className="ms-3">
                                                <h5 className="font-semibold text-slate-400">Followers</h5>
                                                <h5 className="font-semibold text-lg">4785</h5>
                                            </div>
                                        </div>

                                        <div className="group relative overflow-hidden flex items-center p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                                            <div className="flex items-center justify-center size-16 rounded-md bg-violet-600/10 text-violet-600">
                                                <UserPlus className="size-6"/>
                                            </div>

                                            <div className="ms-3">
                                                <h5 className="font-semibold text-slate-400">Following</h5>
                                                <h5 className="font-semibold text-lg">1246</h5>
                                            </div>
                                        </div>

                                        <div className="group relative overflow-hidden flex items-center p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                                            <div className="flex items-center justify-center size-16 rounded-md bg-violet-600/10 text-violet-600">
                                                <Film className="size-6"/>
                                            </div>

                                            <div className="ms-3">
                                                <h5 className="font-semibold text-slate-400">Items</h5>
                                                <h5 className="font-semibold text-lg">18</h5>
                                            </div>
                                        </div>

                                        <div className="group relative overflow-hidden flex items-center p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                                            <div className="flex items-center justify-center size-16 rounded-md bg-violet-600/10 text-violet-600">
                                                <DollarSign className="size-6"/>
                                            </div>

                                            <div className="ms-3">
                                                <h5 className="font-semibold text-slate-400">Revenue</h5>
                                                <h5 className="font-semibold text-lg">500+USD</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold">Explore Items</h3>
                                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                                        {productData.slice(0,4).map((item,index)=>{
                                            return(
                                                <div key={index} className="picture-item">
                                                        <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                                                            <div className="relative overflow-hidden">
                                                                <div className="relative overflow-hidden rounded-lg">
                                                                    <Image src={item.image} width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL={item.image} className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500 w-full h-auto" alt="" />
                                                                </div>

                                                                <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                                                    <Link href={`/item-detail/${item.id}`} className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</Link>
                                                                </div>

                                                                <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                                    <Link href="#" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></Link>
                                                                </div>
                                                                
                                                                {item.date ?  <div className="absolute bottom-2 start-0 end-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full items-center">
                                                                    <AiOutlineClockCircle className="align-middle inline"/><small id="auction-item-1" className="font-semibold"> {item.remaining?.days} : {item.remaining?.hours}: {item.remaining?.minutes}: {item.remaining?.seconds}</small>
                                                                </div> :''}
                                                            </div>

                                                            <div className="mt-3">
                                                                <div className="flex items-center">
                                                                    <Image src={item.avatar} width={32} height={32} className="rounded-full size-8" alt="" />
                                                                    <Link href={`/creator-profile/${item.id}`} className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">{item.subtext}</Link>
                                                                </div>

                                                                <div className="my-3">
                                                                    <Link href={`/item-detail/${item.id}`} className="font-semibold hover:text-violet-600">{item.title}</Link>
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
                                            )
                                        })}
                                    </div>

                                    <h3 className="text-lg font-semibold">Activities</h3>

                                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
                                        {activities.map((item, index)=>{
                                            return(
                                                <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 overflow-hidden ease-in-out duration-500 w-full mx-auto xl:max-w-2xl" key={index}>
                                            <div className="lg:flex">
                                                <div className="relative md:shrink-0">
                                                    <Image width={0} height={0} sizes="100vw"  className="h-full w-full object-cover lg:w-48" src={item.image} alt=""/>
                                                </div>
                                                <div className="p-6 w-full">
                                                    <ul className="flex justify-between items-center list-none pb-6">
                                                        <li className="block items-center">
                                                            <span className="bg-slate-900 text-white dark:bg-slate-800 text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{item.tag}</span>
                                                            <span className="text-slate-400 text-sm ms-2">{item.time}</span>
                                                        </li>
                                                        <li>
                                                            <Link href="#" className="text-lg rounded-full text-gray-300 dark:text-gray-800 hover:text-red-600 focus:text-red-600 dark:hover:text-red-600 dark:focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                                        </li>
                                                    </ul>
                        
                                                    <Link href="/item-detail" className="font-semibold">{item.title}</Link>
                        
                                                    <div className="pt-6">
                                                        <Link href="/item-detail"  className="btn btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white">Buy now for $15</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
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