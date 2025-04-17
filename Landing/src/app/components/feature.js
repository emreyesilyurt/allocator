import React from "react";
import Link from "next/link";
import { Hexagon } from 'react-feather';
import {TbSitemap,TbCameraPlus, TbBrandSpeedtest} from 'react-icons/tb'
import {LuLayers} from 'react-icons/lu'

export default function Feature() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 text-center">
        {/*<h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">
          How Allocator Works
        </h3>*/}

        {/*<p className="text-slate-400 max-w-xl mx-auto">
        From asset input to strategy-backed recommendations — here’s how you optimize smarter.
        </p>*/}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
        <div className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <Hexagon className="size-28 fill-violet-600/5 mx-auto rotate-[30deg]"></Hexagon>
            {/* <Hexagon className="size-28 fill-violet-600/5 mx-auto rotate-[30deg]"></Hexagon> */}
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
               <TbBrandSpeedtest/>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="#"
              className="text-lg h5 font-semibold transition duration-500 ease-in-out hover:text-violet-600"
            >
              Choose Your Risk Profile
            </Link>
            <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
            Select from Conservative, Balanced, or Aggressive to match your investment strategy.
            </p>
          </div>
        </div>
        <div className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <Hexagon className="size-28 fill-violet-600/5 mx-auto rotate-[30deg]"></Hexagon>
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                <LuLayers/>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="#"
              className="text-lg h5 font-semibold transition duration-500 ease-in-out hover:text-violet-600"
            >
              Input Your Holdings
            </Link>
            <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
            Manually enter your current crypto asset allocations — no login or wallet needed.
            </p>
          </div>
        </div>
        <div className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <Hexagon className="size-28 fill-violet-600/5 mx-auto rotate-[30deg]"></Hexagon>
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                <TbSitemap/>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="#"
              className="text-lg h5 font-semibold transition duration-500 ease-in-out hover:text-violet-600"
            >
              Optimize and Compare
            </Link>
            <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
            Instantly see a recommended portfolio and compare it with your current allocations — all visualized. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
