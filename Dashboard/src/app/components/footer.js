// import React from "react"
// import Link from "next/link"

// export default function Footer(){
//     return(
//         <footer>
//            <div className="shadow dark:shadow-gray-700 bg-white dark:bg-black px-6 py-4">
//                 <div className="container-fluid">
//                      <div className="grid grid-cols-1">
//                         <div className="sm:text-start text-center mx-md-2">
//                             <p className="mb-0 text-slate-400">© {(new Date().getFullYear())} Giglink. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
//                         </div>
//                      </div>
                    
//                 </div>
//            </div>
//         </footer>
//     )
// }

// footer.js
// import React from "react"
// import Link from "next/link"

// export default function Footer(){
//     return(
//         <footer>
//            <div className="shadow dark:shadow-gray-700 bg-white dark:bg-black px-6 py-4">
//                 <div className="container-fluid">
//                      <div className="grid grid-cols-1">
//                         <div className="sm:text-start text-center mx-md-2">
//                             <p className="mb-0 text-slate-400">© {(new Date().getFullYear())} Giglink. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
//                         </div>
//                      </div>
                    
//                 </div>
//            </div>
//         </footer>
//     )
// }




import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'react-feather';
import { LiaFacebookF } from "react-icons/lia";
import { FaRegEnvelope, FaLinkedin } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function FooterLight() {
    return (
        <footer 
            className="footer bg-white text-gray-700 mt-24" 
            style={{ 
                backgroundColor: 'white', 
                color: '#374151'
            }}
            data-dark-style={{
                backgroundColor: '#000000 !important'
            }}
        >
            {/* Force black background in dark mode using a combination of approaches */}
            <style jsx>{`
                :global(.dark) footer.footer,
                :global(.dark) footer.footer > div,
                :global(.dark) footer.footer > div > div,
                :global(.dark) footer.footer > div > div > div,
                :global(.dark) footer.footer > div > div > div > div,
                :global(.dark) footer.footer > div > div > div > div > div {
                    background-color: #000000 !important;
                    color: #d1d5db;
                }
            `}</style>

            

            <div className="py-[30px] px-0 border-t border-gray-200 dark:border-white/10">
                <div className="container text-center">
                    <div className="grid md:grid-cols-2 items-center gap-6">
                        <p className="mb-0 text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Allocator.app — All rights reserved.</p>

                        <ul className="list-none md:text-end text-center space-x-1">
                            <li className="inline"><Link href="https://linkedin.com" target="_blank" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-700 rounded-md hover:border-violet-600 hover:bg-violet-600"><FaLinkedin /></Link></li>
                            <li className="inline"><Link href="https://facebook.com" target="_blank" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-700 rounded-md hover:border-violet-600 hover:bg-violet-600"><LiaFacebookF /></Link></li>
                            <li className="inline"><Link href="https://instagram.com" target="_blank" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-700 rounded-md hover:border-violet-600 hover:bg-violet-600"><AiOutlineInstagram /></Link></li>
                            <li className="inline"><Link href="https://twitter.com" target="_blank" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-700 rounded-md hover:border-violet-600 hover:bg-violet-600"><AiOutlineTwitter /></Link></li>
                            <li className="inline"><Link href="mailto:support@allocator.app" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-700 rounded-md hover:border-violet-600 hover:bg-violet-600"><FaRegEnvelope /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}