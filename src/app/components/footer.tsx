import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full flex justify-center mb-5 px-4">
      <div className="bg-[#500114] px-8 md:px-16 lg:px-40 w-full md:w-[85%] h-auto py-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-10">
        <Image
          src="big.svg"
          alt="teamify logo"
          height={300}
          width={300}
          className="relative max-w-full h-auto"
        />
        <div className="flex justify-center gap-10 text-white w-full md:w-auto">
          <div className="flex flex-col gap-4 md:gap-5 w-full md:w-[30%]">
            <p className="font-bold">Links</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* Services Section */}
          <div className="flex flex-col gap-4 md:gap-5 w-full md:w-[30%]">
            <p className="font-bold">Our Services</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">Virtual Assistance</Link>
              </li>
              <li>
                <Link href="/">Customer Service</Link>
              </li>
              <li>
                <Link href="/">SDR</Link>
              </li>
              <li>
                <Link href="/">Social Media Management</Link>
              </li>
              <li>
                <Link href="/">Cold Calling</Link>
              </li>
            </ul>
          </div>
          {/* Social Media Section */}
          <div className="flex flex-col gap-4 md:gap-5 w-full md:w-[30%]">
            <p className="font-bold">Social Media</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">Instagram</Link>
              </li>
              <li>
                <Link href="/">Email</Link>
              </li>
              <li>
                <Link href="/">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
