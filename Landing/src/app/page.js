
"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = dynamic(() => import('./components/navbar'));
const Footer = dynamic(() => import('./components/footer'));
const Switcher = dynamic(() => import('./components/switcher'));
const CreatorThree = dynamic(() => import('./components/creator-three'));
const QA = dynamic(() => import('./components/qa'));
const ExploreTtem = dynamic(() => import('./components/explore-item'));
const Feature = dynamic(() => import('./components/feature'));
const Creator = dynamic(() => import('./components/creator'));
const Blog = dynamic(() => import('./components/blog'));
const GetTouch = dynamic(() => import('./components/get-touch'));
const WhoItsFor = dynamic(() => import('./components/who-its-for'));
const HeadLine = dynamic(() => import('./components/headline'));

import { walletData } from './data/data';
import DashboardDemoVideo from './components/demo-video'


const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "tiny-slider/dist/tiny-slider.css";

export default function IndexFive() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');

        // Force full viewport coverage
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.documentElement.style.width = '100%';
        document.documentElement.style.height = '100%';
        document.documentElement.style.overflow = 'hidden scroll'; // Allow vertical scroll only
        document.documentElement.style.boxSizing = 'border-box';

        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.overflow = 'visible';
        document.body.style.boxSizing = 'border-box';

        // Add viewport meta tag programmatically if not present
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
            const meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
            document.head.appendChild(meta);
        } else {
            // Update existing viewport meta to include viewport-fit=cover
            if (!viewportMeta.content.includes('viewport-fit=cover')) {
                viewportMeta.content += ', viewport-fit=cover';
            }
        }

        document.body.classList.add(
            "font-urbanist",
            "text-base",
            "text-black",
            "bg-white",
            "dark:bg-black",
            "dark:text-white"
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



            <section className="relative w-full h-screen overflow-hidden bg-black">
                {/* Solid black background fallback */}
                <div className="absolute inset-0 bg-black z-0" />

                {/* Video iframe */}
                <div className="absolute inset-0 z-10 overflow-hidden">
                    <iframe
                        title="background-video"
                        src="/videos/dashboard-demo.mp4"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%) scale(1.05)',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            backgroundColor: '#000',
                            border: 'none',
                        }}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Remove this if not needed */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-20" /> */}

                {/* Foreground content */}
                <div className="relative z-30 flex flex-col items-center justify-center w-full h-full text-center px-4">
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
                <HeadLine
                    title="#easyCrypto"
                    description="Your description text here"
                    size="xl"
                />


                <DashboardDemoVideo
                    src="/videos/dashboard-demo.mp4"
                    poster="/images/dashboard-preview.jpg"
                />


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
                                <div className="group relative overflow-hidden p-3 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300 dark:bg-[#101010] dark:border-white/10 dark:hover:border-violet-600 dark:hover:shadow-[0_0_24px_rgba(139,92,246,0.15)]">

                                    <div className="relative overflow-hidden rounded-lg">
                                        <Image
                                            src={wallet.image}
                                            alt={wallet.title}
                                            placeholder="blur"
                                            blurDataURL={wallet.image}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="rounded-lg shadow-sm dark:shadow-black group-hover:scale-110 transition-all duration-500 grayscale hover:grayscale-0"
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