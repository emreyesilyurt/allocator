'use client'
import React,{ useState }  from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import { blogData } from "../../data/data";
import { MdOutlineCalendarMonth} from "react-icons/md"
import {LuClock} from 'react-icons/lu'

const Navbar = dynamic(() => import('../../components/navbar'))
const Topnav = dynamic(() => import('../../components/topnav'))
const Switcher = dynamic(() => import('../../components/switcher'))
const Footer = dynamic(() => import('../../components/footer'))
import ModalVideo from 'react-modal-video';
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function BlogDetails(props){

    const blogDetails = blogData.find((blogdetail)=>blogdetail.id === parseInt(props.params.id))
    const[toggle, setToggle] = useState(true)
    const [isOpen, setOpen] = useState(false);

    return(
        <>
        <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
            <Navbar/>
            <main className='page-content bg-gray-50 dark:bg-slate-800'>

                <Topnav toggle={toggle} setToggle={setToggle}/>
                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                        <div className="md:flex justify-between items-center">
                            <h5 className="text-lg font-semibold">{blogDetails?.title }</h5>

                            <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/">Giglink</Link></li>
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/blog">Blogs</Link></li>
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Blog Detail</li>
                            </ul>
                        </div>

                        <div className="container relative mt-6">
                            <div className="grid grid-cols-1 mt-6">
                                <div className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                    <h5 className="text-lg font-semibold">{blogDetails?.title}</h5>
                                    <p className="text-slate-400 mt-4">The NFT space has made unprecedented progress since we first launched Giglink in late 2021, as it hit several major milestones in the past…</p>
            
                                    <div className="flex mt-5">
                                        <span className="font-medium inline-flex items-center"><MdOutlineCalendarMonth className="me-2"/>{blogDetails?.date ? blogDetails?.date :"20th October, 2022"}</span>
                                        <span className="ms-3 font-medium inline-flex items-center"><LuClock className="me-2"/>5 min read</span>
                                    </div>
            
                                    <div className="flex items-center mt-5">
                                        <div className="relative inline-block">
                                            <Image src='/images/items/2.jpg' width={56} height={56} placeholder="blur" blurDataURL='/images/items/2.jpg' className="h-14 rounded-full " alt=""/>
                                        </div>
            
                                        <div className="ms-3">
                                            <Link href="/creator-profile" className="font-semibold block hover:text-violet-600">Michael Williams</Link>
                                            <span className="text-slate-400 text-sm block mt-1">{blogDetails?.name }</span>
                                        </div>
                                    </div>
                    
                                    <div className="relative mt-6">
                                        <Image src= '/images/blog/single.jpg' width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL="/images/blog/single.jpg" className="rounded-lg shadow-md dark:shadow-gray-800 w-full h-auto" alt=""/>
                                        <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                            <Link href="#" data-type="youtube" data-id="S_CGed6E610"
                                                className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-violet-600" onClick={() => setOpen(true)}>
                                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
                    
                                    <div className="mt-6">
                                        <p className="text-slate-400">However, as the space keeps expanding and people proceed to mint thousands of NFTs every day, an important question arises - how do we make sure that all that creative work remains accessible over time?</p>
                                        <p className="text-slate-400 mt-4">Earlier this year, as NFTs began hitting the mainstream, the industry faced a major technical problem. As highlighted by some analysts, most of the JPEGs (or other file formats) that serve as the media basis for their respective NFTs werent stored on the chain itself. Instead, NFTs often simply redirected to a URL where the corresponding media was hosted - in most cases, that was a separate domain that belonged to either the creator or the platform where that NFT was minted.</p>
                                        <p className="text-slate-400 mt-4">But what happens when those domains go down? With that discovery, it became apparent that some NFTs have a single point of failure, which, in turn, could significantly impact their longevity and value.</p>
                                        <p className="text-slate-400 mt-4">In light of that, numerous projects and organisations have begun working on a potential fix. In a recent Clubhouse session, we brought those pioneering protocols and projects - Protocol Labs (an open-source lab that is working on Filecoin, IPFS and libp2p), Async.art, Fleek and Arweave - together to have a constructive discussion about the future of NFT metadata. Heres a concise recap of the main ideas that were discussed there.</p>
                
                                        <Image src='/images/blog/05.jpg' width={800} height={500}  placeholder="blur" blurDataURL='/images/blog/05.jpg' className="rounded-lg mt-4" alt=""/>
                
                                        <h5 className="text-lg font-semibold mt-4">Whats an NFT?</h5>
                
                                        <p className="text-slate-400 mt-4">This is the part that takes a bit of open-mindedness. An NFT is a unique digital token, with most using the ethereum blockchain to digitally record transactions. Its not a cryptocurrency like bitcoin or ether, because those are fungible -- exchangeable for another bitcoin or cash. NFTs are recorded in a digital ledger in the same way as cryptocurrency, so theres a listing of who owns each one.</p>
                                        <p className="text-slate-400 mt-4">What makes an NFT unique is the digital asset tied to the token. This can be an image, video, tweet or piece of music thats uploaded to a marketplace, which creates the NFT to be sold.</p>
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