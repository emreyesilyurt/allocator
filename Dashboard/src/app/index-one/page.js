"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AuctionTwo from '../components/auctionTwo';
import Switcher from '../components/switcher';
import Collection from '../components/collection';
import { FiFilter } from 'react-icons/fi';
import { nftData } from "../data/data";
import ProtectedRoute from '../../_layout';

export default function Dashboard() {
    const [currentItems, setCurrentItems] = useState(null);
    const [allData, setAllData] = useState(nftData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");

        // Use proper check for browser environment
        if (typeof window !== 'undefined') {
            const handlesScroll = () => {
                if (window.scrollY > 0) {
                    document?.querySelector(".sticky")?.classList?.add("nav-sticky");
                } else {
                    document?.querySelector(".sticky")?.classList?.remove("nav-sticky");
                }
            };
            window.addEventListener("scroll", handlesScroll);
            
            // Cleanup function to remove event listener
            return () => {
                window.removeEventListener("scroll", handlesScroll);
            };
        }
    }, []);

    const handleCategory = (event) => {
        const category = event.target.id;
        if (category !== selectedCategory) {
            setSelectedCategory(category);
        } else {
            setSelectedCategory(null);
        }
    }

    const handleType = (event) => {
        const type = event.target.id;
        if (type !== selectedType) {
            setSelectedType(type);
        } else {
            setSelectedType(null);
        }
    }

    const handleFilter = (event) => {
        const filter = event.target.id;
        if (filter !== selectedFilter) {
            setSelectedFilter(filter);
        } else {
            setSelectedFilter(null);
        }
    }

    useEffect(() => {
        let filteredData = nftData;

        if (selectedCategory) {
            filteredData = filteredData.filter((item) => item.category === selectedCategory);
        }

        if (selectedType) {
            filteredData = filteredData.filter((item) => item.type === selectedType);
        }

        if (selectedFilter) {
            switch (selectedFilter) {
                case 'low':
                    filteredData = filteredData.sort((a, b) => a.price - b.price);
                    break;
                case 'high':
                    filteredData = filteredData.sort((a, b) => b.price - a.price);
                    break;
                case 'sale':
                    filteredData = filteredData.filter((item) => item.amount === 1);
                    break;
                default:
                    break;
            }
        }

        setAllData(filteredData);
        setCurrentItems(filteredData);
    }, [selectedCategory, selectedType, selectedFilter]);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <ProtectedRoute>
            <div className="font-urbanist text-base text-black dark:text-white dark:bg-black">
                <Navbar />
                <section className="relative table w-full py-16 bg-gray-50 dark:bg-slate-800" style={{backgroundImage:"url('/images/blog/cta.jpg')"}}>
                    <div className="container relative z-30">
                        <div className="grid grid-cols-1 text-center mt-10">
                            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium">Dashboard</h3>
                        </div>
                    </div>

                    <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-transparent to-slate-900"></div>
                    <div className="absolute top-0 start-0 w-full h-full opacity-80 bg-no-repeat bg-bottom bg-cover" style={{backgroundImage:"url('/images/blog/bg.jpg')"}}></div>
                </section>

                <section className="relative md:py-24 py-16">
                    <div className="container">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div className="md:col-span-3">
                                <Link href="#" className="text-[16px] font-semibold hover:text-violet-600 ms-3" onClick={toggleDropdown}>
                                    <i className="mdi mdi-magnify"></i> Search Your NFTs
                                </Link>
                                <div className="border-t border-gray-100 dark:border-gray-800 mt-3"></div>
                                <div
                                    className={`md:block ${open ? 'block' : 'hidden'} z-10 bg-white dark:bg-dark rounded-lg shadow-md`}
                                >
                                    <div className="md:w-64 w-full transition-all duration-500">
                                        <div className="p-4">
                                            <h5 className="text-lg font-semibold">Filters</h5>
                                        </div>
                                        <div className="border-t border-gray-100 dark:border-gray-800"></div>

                                        <div>
                                            <div className="p-4">
                                                <h5 className="font-medium">Categories</h5>
                                                <ul className="list-none">
                                                    <li className="mt-2">
                                                        <label className="custom-control">
                                                            <input className="form-radio" type="radio" id="Art" name="nft-collections" onChange={handleCategory} />
                                                            <span className="text-[16px] font-medium ms-2">Art</span>
                                                        </label>
                                                    </li>
                                                    <li className="mt-2">
                                                        <label className="custom-control">
                                                            <input className="form-radio" type="radio" id="Music" name="nft-collections" onChange={handleCategory} />
                                                            <span className="text-[16px] font-medium ms-2">Music</span>
                                                        </label>
                                                    </li>
                                                    <li className="mt-2">
                                                        <label className="custom-control">
                                                            <input className="form-radio" type="radio" id="Domain Names" name="nft-collections" onChange={handleCategory} />
                                                            <span className="text-[16px] font-medium ms-2">Domain Names</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="border-t border-gray-100 dark:border-gray-800"></div>

                                            <div className="p-4">
                                                <h5 className="font-medium">Type</h5>
                                                <ul className="list-none">
                                                    <li className="mt-2">
                                                        <label className="custom-control">
                                                            <input className="form-radio" type="radio" id="GIFs" name="nft-type" onChange={handleType} />
                                                            <span className="text-[16px] font-medium ms-2">GIFs</span>
                                                        </label>
                                                    </li>
                                                    <li className="mt-2">
                                                        <label className="custom-control">
                                                            <input className="form-radio" type="radio" id="Video" name="nft-type" onChange={handleType} />
                                                            <span className="text-[16px] font-medium ms-2">Video</span>
                                                        </label>
                                                    </li>
                                                    <li className="mt-2">
                                                        <label className="custom-control">
                                                            <input className="form-radio" type="radio" id="Image" name="nft-type" onChange={handleType} />
                                                            <span className="text-[16px] font-medium ms-2">Image</span>
                                                        </label>
                                                    </li>
                                                    <li className="mt-2">
                                                        <label className="custom-control">
                                                            <input className="form-radio" type="radio" id="Audio" name="nft-type" onChange={handleType} />
                                                            <span className="text-[16px] font-medium ms-2">Audio</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="border-t border-gray-100 dark:border-gray-800"></div>

                                            <div className="p-4">
                                                <h5 className="font-medium">Price Range</h5>
                                                <ul className="list-none">
                                                    <li className="mt-2">
                                                        <label className="custom-control">
                                                            <input className="form-radio" type="radio" id="low" name="nft-price" onChange={handleFilter} />
                                                            <span className="text-[16px] font-medium ms-2">Low to High</span>
                                                        </label>
                                                    </li>
                                                    <li className="mt-2">
                                                        <label className="custom-control">
                                                            <input className="form-radio" type="radio" id="high" name="nft-price" onChange={handleFilter} />
                                                            <span className="text-[16px] font-medium ms-2">High to Low</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="border-t border-gray-100 dark:border-gray-800"></div>

                                            <div className="p-4">
                                                <h5 className="font-medium">Sale Type</h5>
                                                <ul className="list-none">
                                                    <li className="mt-2">
                                                        <label className="custom-control">
                                                            <input className="form-radio" type="radio" id="sale" name="nft-sale" onChange={handleFilter} />
                                                            <span className="text-[16px] font-medium ms-2">Sales only</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="block mt-3 md:hidden z-50 fixed top-20 end-0">
                                    <Link href="#" className="inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center size-10 rounded-full bg-violet-600 hover:bg-violet-700 border border-violet-600 hover:border-violet-700 text-white" onClick={toggleDropdown}>
                                        <FiFilter />
                                    </Link>
                                </div>
                            </div>

                            <div className="md:col-span-9">
                                <Collection title="My Investments" name="Your current crypto holdings" data={currentItems} />
                            </div>
                        </div>
                    </div>
                    <AuctionTwo title="Live Auctions" name="Explore on-chain" />
                </section>
                <Footer />
            </div>
        </ProtectedRoute>
    );
}