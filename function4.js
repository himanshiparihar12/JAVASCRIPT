"use client";
import React, { useState } from "react";
import Header from "../Components/Header";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";
const Page = () => {
  const [is24Hour, setIs24Hour] = useState(true);
  return (
    <div className="w-full min-h-screen bg-[#f2f2f2]">
      <Header />
      <div className="flex flex-col h-full px-8">
        {/* top div */}
        <div className="h-1/2">
          {/* here we will show time */}
          <div className="text-[11rem] flex justify-center items-center font-bold gap-5">
            <p>08</p>
            <p>:</p>
            <p>15</p>
            <p>:</p>
            <p>40</p>
          </div>
          {/* other options like time format */}
          <div className="flex justify-between items-center text-sm">
            <div className="text-gray-500">Current</div>
            <div>
              <span className="p-0.5">Sun : 07:12 - 17:17 (10h 06m)</span>
              <p className="p-0.5"> Monday,Mar 24 2025 </p>
            </div>
            <div className="flex bg-gray-200 rounded-full p-1 gap-1">
              <button
                onClick={() => setIs24Hour(false)}
                className={`px-4 py-1 text-sm rounded-full font-medium transition-all duration-200 ${
                  !is24Hour ? "bg-black text-white" : "text-black"
                }`}
              >
                12h
              </button>
              <button
                onClick={() => setIs24Hour(true)}
                className={`px-4 py-1 text-sm rounded-full font-medium transition-all duration-200 ${
                  is24Hour ? "bg-black text-white" : "text-black"
                }`}
              >
                24h
              </button>
            </div>
          </div>
        </div>
        <hr className="border-t-[3px] border-white my-4" />

        {/* bottom div */}
        <div className="h-1/2">
          {/* location info like LONDON */}
          <div className="flex justify-between items-end py-3">
            <div className="text-5xl w-[25rem] space-y-1">
              <p>London,</p>
              <p>United Kingdom</p>
            </div>
            <p className="p-0.5 text-gray-500 w-[15rem]">
              Life moves fast. Stay on time and enjoy every moment!
            </p>
            <div className="flex justify-between items-center gap-2">
              <p className="">Add Another City</p>
              <CiCirclePlus />
            </div>
          </div>
          <div className="flex justify-between items-center">
            {/* 4 cards of different time zones*/}
            <div className="px-5 py-5 flex flex-col justify-between border-white border-3 rounded-lg w-[24%] h-[12rem]">
              {/* top part inside card */}
              <div className="flex flex-row justify-between items-center  gap-x-15">
                {/* left part in top */}
                <div>Loas Angeles</div>
                {/* right part in top */}
                <div className="text-gray-400">UTC-8</div>
              </div>
              {/* bottom part inside card */}
              <div className="flex flex-row justify-between items-center  gap-x-15">
                {/* left part in bottom */}
                <div className="text-5xl">00:15</div>
                {/* right part in bottom */}
                <div className="text-gray-400 flex justify-between items-center gap-2">
                  <GoMoon className="text-amber-300" />
                  <p>Night</p>
                </div>
              </div>
            </div>
            <div className="px-5 py-5 flex flex-col justify-between border-white border-3 rounded-lg  w-[24%] h-[12rem]">
              <div className="flex flex-row justify-between items-center  gap-x-15">
                <div>New York</div>
                <div className="text-gray-400">UTC+2</div>
              </div>
              <div className="flex flex-row justify-between items-center  gap-x-15">
                <div className="text-5xl">03:15</div>
                <div className="text-gray-400 flex justify-between items-center gap-2">
                  <GoMoon className="text-amber-300" />
                  <p>Night</p>
                </div>
              </div>
            </div>
            <div className="px-5 py-5 flex flex-col justify-between border-black border-2 rounded-lg bg-black text-gray-400 text-sm  w-[24%] h-[12rem]">
              <div className="flex flex-row justify-between items-center  gap-x-15">
                <div>London</div>
                <div>UTC+5</div>
              </div>
              <div className="flex flex-row justify-between items-center  gap-x-15">
                <div className="text-5xl text-white">03:15</div>
                <div className="flex justify-between items-center gap-2">
                  <IoIosSunny className="text-amber-300" />
                  <p>Day</p>
                </div>
              </div>
            </div>
            <div className="px-5 py-5 flex flex-col justify-between border-white border-3 rounded-lg  w-[24%] h-[12rem]">
              <div className="flex flex-row justify-between items-center  gap-x-15">
                <div>Paris</div>
                <div className="text-gray-400">UTC+2</div>
              </div>
              <div className="flex flex-row justify-between items-center  gap-x-15">
                <div className="text-5xl">03:15</div>
                <div className="text-gray-400 flex justify-between items-center gap-2">
                  <IoIosSunny className="text-amber-300" />
                  <p>Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;