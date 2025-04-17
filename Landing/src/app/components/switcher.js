import React,{useState, useEffect} from 'react'
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import {HiOutlineMoon,HiOutlineSun} from "react-icons/hi2"
import {FiArrowUp} from "react-icons/fi"


export default function Switcher() {

   const [scrollTop, setScroll] = useState(true);

   useEffect(() => {
       window.addEventListener("scroll", () => {
           setScroll(window.scrollY > 50);
        });
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    };

    function changeMode(mode, event) {
        switch (mode) {
            case 'mode':
                if (document.documentElement.className.includes("dark")) {
                    document.documentElement.className = 'light'
                } else {
                    document.documentElement.className = 'dark'
                }
                break;
            case 'layout':
                if (event.target?.innerText === "LTR") {
                    document.documentElement.dir = "ltr"
                }
                else {
                    document.documentElement.dir = "rtl"
                }
                break;

            default:
                break;
        }
    }

    return (
        <>
            <Link href="#" onClick={scrollToTop} id="back-to-top" className={`back-to-top  text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-violet-600 text-white leading-9  items-center flex justify-center ${scrollTop? "fixed": "hidden"}`}><FiArrowUp className='text-base'/></Link>

            <div className="fixed top-[25%] -left-2 z-50">
                <span className="relative inline-block rotate-90">
                    <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onClick={(event) => changeMode('mode', event)} />
                    <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
                        <HiOutlineMoon className="text-[20px] text-yellow-500"/>
                        <HiOutlineSun className="text-[20px] text-yellow-500"/>
                        <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                    </label>
                </span>
            </div>

            {/*<div className="fixed top-[40%] -left-3 z-50">
                <Link href="#" id="switchRtl">
                    <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" onClick={(event) => changeMode('layout', event)}>LTR</span>
                    <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden" onClick={(event) => changeMode('layout', event)}>RTL</span>
                </Link>
            </div>*/}

            <div className="fixed top-[60%] -left-12 z-50 hidden sm:block">
{/* 
<Link href="https://1.envato.market/giglink-next" target="_blank" className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-700 font-semibold"><i className="mdi mdi-cart-outline me-1"></i> Download</Link> 
*/}            </div>

        </>
    )
}
