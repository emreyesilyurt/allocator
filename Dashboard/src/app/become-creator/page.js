'use client'
import React,{ useState}  from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../components/navbar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Switcher = dynamic(() => import('../components/switcher'))
const Footer = dynamic(() => import('../components/footer'))

export default function BecomeCreator(){
    const[toggle, setToggle] = useState(true)

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
        <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
            <Navbar/>
            <main className='page-content bg-gray-50 dark:bg-slate-800'>

                <Topnav toggle={toggle} setToggle={setToggle}/>
                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                        <div className="md:flex justify-between items-center">
                            <h5 className="text-lg font-semibold">Become Creator</h5>

                            <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/">Giglink</Link></li>
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/creators">Creators</Link></li>
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Become Creator</li>
                            </ul>
                        </div>

                        <div className="container relative mt-6">
                            <div className="md:flex justify-center">
                                <div className="lg:w-3/4">
                                    <div className="lg:flex justify-center p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                                        <div className="lg:w-1/3 md:w-full">
                                            <p className="font-semibold mb-6">Upload your ART here, Please click Upload Image Button.</p>
                                            <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                                            <input type="file" id="input-file" name="input-file"  hidden onClick={(e)=>handleChange(e)} />
                                            <label className="btn-upload btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full mt-6 cursor-pointer" htmlFor="input-file">Upload Image</label>
                                        </div>
                    
                                        <div className="lg:w-2/3 md:w-full mt-8 lg:mt-0 lg:ms-6">
                                            <form>
                                                <div className="grid grid-cols-1 gap-6">
                                                    <div className="text-start">
                                                        <label htmlFor="name" className="font-semibold">Display Name:</label>
                                                        <input name="name" id="name" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Name :"/>
                                                    </div>
            
                                                    <div className="text-start">
                                                        <label htmlFor="name" className="font-semibold">URL:</label>
                                                        <input name="url" id="giglink-url" type="url" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" defaultValue="https://giglink.exe/streetboyyy"/>
                                                    </div>
            
                                                    <div className="text-start">
                                                        <label htmlFor="comments" className="font-semibold">Bio:</label>
                                                        <textarea name="comments" id="comments" className="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-2xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="I'm a Digital Artist. Digital Art with over 3 years of experience. Experienced with all stages of the Art cycle for dynamic projects."></textarea>
                                                    </div>
            
                                                    <div className="text-start">
                                                        <label htmlFor="name" className="font-semibold">Twitter Account:</label>
                                                        <p className="text-slate-400 text-[15px]">Link your twitter account to gain more trust on the Marketplace</p>
                                                        <input type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Twitter Profile Name" id="twitter_name" name="name" required=""/>
                                                    </div>
                                                    
                                                    <button type="submit" id="submit" name="send" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full justify-center flex items-center">Create your account</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
           <Switcher/> 
        </div>
            
        </>
    )
}