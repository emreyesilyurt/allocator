'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { Airplay, Film, Wifi, Copy, Users, FileText, File, LogIn, Layers } from 'react-feather'

export default function Navbar() {
    const [manu, setManu] = useState('');
    const [subManu, setSubManu] = useState('');
    const pathname = usePathname()

    useEffect(() => {
        setManu(pathname)
        setSubManu(pathname)
        window.scrollTo(0, 0);
    }, [setManu, setSubManu])


    return (
        <nav id="sidebar" className="sidebar-wrapper bg-white dark:bg-black">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <Link href="/">
                        <Image src="/images/logo-dark.png" width={116} height={24} placeholder="empty" className="block dark:hidden" alt=""/>
                            
                        <Image src="/images/logo-light.png" width={116} height={24}  placeholder="empty" className="hidden dark:block" alt=""/>


                    </Link>
                </div>
                <SimpleBarReact style={{ height: "calc(100% - 70px)" }}>
                    <ul className="sidebar-menu border-t dark:border-white/10 border-gray-100" data-simplebar style={{ height: "calc(100% - 70px)" }}>
                        <li className={["", "/"].includes(manu) ? "active" : ""}>
                            <Link href="/"><Airplay className="size-4 me-3" />Dashboard</Link>
                        </li>

                        <li className={`sidebar-dropdown ${["/explore", "/item-detail", "/upload-work"].includes(manu) ? "active" : ""}`}>
                            <Link href="#" onClick={(e) => { setSubManu(subManu === "/explore-item" ? "" : "/explore-item") }}><Film className="size-4 me-3" />Explore Items</Link>
                            <div className={`sidebar-submenu ${["/explore", "/item-detail", "/upload-work", "/explore-item"].includes(subManu) ? "block" : ""}`}>
                                <ul>
                                    <li className={manu === "/explore" ? "active" : ""}><Link href="/explore">Explore</Link></li>
                                    <li className={manu === "/item-detail" ? "active" : ""}><Link href={`/item-detail`}>Item Detail</Link></li>
                                    <li className={manu === "/upload-work" ? "active" : ""}><Link href="/upload-work">Upload Item</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className={manu === "/auction" ? "active" : ""}>
                            <Link href="/auction"><Film className="size-4 me-3" />Live Auction</Link>
                        </li>

                        <li className={manu === "/wallet" ? "active" : ""}>
                            <Link href="/wallet"><Wifi className="size-4 me-3" />Connect Wallet</Link>
                        </li>

                        <li className={manu === "/collection" ? "active" : ""}>
                            <Link href="/collection"><Copy className="size-4 me-3" />Collections</Link>
                        </li>

                        <li className={`sidebar-dropdown ${["/creators", "/creator-profile", "/creator-profile-setting", "/become-creator"].includes(manu) ? "active" : ""}`}>
                            <Link href="#" onClick={(e) => { setSubManu(subManu === "/creator-item" ? "" : "/creator-item") }}><Users className="size-4 me-3" />Creators</Link>
                            <div className={`sidebar-submenu ${["/creators", "/creator-profile", "/creator-profile-setting", "/become-creator", "/creator-item"].includes(subManu) ? "block" : ""}`}>
                                <ul>
                                    <li className={manu === "/creators" ? "active" : ""}><Link href="/creators">Creators</Link></li>
                                    <li className={manu === "/creator-profile" ? "active" : ""}><Link href="/creator-profile">Profile</Link></li>
                                    <li className={manu === "/creator-profile-setting" ? "active" : ""}><Link href="/creator-profile-setting">Profile Setting</Link></li>
                                    <li className={manu === "/become-creator" ? "active" : ""}><Link href="/become-creator">Become Creator</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className={`sidebar-dropdown ${["/blog", "/blog-detail"].includes(manu) ? "active" : ""}`}>
                            <Link href="#" onClick={(e) => { setSubManu(subManu === "/blog-item" ? "" : "/blog-item") }}><FileText className="size-4 me-3" />Blog</Link>
                            <div className={`sidebar-submenu ${["/blog", "/blog-detail", "/blog-item"].includes(subManu) ? "block" : ""}`}>
                                <ul>
                                    <li className={manu === "/blog" ? "active" : ""}><Link href="/blog">Blogs</Link></li>
                                    <li className={manu === "/blog-detail" ? "active" : ""}><Link href="/blog-detail">Blog Detail</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className={`sidebar-dropdown ${["/starter", "/faqs", "/privacy", "/terms"].includes(manu) ? "active" : ""}`}>
                            <Link href="#" onClick={(e) => { setSubManu(subManu === "/page-item" ? "" : "/page-item") }}><File className="size-4 me-3" />Pages</Link>
                            <div className={`sidebar-submenu ${["/starter", "/faqs", "/privacy", "/terms", "/page-item"].includes(subManu) ? "block" : ""}`}>
                                <ul>
                                    <li className={manu === "/starter" ? "active" : ""}><Link href="/starter">Starter</Link></li>
                                    <li className={manu === "/faqs" ? "active" : ""}><Link href="/faqs">FAQs</Link></li>
                                    <li className={manu === "/privacy" ? "active" : ""}><Link href="/privacy">Privacy Policy</Link></li>
                                    <li className={manu === "/terms" ? "active" : ""}><Link href="/terms">Term & Condition</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className={`sidebar-dropdown ${["/login", "/signup", "/signup-success", "/reset-password", "/lock-screen"].includes(manu) ? "active" : ""}`}>
                            <Link href="#" onClick={(e) => { setSubManu(subManu === "/auth-item" ? "" : "/auth-item") }}><LogIn className="size-4 me-3" />Authentication</Link>
                            <div className={`sidebar-submenu ${["/login", "/signup", "/signup-success", "/reset-password", "/lock-screen", "/auth-item"].includes(subManu) ? "block" : ""}`}>
                                <ul>
                                    <li className={manu === "/login" ? "active" : ""}><Link href="/login">Login</Link></li>
                                    <li className={manu === "/signup" ? "active" : ""}><Link href="/signup">Signup</Link></li>
                                    <li className={manu === "/signup-success" ? "active" : ""}><Link href="/signup-success">Signup Success</Link></li>
                                    <li className={manu === "/reset-password" ? "active" : ""}><Link href="/reset-password">Reset Password</Link></li>
                                    <li className={manu === "/lock-screen" ? "active" : ""}><Link href="/lock-screen">Lockscreen</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className={`sidebar-dropdown ${["/comingsoon", "/maintenance", "/error", "/thankyou"].includes(manu) ? "active" : ""}`}>
                            <Link href="#" onClick={(e) => { setSubManu(subManu === "/error-item" ? "" : "/error-item") }}><Layers className="size-4 me-3" />Miscellaneous</Link>
                            <div className={`sidebar-submenu ${["/comingsoon", "/maintenance", "/error", "/thankyou", "/error-item"].includes(subManu) ? "block" : ""}`}>|
                                <ul>
                                    <li className={manu === "/comingsoon" ? "active" : ""}><Link href="/comingsoon">Comingsoon</Link></li>
                                    <li className={manu === "/maintenance" ? "active" : ""}><Link href="/maintenance">Maintenance</Link></li>
                                    <li className={manu === "/error" ? "active" : ""}><Link href="/error">Error</Link></li>
                                    <li className={manu === "/thankyou" ? "active" : ""}><Link href="/thankyou">Thank You</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="relative lg:mx-8 lg:mt-8 mx-6 mt-6 p-6 rounded-lg bg-gradient-to-b to-transparent from-gray-50 dark:from-black text-center">
                            <span className="relative z-10">
                                <Image src="/images/creator.png" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="w-32 mx-auto" alt="" />
                                <span className="text-lg font-semibold h5">Subscribe Now</span>

                                <span className="text-white mt-3 mb-5 block">Get one month free and subscribe to pro</span>

                                <Link href="https://1.envato.market/giglink-next" target="_blank" className="btn inline-block text-center bg-gray-100/5 hover:bg-gray-100 border-gray-100 dark:border-gray-100/5 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-md">Subscribe</Link>
                            </span>
                        </li>
                    </ul>
                </SimpleBarReact>

            </div>
        </nav>
    )
}