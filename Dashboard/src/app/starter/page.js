'use client'
import React,{ useState}  from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../components/navbar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Switcher = dynamic(() => import('../components/switcher'))
const Footer = dynamic(() => import('../components/footer'))

export default function Starter(){
    
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
                            <h5 className="text-lg font-semibold">Starter Page</h5>

                            <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/">Giglink</Link></li>
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">About Us</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 mt-6">
                            <div className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <p className="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, aliquid soluta. Voluptas neque adipisci fuga magnam nulla exercitationem corrupti ducimus itaque soluta earum! Fugiat, animi id sit ad magnam facilis.</p>
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