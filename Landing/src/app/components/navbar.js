"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCopy, AiOutlineUser } from "react-icons/ai";
import { LuSearch, LuSettings } from 'react-icons/lu';
import { PiWalletBold } from "react-icons/pi";
import { LiaSignOutAltSolid } from 'react-icons/lia';
import { FiUser } from 'react-icons/fi'; // Added user icon import

export default function Navbar() {
    const [isDropdown, openDropdown] = useState(true);
    const [isOpen, setMenu] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", windowScroll);
            return () => window.removeEventListener("scroll", windowScroll);
        }
        window.scrollTo(0, 0);
        activateMenu();
    }, []);

    function windowScroll() {
        const navbar = document.getElementById("topnav");
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            navbar?.classList.add("nav-sticky");
        } else {
            navbar?.classList.remove("nav-sticky");
        }
    }

    const toggleMenu = () => {
        setMenu(!isOpen);
    };

    const activateMenu = () => {
        const menuItems = document.getElementsByClassName("sub-menu-item");
        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].href === window.location.href) {
                menuItems[i].classList.add("active");
            }
        }
    };

    return (
        //<nav id="topnav" className="defaultscroll is-sticky"> // this is the default version before convert dark mode background color
        //<nav className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur dark:bg-black/380 transition-colors duration-300">
        //<nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur dark:bg-black/80 transition-colors duration-300">
        //<nav id="topnav" className="fixed top-0 inset-x-0 z-50 bg-black dark:bg-black !bg-black !dark:bg-black transition-colors duration-300">
        <nav id="topnav" className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-black transition-colors duration-300">



            <div className="container flex flex-wrap items-center justify-between">
                {/* Left: Logo */}
                <Link className="logo flex items-center" href="/">
                    <Image src="/images/logo-icon-28.png" width={28} height={28} className="inline-block sm:hidden" alt="" />
                    <div className="sm:block hidden">
                        <Image src="/images/logo-dark.png" width={116} height={28} className="inline-block dark:hidden h-7" alt="" />
                        <Image src="/images/logo-white.png" width={116} height={28} className="hidden dark:inline-block h-7" alt="" />
                    </div>
                </Link>

                {/* Center: Navigation Links + Search */}
                <div className="hidden lg:flex items-center space-x-6 mx-auto">
                    <Link href="/aboutus" className="sub-menu-item text-sm font-medium">Services</Link>
                    <Link href="/blogs" className="sub-menu-item text-sm font-medium">Learn</Link>
                    <Link href="/contact" className="sub-menu-item text-sm font-medium">More</Link>
                    <div className="form-icon relative">
                        <LuSearch className="text-lg absolute top-1/2 -translate-y-1/2 left-3" />
                        <input
                            type="text"
                            className="form-input w-44 ps-10 py-2 px-3 h-10 rounded-3xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 bg-white dark:bg-slate-900 text-sm"
                            name="search"
                            id="searchInput"
                            placeholder="Search..."
                        />
                    </div>
                </div>

                {/* Right: Avatar & Try It Free */}
                <div className="flex items-center gap-4">
                    {/* Avatar Dropdown with Icon instead of Image */}
                    <div className="relative">
                        <button
                            onClick={() => openDropdown(!isDropdown)}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 hover:bg-violet-700 text-white transition-colors"
                            type="button"
                        >
                            <FiUser className="w-5 h-5" />
                        </button>

                        <div
                            className={`dropdown-menu absolute right-0 mt-4 w-56 rounded-md bg-white dark:bg-slate-900 shadow-lg z-50 ${isDropdown ? 'hidden' : 'block'}`}
                        >
                            <div className="relative">
                                <div className="py-8 bg-gradient-to-tr from-violet-600 to-red-600" />
                                <div className="absolute px-4 -bottom-7 left-0">
                                    <div className="flex items-end">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-white">
                                            <FiUser className="w-5 h-5" />
                                        </div>
                                        <span className="font-semibold text-[15px] ms-1">User Name</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 px-4">
                                <h5 className="font-semibold text-[15px]">Wallet:</h5>
                                <div className="flex items-center justify-between">
                                    <span className="text-[13px] text-slate-400">0x000...000</span>
                                    <Link href="#" className="text-violet-600"><AiOutlineCopy /></Link>
                                </div>
                            </div>

                            <div className="mt-4 px-4">
                                <h5 className="text-[15px]">Balance: <span className="text-violet-600 font-semibold">0.00 ETH</span></h5>
                            </div>

                            <ul className="py-2 text-start">
                                <li>
                                    <Link href="/creator-profile" className="flex items-center text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600">
                                        <AiOutlineUser className="text-[16px] mr-2" /> Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/creator-profile-edit" className="flex items-center text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600">
                                        <LuSettings className="text-[16px] mr-2" /> Settings
                                    </Link>
                                </li>
                                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                <li>
                                    <Link href="/login" className="flex items-center text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600">
                                        <LiaSignOutAltSolid className="text-[16px] mr-2" /> Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Try it Free button */}
                    <Link
                        href="/signup"
                        className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors"
                    >
                        Try it Free
                    </Link>
                </div>
            </div>
        </nav>
    );
}