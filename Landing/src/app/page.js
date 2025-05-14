"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Import components directly instead of dynamically to avoid CSS loading issues
import Navbar from './components/navbar';
import Footer from './components/footer';
import Switcher from './components/switcher';
import CreatorThree from './components/creator-three';
import QA from './components/qa';
import ExploreTtem from './components/explore-item';
import Feature from './components/feature';
import Creator from './components/creator';
import Blog from './components/blog';
import GetTouch from './components/get-touch';
import WhoItsFor from './components/who-its-for';
import HeadLine from './components/headline';
import DashboardDemoVideo from './components/demo-video';

import { walletData } from './data/data';

export default function IndexFive() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Authentication check
        async function checkLogin() {
            try {
                setLoading(true);
                const res = await fetch('/api/auth/check', {
                    method: 'GET',
                    credentials: 'include'
                });

                if (!res.ok) {
                    throw new Error('Failed to verify authentication');
                }

                const data = await res.json();
                setLoggedIn(data.loggedIn);
            } catch (err) {
                console.error('Authentication check failed:', err);
                setLoggedIn(false); // Ensure logged out state on error
            } finally {
                setLoading(false);
            }
        }

        checkLogin();

        // Your existing theme-related code
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');

        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.documentElement.style.width = '100%';
        document.documentElement.style.height = '100%';
        document.documentElement.style.overflow = 'hidden scroll';
        document.documentElement.style.boxSizing = 'border-box';

        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.overflow = 'visible';
        document.body.style.boxSizing = 'border-box';

        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
            const meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
            document.head.appendChild(meta);
        } else {
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
    
    return (
        <>
            <Navbar />
            {loggedIn && (
                <div className="text-center text-white bg-green-700 py-2">✅ You are logged in</div>
            )}

            <section className="relative w-full h-screen overflow-hidden">
                {/* Base layer - FORCED pure black in dark mode */}
                <div className="absolute inset-0 bg-white dark:bg-black dark:!bg-black z-0"
                    style={{
                        backgroundColor: 'white',
                        '--tw-bg-opacity': '1',
                        ['--dark-bg-color']: '#000000'
                    }}
                />

                <div className="absolute inset-0 z-10 overflow-hidden">
                    {/* Light Mode Video */}
                    <div className="block dark:hidden absolute inset-0">
                        {/* White overlay */}
                        <div className="absolute inset-0 bg-white opacity-50 pointer-events-none z-10"></div>

                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '177.77vh',
                                height: '100vh',
                                transform: 'translate(-50%, -50%)',
                                pointerEvents: 'none',
                            }}
                            className="z-0"
                        >
                            <iframe
                                title="light-mode-video"
                                src="https://www.youtube.com/embed/PShhk9fAE1o?autoplay=1&mute=1&controls=0&loop=1&playlist=PShhk9fAE1o&modestbranding=1&showinfo=0&rel=0"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                }}
                                frameBorder="0"
                                allow="autoplay; fullscreen; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Dark Mode Video */}
                    <div className="hidden dark:block absolute inset-0">
                        {/* Black overlay */}
                        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none z-10"></div>

                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '177.77vh',
                                height: '100vh',
                                transform: 'translate(-50%, -50%)',
                                pointerEvents: 'none',
                            }}
                            className="z-0"
                        >
                            <iframe
                                title="dark-mode-video"
                                src="https://www.youtube.com/embed/HPph35tdMP8?autoplay=1&mute=1&controls=0&loop=1&playlist=HPph35tdMP8&modestbranding=1&showinfo=0&rel=0"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                }}
                                frameBorder="0"
                                allow="autoplay; fullscreen; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* STRONG black overlay ONLY in dark mode - higher opacity */}
                <div className="absolute inset-0 z-20 hidden dark:block bg-black opacity-90" />

                {/* Foreground content - with higher contrast */}
                <div className="relative z-30 flex flex-col items-center justify-center w-full h-full text-center px-4">
                    <h1 className="font-bold text-4xl lg:text-6xl text-black dark:text-white leading-tight lg:leading-snug">
                        Investment Solutions for
                        <br />
                        <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">
                            Crypto Holders
                        </span>
                        <br />
                        to Drive Portfolio Efficiency
                    </h1>
                    <p className="text-gray-800 dark:text-white/80 text-lg max-w-xl mt-6">
                        Allocator uses AI to build, balance and optimize your crypto portfolio based on your risk tolerance and market conditions.
                    </p>

                    <div className="mt-8">
                        <Link
                            href="/explore-one"
                            className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full px-6 py-2"
                        >
                            Build Your Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <HeadLine
                    title="#smartInvestments"
                    description="Allocator transforms random crypto holdings into strategic portfolios tailored to your risk profile. Our AI analyzes thousands of assets to maximize returns while respecting your comfort level."
                    size="large"
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

                    {/* Replaced TinySlider with Swiper */}
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={16}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        speed={200}
                        breakpoints={{
                            375: { slidesPerView: 1 },
                            425: { slidesPerView: 2 },
                            767: { slidesPerView: 4 },
                            992: { slidesPerView: 5 },
                            1025: { slidesPerView: 6 },
                        }}
                        className="wallet-swiper"
                    >
                        {walletData.map((wallet, index) => (
                            <SwiperSlide key={index}>
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
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