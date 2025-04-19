"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = dynamic(() => import('./components/navbar'));
const Footer = dynamic(() => import('./components/footer-light'));
const Switcher = dynamic(() => import('./components/switcher'));
const CreatorThree = dynamic(() => import('./components/creator-three'));
const QA = dynamic(() => import('./components/qa'));
const ExploreTtem = dynamic(() => import('./components/explore-item'));
const Feature = dynamic(() => import('./components/feature'));
const Creator = dynamic(() => import('./components/creator'));
const Blog = dynamic(() => import('./components/blog'));
const GetTouch = dynamic(() => import('./components/get-touch'));
const WhoItsFor = dynamic(() => import('./components/who-its-for'));

import { walletData } from './data/data';


const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "tiny-slider/dist/tiny-slider.css";

export default function IndexFive() {
    useEffect(() => {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    
        // Apply fullscreen-safe resets
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.overflowX = 'hidden';
    
        document.body.classList.add(
            "font-urbanist",
            "text-base",
            "text-black",
            "dark:text-white",
            "dark:bg-slate-900"
        );
    }, []);
    
    const settings = {
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        nav: false,
        speed: 400,
        gutter: 0,
        controlsText: [
            '<i class="mdi mdi-chevron-left "></i>',
            '<i class="mdi mdi-chevron-right"></i>',
        ],
    };
    const walletSettings = {
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 1000,
        navPosition: "bottom",
        speed: 200,
        gutter: 16, // Increased gutter for consistent spacing
        edgePadding: 20, // Added edge padding for better visual at edges
        center: false,
        responsive: {
            1025: {
                items: 6 // Showing more items for larger screens
            },
            992: {
                items: 5
            },
            767: {
                items: 4
            },
            425: {
                items: 2
            },
            375: {
                items: 1
            }
        },
    };
    return (
        <>
            <Navbar />
            {/*<section className="relative md:pt-48 pt-36 overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center text-center mt-10">
                        <div className="relative">
                            <div className="relative mb-5">
                                <h1 className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl"> <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text"> AI-Native Crypto </span>  <br />  Portfolio Optimization</h1>


                                <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                                <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/20 dark:after:bg-violet-600/40 after:bottom-[0] after:end-[15%] after:-z-1 after:rounded-full after:animate-ping"></div>
                            </div>
                            <p className="text-slate-400 dark:text-white/70 text-lg max-w-xl mx-auto">Allocator leverages cutting-edge Generative AI to intelligently rebalance your crypto holdings — transforming portfolios into dynamic, strategy-aligned asset mixes.</p>

                            <div className="mt-8">
                                <Link href="/explore-one" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Explore now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-[spin_30s_linear_infinite] -z-1">
                        <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
                        <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
                    </div>
                </div>

            </section>*/}

            <section className="relative w-screen h-screen overflow-hidden m-0 p-0">
                {/* Background video */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <iframe
                        title="background-video"
                        src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh]"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-10"></div>

                {/* Content centered */}
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
                    <h1 className="font-bold text-4xl lg:text-6xl text-white leading-tight lg:leading-snug">
                        The way to Find <br />
                        any <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">Digital</span> Content
                    </h1>
                    <p className="text-white/70 text-lg max-w-xl mt-6">
                        We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/explore-one"
                            className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full px-6 py-2"
                        >
                            Explore now
                        </Link>
                    </div>
                </div>
            </section>





            <section className="relative md:py-24 py-16">
                {/*<CreatorThree title="Best Creators & Sellers of" description="Best sellers of the week's NFTs" />*/}
                <div className=" md:pt-24 pt-16">
                    <Feature /> <br />
                </div>

                <WhoItsFor
                    title="Who It's For"
                    description="Built for Self-Directed Investors and Emerging Funds"
                    people={[
                        "Individual investors",
                        "Early-stage portfolio managers",
                        "Crypto-first builders",
                        "Analysts & researchers",
                        "DAO treasurers",
                        "Quantitative traders",
                    ]}
                />
                <br />  <br />

                {/*<ExploreTtem title="Explore Hot Items"/>*/}
                <div className="px-3 md:px-6"> {/* Added container with padding for slider */}
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">
                            Supported Wallets
                        </h3>
                    </div>  <br />  <br />


                    <TinySlider settings={walletSettings}>
                        {walletData.map((wallet, index) => (
                            <div className="tiny-slide" key={index}>
                                <div className="group relative overflow-hidden p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 h-fit mx-1 my-2">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <Image
                                            src={wallet.image}
                                            alt={wallet.title}
                                            placeholder="blur"
                                            blurDataURL={wallet.image}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="rounded-lg shadow-sm dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500 grayscale hover:grayscale-0"
                                            style={{ width: "100%", height: "auto", maxHeight: "100px", objectFit: "contain" }}
                                        />
                                    </div>
                                    <div className="mt-2 text-center pb-1">
                                        <h5 className="text-sm font-semibold text-slate-700 dark:text-white truncate px-1">
                                            {wallet.title}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TinySlider>
                </div>

                <QA />
                <Blog />
                <GetTouch />
            </section>
            <Footer />
            <Switcher />
        </>
    )
}