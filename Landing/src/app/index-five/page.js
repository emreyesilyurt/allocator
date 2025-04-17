"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = dynamic(() => import('../components/navbar'));
const Footer = dynamic(() => import('../components/footer'));
const Switcher = dynamic(() => import('../components/switcher'));
const CreatorThree = dynamic(() => import('../components/creator-three'));
const QA = dynamic(() => import('../components/qa'));
const ExploreTtem = dynamic(() => import('../components/explore-item'));
const Feature = dynamic(() => import('../components/feature'));
const Creator = dynamic(() => import('../components/creator'));
const Blog = dynamic(() => import('../components/blog'));
const GetTouch = dynamic(() => import('../components/get-touch'));
const WhoItsFor = dynamic(() => import('../components/who-its-for'));

import { ExploreItems } from '../data/data';
import { walletData } from '../data/data';


const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "tiny-slider/dist/tiny-slider.css";

export default function IndexFive() {
    useEffect(() => {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
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
            <section className="relative lg:pt-22 pt-[124px] overflow-hidden">
                <div className="container-fluid lg:px-10 md:px-3 relative overflow-hidden">
                    <span className="absolute blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/40 to-violet-600/40 dark:from-red-600/60 dark:to-violet-600/60"></span>
                    <div className="lg:py-24 py-[74px] md:rounded-lg shadow dark:shadow-gray-800 bg-violet-700/10 dark:bg-violet-600/20">
                        <div className="container">
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                                <div className="md:col-span-7">
                                    <div className="md:me-6">
                                        <h4 className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl mb-4">Intelligent <br></br><span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">Portfolio Optimization</span> for Crypto Investors</h4>
                                        <p className="text-lg max-w-xl">Allocator is a smart rebalancing tool that transforms your crypto portfolio into a strategy-aligned asset mix.</p>

                                        <div className="mt-6">
                                            <Link href="/explore-two" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full me-2 mt-2">Try For Free</Link>
                                            <Link href="/upload-work" className="btn bg-transparent hover:bg-violet-600 border-violet-600 text-violet-600 hover:text-white rounded-full mt-2">Explore More</Link>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-bottom-[50px] after:start-[30%] after:-z-1 after:rounded-full after:animate-ping"></div>
                                </div>

                                <div className="md:col-span-5 relative">
                                    <div className="tiny-one-icon-item">
                                        {/*<TinySlider settings={settings}>
                                            {ExploreItems.map((el, index) => (
                                                <div className="tiny-slide" key={index}>
                                                    <div className="m-2 p-3 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                                                        <Link href={`/item-detail/${el.id}`} className="group relative overflow-hidden rounded-lg">
                                                            <Image src={el.image} placeholder='blur' blurDataURL={el.image} className="rounded-lg" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                                            <span className="absolute bottom-5 start-5">
                                                                <span className="mb-2 block">
                                                                    <span className="font-semibold text-white">{el.title}</span>
                                                                </span>

                                                                <span className="flex items-center">
                                                                    <Image src={el.avatar} placeholder='blur' blurDataURL={el.avatar} className="rounded-full size-8" alt="" height={32} width={32}  />
                                                                    <span className="ms-2 text-[15px] font-medium text-white">{el.subtext}</span>
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </TinySlider>*/}
                                    </div>

                                    <div className="overflow-hidden after:content-[''] after:absolute after:h-14 after:w-14 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*</section>
            <section className="relative md:py-24 py-16">*/}
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
                                            className="rounded-lg shadow-sm dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                                            style={{ width: "100%", height: "auto", maxHeight: "170px", maxWidth: "300px", objectFit: "cover" }}
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