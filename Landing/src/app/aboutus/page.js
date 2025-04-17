"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

const Navbar = dynamic(() => import('../components/navbar'));
const Footer = dynamic(() => import('../components/footer'));
const Switcher = dynamic(() => import('../components/switcher'));
const Blog = dynamic(() => import('../components/blog'));
const Team = dynamic(() => import('../components/team'));

export default function AboutUs() {
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        document.documentElement.classList.add("light");
        document.body.classList.add(
            "font-urbanist",
            "text-base",
            "text-black",
            "dark:text-white",
            "dark:bg-slate-900"
        );
    }, []);
    
    return (
        <>
            <Navbar />
            <section className="relative table w-full py-36 bg-bottom bg-no-repeat" style={{ backgroundImage: "url()" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">About Us</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/index">Allocator</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">About Us</li>
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
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg -mt-[15px] -ms-[15px] h-[98%] w-[98%] -z-1"></div>
                                <Image src='/images/about.jpg' className="rounded-lg shadow-md dark:shadow-gray-800" alt="About Allocator" width={450} height={600} sizes="100vw" placeholder="blur" blurDataURL={'/images/about.jpg'} style={{ width: "100%", height: "auto" }} />
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link href="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-violet-600">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

                        <div className="lg:col-span-7">
                            <div className="lg:ms-5">
                                <span className="text-violet-600 font-medium">Smart Investing, Redefined</span>
                                <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">AI-Driven Crypto Portfolio Optimization</h3>

                                <p className="text-slate-400 max-w-xl">Allocator is the intelligent way to manage your crypto portfolio. Using cutting-edge AI and risk profiling, we help you build a strategy-aligned asset mix in seconds — without the guesswork.</p>
                                <p className="text-slate-400 max-w-xl mt-4">From manual tracking to automated rebalancing, we’re on a mission to make high-performance crypto investing accessible, secure, and personalized for everyone.</p>

                                <div className="mt-6">
                                    <Link href="/contact" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full me-2 mt-2 inline-flex items-center">
                                        <FaRegEnvelope className='me-1' />
                                        <span>Contact us</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16 lg:pt-24 pt-16">
                    <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-no-repeat bg-center" style={{ backgroundImage: "url('/images/map.png')" }}></div>
                    <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                        <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold text-black dark:text-white">Trusted by crypto enthusiasts worldwide</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Allocator is designed by data engineers and built for crypto investors seeking clarity, control, and confidence in every market cycle.</p>
                    </div>

                    <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2">$<span className="counter-value">1</span>M+</h1>
                            <h5 className="counter-head text-lg font-medium text-slate-400">Portfolio value optimized</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2"><span className="counter-value">3</span>K+</h1>
                            <h5 className="counter-head text-lg font-medium text-slate-400">Portfolios analyzed</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2"><span className="counter-value">20</span>K+</h1>
                            <h5 className="counter-head text-lg font-medium text-slate-400">Users empowered</h5>
                        </div>
                    </div>
                </div>

                <Team />
                <Blog />
            </section>
            <Footer />
        </>
    )
}
