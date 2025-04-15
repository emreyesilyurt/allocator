'use client'
import React,{useState,useEffect}  from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Switcher = dynamic(() => import('../components/switcher'))

import { ArrowLeft } from "react-feather";

export default function Comingsoon(){

    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light')

        const interval = setInterval(() => {
            let startDate = new Date('December 29, 2025 6:0:0');
            let currentDate = new Date();
            const diff = startDate.getTime() - currentDate.getTime();

            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            setTime({ hours, minutes, seconds, days });
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return(
        <>
        
        <section className="relative  bg-no-repeat bg-center" style={{backgroundImage:"url('/images/bg/bg2.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
            <div className="container-fluid relative z-1">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <Link href='/' className="text-center">
                            <Image src='/images/logo-white.png' width={116} height={28} className="mx-auto h-7" alt=""/>
                        </Link>
                        <div className="title-heading text-center my-auto">
                            <div className="md:my-0 my-10">
                                <div className="wave-effect relative tracking-tighter mb-6 md:text-5xl text-3xl font-bold text-white">
                                <span className="relative inline-block" >C</span>
                                    <span className="relative inline-block mx-1" >O</span>
                                    <span className="relative inline-block mx-1" >M</span>
                                    <span className="relative inline-block mx-1" >I</span>
                                    <span className="relative inline-block mx-1" >N</span>
                                    <span className="relative inline-block mx-1" >G</span>
                                    <span className="relative inline-block mx-1" >S</span>
                                    <span className="relative inline-block mx-1" >O</span>
                                    <span className="relative inline-block mx-1" >O</span>
                                    <span className="relative inline-block mx-1" >N</span>
                                </div>
                                <p className="text-white/70 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>
                            
                                <div id="countdown">
                                    <ul className="count-down list-none inline-block text-white text-center mt-8">
                                        <li id="days" className="count-number inline-block m-2">{time.days}
                                            <p className="count-head">Days</p></li>
                                        <li id="hours" className="count-number inline-block m-2">{time.hours}
                                            <p className="count-head">Hours</p></li>
                                        <li id="mins" className="count-number inline-block m-2">{time.minutes}
                                            <p className="count-head">Mins</p></li>
                                        <li id="secs" className="count-number inline-block m-2">{time.seconds}
                                            <p className="count-head">secs</p></li>
                                        <li id="end" className="h1"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-white">© {(new Date().getFullYear())} Giglink. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="fixed bottom-3 end-3">
            <Link href="/" className="back-button btn btn-icon bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full"><ArrowLeft className="size-4"/></Link>
        </div>
        <Switcher/>
        </>
    )
}