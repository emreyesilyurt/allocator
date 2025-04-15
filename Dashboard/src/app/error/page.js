'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Switcher = dynamic(() => import('../components/switcher'))

import { ArrowLeft } from "react-feather";

export default function Error(){

    return(
        <>
        <section className="relative bg-violet-600/5">
            <div className="container-fluid relative z-1">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="text-center">
                            <Image src='/images/logo-icon-64.png' width={64} height={64} placeholder="blur" blurDataURL="/images/logo-icon-64.png" className="mx-auto" alt=""/>
                        </div>
                        <div className="title-heading text-center my-auto">
                            <div className="md:my-0 my-10">
                                <Image src='/images/error.png' width={310} height={310} placeholder="blur" blurDataURL="/images/error.png" className="mx-auto" alt=""/>
                                <h1 className="my-6 md:text-5xl text-3xl font-bold">Page Not Found?</h1>
                                <p className="text-slate-400">Whoops, this is embarassing. <br/> Looks like the page you were looking for wasnt found.</p>
                                
                                <div className="mt-6">
                                    <Link href="/" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Back to Home</Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-slate-400">© {(new Date().getFullYear())} Giglink. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
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