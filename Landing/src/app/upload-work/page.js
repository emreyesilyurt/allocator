"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdLogOut} from "react-icons/io"
import {PiBrowsers} from 'react-icons/pi'
import {AiOutlineDashboard,AiOutlineSetting} from 'react-icons/ai'

const NavbarLight = dynamic(()=>import('../components/navbar-light'));
const Footer = dynamic(()=>import('../components/footer'));
const Switcher = dynamic(()=>import('../components/switcher'));

export default function UploadWork(){
    useEffect(() => {
        document.documentElement.classList.add("dark");
        document.body.classList.add(
          "font-urbanist",
          "text-base",
          "text-black",
          "dark:text-white",
          "dark:bg-slate-900"
        );
      }, []);
    const handleChange = () => {
        const fileUploader = document.querySelector('#input-file');
        const getFile = fileUploader.files
        if (getFile.length !== 0) {
            const uploadedFile = getFile[0];
            readFile(uploadedFile);
        }
    }

    const readFile = (uploadedFile) => {
        if (uploadedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                const parent = document.querySelector('.preview-box');
                parent.innerHTML = `<img class="preview-content" src=${reader.result} />`;
            };

            reader.readAsDataURL(uploadedFile);
        }
    };
    return(
        <>
          <NavbarLight/>
          <section className="relative table w-full py-36  bg-bottom bg-no-repeat" style={{backgroundImage:"url('/images/bg/bg1.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Upload Your Work</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/index">Giglink</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Create Item</li>
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
                    <div className="grid md:grid-cols-12 gap-[30px]">
                        <div className="lg:col-span-3 md:col-span-4">
                            <div className="overflow-hidden rounded-md shadow dark:shadow-gray-800 sticky top-20">
                                <div className="py-10  bg-center bg-no-repeat" style={{backgroundImage:"url('/images/blog/05.jpg')"}}></div>

                                <div className="relative text-center -mt-10 p-6 pt-0">
                                    <Image src="/images/avatar/1.jpg" placeholder='blur' blurDataURL='/images/avatar/1.jpg' width={80} height={80} className="bg-white dark:bg-slate-900 size-20 rounded-full shadow-md dark:shadow-gray-800 mx-auto p-1" alt=""  />

                                    <div className="mt-3">
                                        <Link href="/creator-profile" className="font-semibold block hover:text-violet-600">Steven Townsend</Link>
                                        <span className="text-slate-400 text-sm block mt-1">@StreetBoy</span>
                                    </div>

                                    <ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
                                        <li className="navbar-item account-menu text-[16px]">
                                            <Link href="/creator-profile" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span className="me-2 mb-0"><AiOutlineDashboard/></span>
                                                <h6 className="mb-0 font-medium">Profile</h6>
                                            </Link>
                                        </li>

                                        <li className="navbar-item account-menu text-[16px] active">
                                            <Link href="/upload-work" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span className="me-2 mb-0"><PiBrowsers/></span>
                                                <h6 className="mb-0 font-medium">Upload Work</h6>
                                            </Link>
                                        </li>

                                        <li className="navbar-item account-menu text-[16px]">
                                            <Link href="/creator-profile-edit" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span className="me-2 mb-0"><AiOutlineSetting/></span>
                                                <h6 className="mb-0 font-medium">Settings</h6>
                                            </Link>
                                        </li>

                                        <li className="navbar-item account-menu text-[16px]">
                                            <Link href="/lock-screen" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span className="me-2 mb-0"><IoMdLogOut /></span>
                                                <h6 className="mb-0 font-medium">Logout</h6>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-9 md:col-span-8">
                            <div className="lg:flex p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                                <div className="lg:w-1/3 md:w-full">
                                    <p className="font-semibold mb-6">Upload your ART here, Please click Upload Image Button.</p>
                                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                                    <input type="file" id="input-file" name="input-file" accept="image/*" hidden onChange={handleChange} />
                                    <label className="btn-upload btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full mt-6 cursor-pointer" htmlFor="input-file">Upload Image</label>
                                </div>

                                <div className="lg:w-2/3 md:w-full mt-8 lg:mt-0 lg:ms-6">
                                    <form>
                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="col-span-12">
                                                <label className="font-semibold">Art Title <span className="text-red-600">*</span></label>
                                                <input name="name" id="name" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Title :" />
                                            </div>

                                            <div className="col-span-12">
                                                <label className="font-semibold"> Description : </label>
                                                <textarea name="comments" id="comments" className="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-2xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Description :"></textarea>
                                            </div>

                                            <div className="md:col-span-6 col-span-12">
                                                <label className="font-semibold">Type :</label>
                                                <select className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2">
                                                    <option>GIFs</option>
                                                    <option>Music</option>
                                                    <option>Video</option>
                                                    <option>Tech</option>
                                                </select>
                                            </div>

                                            <div className="md:col-span-6 col-span-12">
                                                <label className="font-semibold"> Rate : </label>
                                                <input name="time" type="number" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" id="time" placeholder="0.004ETH" />
                                            </div>

                                            <div className="col-span-12">
                                                <h6 className="font-semibold text-lg">Auction :</h6>
                                            </div>

                                            <div className="md:col-span-6 col-span-12">
                                                <label className="font-semibold"> Starting Date : </label>
                                                <input name="date" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2 start" placeholder="Select date :" />
                                            </div>

                                            <div className="md:col-span-6 col-span-12">
                                                <label className="font-semibold"> Expiration date : </label>
                                                <input name="date" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2 end" placeholder="Select date :" />
                                            </div>

                                            <div className="col-span-12">
                                                <button type="submit" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Create Item</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          <Footer/>
          <Switcher/>
        </>
    )
}