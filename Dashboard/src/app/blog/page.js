'use client'
import React,{ useState }  from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import { blogData } from "../data/data";
import { Plus } from "react-feather";
import { MdOutlineCalendarMonth, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md"
import {BiRightArrowAlt} from 'react-icons/bi'
import {LuClock} from 'react-icons/lu'
import {IoMdClose} from 'react-icons/io'

const Navbar = dynamic(() => import('../components/navbar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Switcher = dynamic(() => import('../components/switcher'))
const Footer = dynamic(() => import('../components/footer'))


export default function Blog(){
    const[toggle, setToggle] = useState(true);
    const[modal, setModal] = useState(false)

    const handleChange = () => {
        const fileUploader = document.querySelector('#input-file');
            const getFile = fileUploader.files
            if (getFile.length !== 0) {
                const uploadedFile = getFile[0];
                readFile(uploadedFile);
            }
        }

    const readFile = (uploadedFile) => {
        if (uploadedFile) {
            const reader = new FileReader();
            reader.onload = () => {
            const parent = document.querySelector('.preview-box');
            parent.innerHTML = `<img class="preview-content" src=${reader.result} />`;
            };
            
            reader.readAsDataURL(uploadedFile);
        }
    };

    return(
        <>
        <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
            <Navbar/>
            <main className='page-content bg-gray-50 dark:bg-slate-800'>

                <Topnav toggle={toggle} setToggle={setToggle}/>
                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                        <div className="flex justify-between items-center">
                            <div>
                                <h5 className="text-lg font-semibold">Blogs / News</h5>

                                <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1">
                                    <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/">Giglink</Link></li>
                                    <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Blogs</li>
                                </ul>
                            </div>

                            <div>
                                <Link href="#" onClick={()=>setModal(!modal)} className="btn btn-icon btn-sm rounded-full bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-800/5 dark:border-gray-700 text-slate-900 dark:text-white"><Plus className="size-4"/></Link>
                            </div>

                            <div  className={`fixed z-50 overflow-hidden inset-0 m-auto justify-center items-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80 ${modal ? "" :"hidden"}`}>
                                <div className="relative w-full h-auto max-w-lg p-4">
                                    <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700">
                                        <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
                                            <h5 className="text-xl font-semibold">Add blog or news</h5>
                                            <IoMdClose onClick={()=>setModal(!modal)}/>
                                        </div>
                                        <div className="p-4">
                                            <div>
                                                <p className="font-semibold mb-4">Upload your blog image here, Please click Upload Image Button.</p>
                                                <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                                                <input type="file" id="input-file" name="input-file" accept="image/*" hidden onClick={(e)=>handleChange(e)} />
                                                <label className="btn-upload btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md mt-6 cursor-pointer" for="input-file">Upload Image</label>
                                            </div>
                                            
                                            <form className="mt-4">
                                                <div className="grid grid-cols-12 gap-3">
                                                    <div className="col-span-12">
                                                        <label className="font-semibold">Blog Title <span className="text-red-600">*</span></label>
                                                        <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Title :"/>
                                                    </div>

                                                    <div className="col-span-12">
                                                        <label className="font-semibold"> Description : </label>
                                                        <textarea name="comments" id="comments" className="form-input w-full py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Description :"></textarea>
                                                    </div>

                                                    <div className="col-span-12">
                                                        <button type="submit" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md">Create Blog</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>                    
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                            {blogData.map((item,index)=>{
                                return(
                                    <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700 hover:shadow-md transition-all duration-500">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL={item.image} className="w-full h-auto" alt=""/>

                                        <div className="relative p-6">
                                            <div className="absolute start-6 -top-4">
                                                <span className="bg-violet-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{item.tag}</span>
                                            </div>

                                            <div className="">
                                                <div className="flex mb-4">
                                                    <span className="text-slate-400 text-[16px] inline-flex items-center"><MdOutlineCalendarMonth className="text-slate-900 dark:text-white me-2"/>{item.date}</span>
                                                    <span className="text-slate-400 text-[16px] ms-3 inline-flex items-center"><LuClock className="text-slate-900 dark:text-white me-2"/>5 min read</span>
                                                </div>

                                                <Link href={`/blog-detail/${item.id}`} className="title text-lg font-medium hover:text-violet-600 duration-500 ease-in-out">{item.title}</Link>
                                                
                                                <div className="flex justify-between mt-4">
                                                    <Link href={`/blog-detail/${item.id}`} className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out inline-flex items-center">Read More <BiRightArrowAlt className="ms-1"/></Link>
                                                    <span className="text-slate-400 text-[16px]">by <Link href="/creator-profile" className="text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-600 font-medium">@{item.name}</Link></span>
                                                </div>
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