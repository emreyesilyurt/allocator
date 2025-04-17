import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'react-feather';
import { LiaFacebookF } from "react-icons/lia"
import { FaRegEnvelope, FaLinkedin } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsPencil } from "react-icons/bs"

export default function Footer() {
    return (
        <footer className="footer bg-white text-gray-700 mt-24">
            <div className="container">
                <div className="grid grid-cols-1">
                    <div className="relative py-16">
                        <div className="relative w-full">


                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                                <div className="lg:col-span-4 md:col-span-12">
                                    <Link href="/" className="text-[22px] focus:outline-none">
                                        <Image src='/images/logo-dark.png' placeholder='blur' blurDataURL='/images/logo-dark.png' alt="Allocator Logo" width={116} height={28} />
                                    </Link>
                                    <p className="mt-6 text-gray-600">Allocator is a smart rebalancing tool that transforms your crypto portfolio into a strategy-aligned asset mix using AI.</p>
                                </div>

                                <div className="lg:col-span-2 md:col-span-4">
                                    <h5 className="tracking-[1px] text-lg text-gray-800 font-semibold">Allocator</h5>
                                    <ul className="list-none footer-list mt-6">
                                        <li><Link href="/explore-one" className="text-[16px] text-gray-600 hover:text-gray-800 inline-flex items-center"><MdKeyboardArrowRight className="me-1 text-lg" /><span>Explore Item</span></Link></li>
                                        <li className="mt-[10px]"><Link href="/wallet" className="text-[16px] text-gray-600 hover:text-gray-800 inline-flex items-center"><MdKeyboardArrowRight className="me-1 text-lg" /> <span>Wallets</span></Link></li>
                                        <li className="mt-[10px]"><Link href="/contact" className="text-[16px] text-gray-600 hover:text-gray-800 inline-flex items-center"><MdKeyboardArrowRight className="me-1 text-lg" /> <span>Contact Us</span> </Link></li>
                                    </ul>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-lg text-gray-800 font-semibold">Resources</h5>
                                    <ul className="list-none footer-list mt-6">
                                        <li><Link href="/aboutus" className="text-[16px] text-gray-600 hover:text-gray-800 inline-flex items-center"><MdKeyboardArrowRight className="me-1 text-lg" /> <span>About Us</span></Link></li>
                                        <li className="mt-[10px]"><Link href="/blogs" className="text-[16px] text-gray-600 hover:text-gray-800 inline-flex items-center"><MdKeyboardArrowRight className="me-1 text-lg" /> <span>Blog & News</span> </Link></li>
                                        <li className="mt-[10px]"><Link href="/login" className="text-[16px] text-gray-600 hover:text-gray-800 inline-flex items-center"><MdKeyboardArrowRight className="me-1 text-lg" /> <span>Login</span> </Link></li>
                                    </ul>
                                    <br />
                                    <h5 className="tracking-[1px] text-lg text-gray-800 font-semibold">Legal</h5>
                                    <ul>
                                        <li className="mt-[10px]"><Link href="/terms" className="text-[16px] text-gray-600 hover:text-gray-800 inline-flex items-center"><MdKeyboardArrowRight className="me-1 text-lg" /> <span>Terms & Conditions</span> </Link></li>
                                        <li className="mt-[10px]"><Link href="/privacy" className="text-[16px] text-gray-600 hover:text-gray-800 inline-flex items-center"><MdKeyboardArrowRight className="me-1 text-lg" /> <span>Privacy Policy</span> </Link></li>
                                        <li className="mt-[10px]"><Link href="/cookies" className="text-[16px] text-gray-600 hover:text-gray-800 inline-flex items-center"><MdKeyboardArrowRight className="me-1 text-lg" /> <span>Cookies Policy</span> </Link></li>
                                    </ul>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[0px] text-lg text-gray-800 font-semibold">Get the App</h5>
                                    <ul className="list-none mt-6">
                                        <li className="inline"><Image src='/images/app.png' className="h-9 inline-block" alt="" width={120} height={36} /></li>
                                        <li className="inline"><Image src='/images/playstore.png' className="h-9 inline-block" alt="" width={120} height={36} /></li>
                                    </ul>

                                    <div className="mt-6">
                                        <h5 className="tracking-[1px] text-lg text-gray-800 font-semibold">Contact Details</h5>

                                        <div className="flex mt-6">
                                            <Mail className="size-5 text-violet-600 me-3 mt-1" />
                                            <div>
                                                <Link href="mailto:support@allocator.app" className="text-[16px] text-gray-600 hover:text-gray-800">support@allocator.app</Link>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <Phone className="size-5 text-violet-600 me-3 mt-1" />
                                            <div>
                                                <Link href="tel:+152534-468-854" className="text-[16px] text-gray-600 hover:text-gray-800">+152 534-468-854</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-gray-200">
                <div className="container text-center">
                    <div className="grid md:grid-cols-2 items-center gap-6">
                        <div className="md:text-start text-center">
                            <p className="mb-0 text-gray-600">© {new Date().getFullYear()} Allocator.app — All rights reserved.</p>
                        </div>

                        <ul className="list-none md:text-end text-center space-x-1">
                            <li className="inline"><Link href="https://linkedin.com" target="_blank" className="btn btn-icon btn-sm border border-gray-300 rounded-md hover:border-violet-600 hover:bg-violet-600"><FaLinkedin /></Link></li>
                            <li className="inline"><Link href="https://facebook.com" target="_blank" className="btn btn-icon btn-sm border border-gray-300 rounded-md hover:border-violet-600 hover:bg-violet-600"><LiaFacebookF /></Link></li>
                            <li className="inline"><Link href="https://instagram.com" target="_blank" className="btn btn-icon btn-sm border border-gray-300 rounded-md hover:border-violet-600 hover:bg-violet-600"><AiOutlineInstagram /></Link></li>
                            <li className="inline"><Link href="https://twitter.com" target="_blank" className="btn btn-icon btn-sm border border-gray-300 rounded-md hover:border-violet-600 hover:bg-violet-600"><AiOutlineTwitter /></Link></li>
                            <li className="inline"><Link href="mailto:support@allocator.app" className="btn btn-icon btn-sm border border-gray-300 rounded-md hover:border-violet-600 hover:bg-violet-600"><FaRegEnvelope /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
