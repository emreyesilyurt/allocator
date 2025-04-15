'use client'
import React,{ useState }  from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../components/navbar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Switcher = dynamic(() => import('../components/switcher'))
const Footer = dynamic(() => import('../components/footer'))


export default function UploadWork(){
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
                            <h5 className="text-lg font-semibold">Upload Work</h5>

                            <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"><Link href="/">Giglink</Link></li>
                                    <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Upload Work</li>
                                </ul>
                        </div>

                        <div className="container relative mt-6">
                            <div className="md:flex justify-center">
                                <div className="lg:w-4/5 w-full">
                                    <div className="lg:flex p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                                        <div className="lg:w-1/3 md:w-full">
                                            <p className="font-semibold mb-6">Upload your ART here, Please click Upload Image Button.</p>
                                            <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                                            <input type="file" id="input-file" name="input-file"  hidden onClick={(e)=>handleChange(e)} />
                                        <label className="btn-upload btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full mt-6 cursor-pointer" htmlFor="input-file">Upload Image</label>
                                        </div>
                    
                                        <div className="lg:w-2/3 md:w-full mt-8 lg:mt-0 lg:ms-6">
                                            <form>
                                                <div className="grid grid-cols-12 gap-6">
                                                    <div className="col-span-12">
                                                        <label className="font-semibold">Art Title <span className="text-red-600">*</span></label>
                                                        <input name="name" id="name" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Title :"/>
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
                                                        <input name="time" type="number" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" id="time" placeholder="0.004ETH"/>
                                                    </div>
                
                                                    <div className="col-span-12">
                                                        <h6 className="font-semibold text-lg">Auction :</h6>
                                                    </div>
                
                                                    <div className="md:col-span-6 col-span-12">
                                                        <label className="font-semibold"> Starting Date : </label>
                                                        <input name="date" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2 start" placeholder="Select date :"/>
                                                    </div>
                    
                                                    <div className="md:col-span-6 col-span-12">
                                                        <label className="font-semibold"> Expiration date : </label>
                                                        <input name="date" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2 end" placeholder="Select date :"/>
                                                    </div>
                
                                                    <div className="col-span-12">
                                                        <button  className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Create Item</button>
                                                    </div>
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