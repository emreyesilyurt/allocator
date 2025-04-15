'use client'
import React  from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Switcher = dynamic(() => import('../components/switcher'))

import { ArrowLeft } from "react-feather";
import {AiOutlineCheckCircle} from 'react-icons/ai'

export default function SignupSucess(){

    return(
        <>
        <section className="relative h-screen flex justify-center items-center bg-slate-50 dark:bg-slate-800">
            <div className="container relative z-1">
                <div className="md:flex justify-center">
                    <div className="lg:w-2/5">
                        <div className="relative overflow-hidden rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                            <div className="px-6 py-12 bg-emerald-600 text-center">
                                <AiOutlineCheckCircle className="text-white text-8xl mx-auto"/>
                                <h5 className="text-white text-xl tracking-wide uppercase font-semibold mt-2">Success</h5>
                            </div>

                            <div className="px-6 py-12 text-center">
                                <p className="text-black font-semibold text-xl dark:text-white">Congratulations! 🎉</p> 
                                <p className="text-slate-400 mt-4">Your account has been successfully created. <br/> Enjoy your journey. Thank you</p>
                                
                                <div className="mt-6">
                                    <Link href="/" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-indigobg-violet-700 text-white rounded-md">Continue</Link>
                                </div>
                            </div>

                            <div className="text-center p-6 border-t border-gray-100 dark:border-gray-700">
                                <p className="mb-0 text-slate-400">© {(new Date().getFullYear())} Giglink. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
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