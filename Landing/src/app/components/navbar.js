"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCopy, AiOutlineUser } from "react-icons/ai";
import { LuSearch, LuSettings } from 'react-icons/lu';
import { PiWalletBold } from "react-icons/pi";
import { LiaSignOutAltSolid } from 'react-icons/lia';
import { FiUser } from 'react-icons/fi';
import { BiWallet } from 'react-icons/bi';
import { MdOutlineSettings } from 'react-icons/md';

// Avoid dynamic imports for navbar components to prevent CSS loading issues
export default function Navbar() {
    const [isDropdown, openDropdown] = useState(false);
    const [isOpen, setMenu] = useState(true);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        fetchUser();
        
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", windowScroll);
            return () => {
                window.removeEventListener("scroll", windowScroll);
            };
        }
        window.scrollTo(0, 0);
        activateMenu();
    }, []);

    async function fetchUser() {
        try {
            const res = await fetch('/api/auth/check', { 
                credentials: 'include',
                cache: 'no-store',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (!res.ok) {
                throw new Error('Auth check failed');
            }
            
            const data = await res.json();
            
            if (data.loggedIn) {
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch (err) {
            console.error('Failed to fetch user:', err);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    async function handleLogout() {
        try {
            const res = await fetch('/api/auth/logout', { 
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (res.ok) {
                setUser(null);
                window.location.href = '/';
            }
        } catch (err) {
            console.error('Logout error:', err);
        }
    }

    function windowScroll() {
        const navbar = document.getElementById("topnav");
        if (navbar) {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                navbar.classList.add("nav-sticky");
            } else {
                navbar.classList.remove("nav-sticky");
            }
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

    // Don't render until mounted to avoid hydration issues
    if (!mounted) {
        return null;
    }

    return (
        <nav id="topnav" className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-black transition-colors duration-300">
            <div className="container flex flex-wrap items-center justify-between">
                <Link className="logo flex items-center" href="/">
                    <Image src="/images/logo-icon-28.png" width={28} height={28} className="inline-block sm:hidden" alt="" />
                    <div className="sm:block hidden">
                        <Image src="/images/logo-dark.png" width={116} height={28} className="inline-block dark:hidden h-7" alt="" />
                        <Image src="/images/logo-white.png" width={116} height={28} className="hidden dark:inline-block h-7" alt="" />
                    </div>
                </Link>

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

               <div className="flex items-center gap-4">
                   {!loading && (
                       <>
                           {user ? (
                               <>
                                   {/* User is logged in - show dashboard link and logout */}
                                   <Link
                                       href="http://3.148.159.251:3000/dashboard"
                                       className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors"
                                   >
                                       Dashboard
                                   </Link>

                                   <button
                                       onClick={handleLogout}
                                       className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors ml-2"
                                   >
                                       Logout
                                   </button>
                               </>
                           ) : (
                               <>
                                   <Link
                                       href="/login"
                                       className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors"
                                   >
                                       Login
                                   </Link>

                                   <Link
                                       href="/signup"
                                       className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors"
                                   >
                                       Sign Up
                                   </Link>
                               </>
                           )}
                       </>
                   )}
               </div>
            
           </div>
       </nav>
   );
}