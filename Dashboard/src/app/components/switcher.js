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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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
        </>
    )
}