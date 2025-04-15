import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'react-feather';

export default function Team() {
    const teamData =[
        {
            image:'/images/client/04.jpg',
            name:'Jack John',
            designation:'Designer',
        },
        {
            image:'/images/client/05.jpg',
            name:'Krista John',
            designation:'Designer',
        },
        {
            image:'/images/client/06.jpg',
            name:'Roger Jackson',
            designation:'Designer',
        },
        {
            image:'/images/client/07.jpg',
            name:'Johnny English',
            designation:'Designer',
        }
    ]
    return (
        <div className="container lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h6 className="text-violet-600 font-medium mb-2">Our Minds</h6>
                <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">Management Team</h3>

                <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                {teamData.map((item,index)=>{
                    return(
                        <div className="lg:col-span-3 md:col-span-6" key={index}>
                        <div className="group text-center">
                            <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                <Image src={item.image} placeholder='blur' blurDataURL={item.image} className="" alt=""  width={208} height={208}  />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
    
                                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                    <li className="inline"><Link href="#" className="btn btn-icon btn-sm rounded-full border border-violet-600 bg-violet-600 hover:border-violet-600 hover:bg-violet-600 text-white"><Facebook className="size-4"></Facebook></Link></li>
                                    <li className="inline"><Link href="#" className="btn btn-icon btn-sm rounded-full border border-violet-600 bg-violet-600 hover:border-violet-600 hover:bg-violet-600 text-white"><Instagram className="size-4"></Instagram></Link></li>
                                    <li className="inline"><Link href="#" className="btn btn-icon btn-sm rounded-full border border-violet-600 bg-violet-600 hover:border-violet-600 hover:bg-violet-600 text-white"><Linkedin className="size-4"></Linkedin></Link></li>
                                </ul>
                            </div>
    
                            <div className="content mt-3">
                                <Link href="#" className="text-lg font-semibold hover:text-violet-600 transition-all duration-500 ease-in-out">Jack John</Link>
                                <p className="text-slate-400">{item.designation}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
               
            </div>
        </div>
    )
}
