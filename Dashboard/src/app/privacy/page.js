'use client'
import React,{ useState}  from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../components/navbar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Switcher = dynamic(() => import('../components/switcher'))
const Footer = dynamic(() => import('../components/footer'))

import {BiRightArrowAlt} from "react-icons/bi"

export default function Privacy(){
    
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
                            <h5 className="text-lg font-semibold">Privacy Policy</h5>

                            <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/">Giglink</Link></li>
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Privacy</li>
                            </ul>
                        </div>

                        <div className="container relative mt-6">
                            <div className="md:flex justify-center">
                                <div className="lg:w-4/5 w-full">
                                    <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <h5 className="text-lg font-semibold mb-4">Overview :</h5>
                                        <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                                        <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
                                        <p className="text-slate-400">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                                    
                                        <h5 className="text-lg font-semibold mb-4 mt-6">We use your information to :</h5>
                                        <ul className="list-none text-slate-400 mt-4">
                                            <li className="flex mt-2 items-center"><BiRightArrowAlt className="text-violet-600 text-lg align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                            <li className="flex mt-2 items-center"><BiRightArrowAlt className="text-violet-600 text-lg align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                                            <li className="flex mt-2 items-center"><BiRightArrowAlt className="text-violet-600 text-lg align-middle me-2"/>Create your own skin to match your brand</li>
                                            <li className="flex mt-2 items-center"><BiRightArrowAlt className="text-violet-600 text-lg align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                            <li className="flex mt-2 items-center"><BiRightArrowAlt className="text-violet-600 text-lg align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                                            <li className="flex mt-2 items-center"><BiRightArrowAlt className="text-violet-600 text-lg align-middle me-2"/>Create your own skin to match your brand</li>
                                        </ul>
            
                                        <h5 className="text-lg font-semibold mb-4 mt-6">Information Provided Voluntarily :</h5>
                                        <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
            
                                        <div className="mt-6">
                                            <Link href="#" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md">Print</Link>
                                        </div>
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