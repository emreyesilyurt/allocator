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
import {BiUserPlus} from "react-icons/bi"
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { lightboxImage } from "../data/data";

export default function Creators(){

    const[toggle, setToggle] = useState(true)

    const [isOpen, setisOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + lightboxImage.length - 1) % lightboxImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % lightboxImage.length);
    };
    const handleImageClick = (index) => {
        console.log(index);
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = lightboxImage[currentImageIndex];
    return(
        <>
        <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
            <Navbar/>
            <main className='page-content bg-gray-50 dark:bg-slate-800'>

                <Topnav toggle={toggle} setToggle={setToggle}/>
                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                        <div className="md:flex justify-between items-center">
                            <h5 className="text-lg font-semibold">Creators</h5>

                            <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/">Giglink</Link></li>
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Creators</li>
                            </ul>
                        </div>

                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                            {data.slice(0,12).map((item,index)=>{
                                return(
                                    <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 ease-in-out duration-500 hover:-mt-2 h-fit" key={index}>
                                        <div className="flex justify-between items-center p-3">
                                            <div className="flex items-center">
                                                <div className="relative inline-block">
                                                    <Image src={item.avatar} width={64} height={64} placeholder="blur" blurDataURL={item.avatar} className="h-16 rounded-md" alt=""/>
                                                    <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                                </div>

                                                <div className="ms-3">
                                                    <Link href={`/creator-profile/${item.id}`} className="font-semibold block hover:text-violet-600">{item.name}</Link>
                                                    <span className="text-slate-400 text-sm block mt-1">{item.subtext}</span>
                                                </div>
                                            </div>

                                            <Link href="#" className="btn btn-icon rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"><BiUserPlus className="text-[20px]"/></Link>
                                        </div>

                                        <div className="p-2 border-t dark:border-t-gray-700">
                                            <div className="flex items-center">
                                            {
                                                item.subImage.map((subitem, index) => (
                                                    <div className="w-1/2 p-1" key={index}>
                                                        <Link href="#" className="rounded-md lightbox">
                                                            <Image src={subitem.Image} width={110} height={110} placeholder="blur" blurDataURL={subitem.Image} onClick={() => handleImageClick(subitem.index)} className="rounded-md" alt="" />
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            
                        </div>
                        {isOpen && (
                            <Lightbox
                                mainSrc={currentImage}
                                prevSrc={lightboxImage[(currentImageIndex + lightboxImage.length - 1) % lightboxImage.length]}
                                nextSrc={lightboxImage[(currentImageIndex + 1) % lightboxImage.length]}

                                onCloseRequest={() => setisOpen(false)}
                                onMovePrevRequest={handleMovePrev}
                                onMoveNextRequest={handleMoveNext}
                            />
                        )}
                    
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