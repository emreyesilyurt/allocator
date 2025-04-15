"use client"; // This is a client component 👈🏽
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineArrowForward} from "react-icons/md"
import { ExploreItems } from "../data/data";

import "../../app/assets/css/tailwind.css";

export default function DiscoverItems({title,pagination,data, all}) {

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 text-center">
          <h3 className="md:text-[30px] text-[26px] font-semibold">{title}</h3>
        </div>
      {all ? <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
          {ExploreItems.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit"
              >
                <div className="relative overflow-hidden">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{width:"100%", height:"auto"}}
                      placeholder="blur"
                      blurDataURL={item.image}
                    />
                  </div>

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <Link
                      href={`/item-detail/${item.id}`}
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white inline-flex items-center"
                    >
                      <i className="mdi mdi-lightning-bolt"></i> Buy Now{" "}
                    </Link>
                  </div>

                  <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Link
                      href="#"
                      className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-plus"></i>
                    </Link>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex items-center">
                    <Image
                      src={item.avatar}
                      className="rounded-full size-8"
                      alt=""
                      width={32}
                      height={32}
                      placeholder="blur"
                      blurDataURL={item.avatar}
                    />
                    <Link
                     href={`/item-detail/${item.id}`}
                      className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600"
                    >
                      {item.subtext}
                    </Link>
                  </div>

                  <div className="my-3">
                    <Link
                     href={`/item-detail/${item.id}`}
                      className="font-semibold hover:text-violet-600"
                    >
                      {item.title}
                    </Link>
                  </div>

                  <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                  <div>
                      <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                      <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                  </div>

                  <div>
                      <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                      <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div> :
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
        {ExploreItems.slice(0,8).map((item, index) => {
          return (
            <div
              key={index}
              className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit"
            >
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width:"100%", height:"auto"}}
                    placeholder="blur"
                    blurDataURL={item.image}
                  />
                </div>

                <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                  <Link
                    href={`/item-detail/${item.id}`}
                    className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white inline-flex items-center"
                  >
                    <i className="mdi mdi-lightning-bolt"></i> Buy Now{" "}
                  </Link>
                </div>

                <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Link
                    href="#"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-plus"></i>
                  </Link>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex items-center">
                  <Image
                    src={item.avatar}
                    className="rounded-full size-8"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <Link
                   href={`/creator-profile/${item.id}`}
                    className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600"
                  >
                    {item.subtext}
                  </Link>
                </div>

                <div className="my-3">
                  <Link
                   href={`/item-detail/${item.id}`}
                    className="font-semibold hover:text-violet-600"
                  >
                    {item.title}
                  </Link>
                </div>

                <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                <div>
                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                </div>

                <div>
                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>}
        

        {pagination ? (
          <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
              <nav>
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <Link
                      href="/#"
                      className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                         <MdKeyboardArrowLeft className="text-[20px]"/>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      aria-current="page"
                      className="z-10 size-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-violet-600 shadow-sm dark:shadow-gray-700"
                    >
                      3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                       <MdKeyboardArrowRight className="text-[20px]"/>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        ) : (
          ""
        )}

        {title !== undefined ? (
          <div className="grid grid-cols-1 mt-6">
            <div className="text-center">
              <Link
                href="/explore-one"
                className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out inline-flex items-center"
              >
                {" "}
                <span>Explore More</span> <MdOutlineArrowForward className="ms-1 text-sm"/>{" "}
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
