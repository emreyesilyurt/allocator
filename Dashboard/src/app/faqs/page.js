'use client'
import React,{ useState}  from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../components/navbar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Switcher = dynamic(() => import('../components/switcher'))
const Footer = dynamic(() => import('../components/footer'))

import { Plus } from "react-feather";
import {IoIosArrowUp,IoMdClose} from 'react-icons/io'

export default function Faq(){
    
    const[toggle, setToggle] = useState(true)
    const[modal, setModal] = useState(false)

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [activeIndex3, setActiveIndex3] = useState(0);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }
    const toggleAccordion1 = (index) => {
        if (activeIndex1 === index) {
            setActiveIndex1(0);
        } else {
            setActiveIndex1(index);
        }
    }
    const toggleAccordion2 = (index) => {
        if (activeIndex2 === index) {
            setActiveIndex2(0);
        } else {
            setActiveIndex2(index);
        }
    }
    const toggleAccordion3 = (index) => {
        if (activeIndex3 === index) {
            setActiveIndex3(0);
        } else {
            setActiveIndex3(index);
        }
    }
    const accordionOne = [
        {
            title:"How does it work ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"Do I need a designer to use Giglink ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"What do I need to do to start selling ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"What happens when I receive an order ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        }
    ]
    const accordionTwo = [
        {
            title:"How does it work ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"Do I need a designer to use Giglink ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"What do I need to do to start selling ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"What happens when I receive an order ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        }
    ]
    const accordionThree = [
        {
            title:"How does it work ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"Do I need a designer to use Giglink ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"What do I need to do to start selling ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"What happens when I receive an order ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        }
    ]
    const accordionfour = [
        {
            title:"How does it work ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"Do I need a designer to use Giglink ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"What do I need to do to start selling ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            title:"What happens when I receive an order ?",
            contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        }
    ]

    return(
        <>
        <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
            <Navbar/>
            <main className='page-content bg-gray-50 dark:bg-slate-800'>

                <Topnav toggle={toggle} setToggle={setToggle}/>
                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                        <div className="md:flex justify-between items-center">
                            <div>
                                <h5 className="text-lg font-semibold">Frequently Asked Questions</h5>

                                <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1">
                                    <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/">Giglink</Link></li>
                                    <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">FAQs</li>
                                </ul>
                            </div>

                            <div>
                                <Link href="#" onClick={()=>setModal(!modal)} className="btn btn-icon btn-sm bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" data-modal-toggle="addquestions" title="Add New"><Plus className="size-4"/></Link>
                            </div>
                            <div className={`fixed z-50 overflow-hidden inset-0 m-auto justify-center items-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80 ${modal ? "" :"hidden"}`}>
                                <div className="relative w-full h-auto max-w-lg p-4">
                                    <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700">
                                        <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
                                            <h5 className="text-xl font-semibold">Add new question</h5>
                                            <IoMdClose onClick={()=>setModal(!modal)}/>
                                        </div>
                                        <div className="p-4">                        
                                            <form>
                                                <div className="grid grid-cols-12 gap-3">
                                                    <div className="col-span-12">
                                                        <label className="font-semibold">Question <span className="text-red-600">*</span></label>
                                                        <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Title :"/>
                                                    </div>

                                                    <div className="col-span-12">
                                                        <label className="font-semibold"> Answer </label>
                                                        <textarea name="comments" id="comments" className="form-input w-full py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Description :"></textarea>
                                                    </div>

                                                    <div className="col-span-12">
                                                        <button type="submit" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md">Add Q&A</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                            <div className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <h5 className="font-semibold">Buying Product</h5>

                                <div className="mt-3">
                                    {accordionOne.map((item,index)=>{
                                        return(
                                            <div key={index} className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4 ">
                                                <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                    <button onClick={() => toggleAccordion(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-violet-600' : ''}`}>
                                                        <span>{item.title}</span>
                                                        <IoIosArrowUp className={`size-4  shrink-0 ${activeIndex === index ? "rotate-380" : "rotate-180"}`}/>
                                                    </button>
                                                </h2>
                                                {activeIndex === index && (
                                                    <div>
                                                        <div className="p-5">
                                                            <p className="text-slate-400 dark:text-gray-400">{item.contant}</p>
                                                        </div>
                                                    </div>
                                                )}
                                                
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <h5 className="font-semibold">General Questions</h5>

                                <div className="mt-3">
                                    {accordionTwo.map((item,index)=>{
                                        return(
                                            <div key={index} className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4 ">
                                                <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                    <button onClick={() => toggleAccordion1(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex1 === index ? 'bg-gray-50 dark:bg-slate-800 text-violet-600' : ''}`}>
                                                        <span>{item.title}</span>
                                                        <IoIosArrowUp className={`size-4  shrink-0 ${activeIndex1 === index ? "rotate-380" : "rotate-180"}`}/>
                                                    </button>
                                                </h2>
                                                {activeIndex1 === index && (
                                                    <div>
                                                        <div className="p-5">
                                                            <p className="text-slate-400 dark:text-gray-400">{item.contant}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <h5 className="font-semibold">Payments Questions</h5>

                                <div className="mt-3">
                                    {accordionThree.map((item,index)=>{
                                        return(
                                            <div key={index} className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4 ">
                                                <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                    <button onClick={() => toggleAccordion2(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex2 === index ? 'bg-gray-50 dark:bg-slate-800 text-violet-600' : ''}`}>
                                                        <span>{item.title}</span>
                                                        <IoIosArrowUp className={`size-4  shrink-0 ${activeIndex2 === index ? "rotate-380" : "rotate-180"}`}/>
                                                    </button>
                                                </h2>
                                                {activeIndex2 === index && (
                                                    <div>
                                                        <div className="p-5">
                                                            <p className="text-slate-400 dark:text-gray-400">{item.contant}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <h5 className="font-semibold">Support Questions</h5>

                                <div className="mt-3">
                                    {accordionfour.map((item,index)=>{
                                        return(
                                            <div key={index} className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4 ">
                                                <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                    <button onClick={() => toggleAccordion3(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex3 === index ? 'bg-gray-50 dark:bg-slate-800 text-violet-600' : ''}`}>
                                                        <span>{item.title}</span>
                                                        <IoIosArrowUp className={`size-4  shrink-0 ${activeIndex3 === index ? "rotate-380" : "rotate-180"}`}/>
                                                    </button>
                                                </h2>
                                                {activeIndex3 === index && (
                                                    <div>
                                                        <div className="p-5">
                                                            <p className="text-slate-400 dark:text-gray-400">{item.contant}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
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