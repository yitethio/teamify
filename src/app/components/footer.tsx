"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/outline";




function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full flex justify-center mb-5 px-4 py-10">
      <div className="bg-[#500114] px-8 md:px-16 lg:px-40 w-full md:w-[85%] h-auto py-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-10">
        <Image
          src="big.svg"
          alt="teamify logo"
          height={300}
          width={300}
          className="relative max-w-full h-auto"
        />
        <div className="flex justify-center gap-10 text-white w-full md:w-auto">
          <div className="flex flex-col gap-4 md:gap-5 w-full md:w-[40%]">
            <p className="font-bold">Site Map</p>
            <ul className="flex flex-col gap-2">
              <li className="relative">
                <button
                  className="flex items-center gap-1"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Services
                  {isDropdownOpen ? (
                    <ChevronUpIcon className="w-4 h-4" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </button>
                {isDropdownOpen && (
                 <ul className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48">
                 <li className="p-2 hover:bg-gray-200">
                   <Link href="/" className="text-[#500114]">Virtual Assistance</Link>
                 </li>
                 <li className="p-2 hover:bg-gray-200">
                   <Link href="/" className="text-[#500114]">Customer Service</Link>
                 </li>
                 <li className="p-2 hover:bg-gray-200">
                   <Link href="/" className="text-[#500114]">SDR</Link>
                 </li>
                 <li className="p-2 hover:bg-gray-200">
                   <Link href="/" className="text-[#500114]">Social Media Management</Link>
                 </li>
                 <li className="p-2 hover:bg-gray-200">
                   <Link href="/" className="text-[#500114]">Cold Calling</Link>
                 </li>
                 <li className="p-2 hover:bg-gray-200">
                   <Link href="/" className="text-[#500114]">Software Engineering</Link>
                 </li>
               </ul>
               
                )}
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
             
            </ul>
          </div>
          {/* Social Media Section */}
          <div className="flex flex-col gap-4 md:gap-5 w-full md:w-[40%]">
  <p className="font-bold">Social Media</p>
  <ul className="flex flex-col gap-2">
    <li>
      <Link href="https://www.instagram.com/teamfy_net?igsh=MTRhanc5cnN3b29mMQ==" target="_blank" rel="noopener noreferrer">
        Instagram
      </Link>
    </li>
    <li>
      <Link href="mailto:helloteamify@gmail.com?subject=Hiring%20Inquiry&body=Hello,%20I%20am%20interested%20in%20hiring%20Teamify." target="_blank" rel="noopener noreferrer">
        Email
      </Link>
    </li>
    <li>
      <Link href="https://www.linkedin.com/company/outsourcewithteamfy/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </Link>
    </li>
  </ul>
</div>


        </div>
      </div>
    </div>
  );
}

export default Footer;
