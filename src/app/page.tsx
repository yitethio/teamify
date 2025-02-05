"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";
import Contactus from "./components/contactus";
import Services from "./components/services/sercices";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="h-screen w-full bg-[#500114]">
        <div className="h-[99%] w-[50%] rounded-s-full absolute top-0 right-0 bg-white justify-center items-center lg:flex hidden ">
          <Image
            src="image.svg"
            alt="image logo"
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="flex px-5 lg:px-40 items-center justify-between relative">
          <Image src="logo.svg" alt="teamify logo" height={28} width={100} />
          {/* Navbar links */}
          <CiMenuBurger
            className="sm:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          <ul
            className={`absolute sm:static top-full left-0 sm:top-auto sm:left-auto bg-[#500114] sm:bg-transparent w-full sm:w-auto flex sm:flex flex-col sm:flex-row items-center gap-5 sm:gap-14 md:gap-10 text-xs sm:text-sm text-white z-50 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <Link href="/" className="lg:text-[#500114] text-white">
              Home
            </Link>
            <Link
              href="#services-section"
              className="lg:text-[#500114] text-white"
            >
              Services
            </Link>
            <Link href="/About" className="lg:text-[#500114] text-white">
              About
            </Link>
            <Link
              href="#contact-section"
              className="lg:text-[#500114] text-white"
            >
              Contact Us
            </Link>
          </ul>
        </div>

        <div className="h-full w-full lg:w-[50%] px-5 lg:px-40 flex flex-col justify-center text-white gap-5 lg:gap-10 mt-0 lg:-mt-24">
          <h1 className="text-3xl lg:text-6xl text-center lg:text-left">
          Maximize your success
          </h1>
          <p className="w-full lg:w-[80%] text-center lg:text-left">
            Maximize your sales with Teamfy.net. Automate your outreach and
            spend less time chasing, more time closing.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-transparent hover:bg-white hover:text-[#500114] text-white py-2 px-4 border border-white rounded w-[50%] lg:w-[30%]">
              Join Us
            </button>
          </div>
        </div>
      </div>
      <Services />
      <div className="flex flex-col justify-center items-center w-full h-80 mt-10 bg-[#500114] gap-10">
        <h1 className="text-lg md:text-xl lg:text-3xl w-1/2 sm:w-1/4 text-center text-white">
          Getting started is the easiest thing you’ll do today.
        </h1>
        <a 
  href="mailto:leuleyohannes85@gmail.com?subject=Hiring%20Inquiry&body=Hello,%20I%20am%20interested%20in%20hiring%20Teamify."
  className="w-[30%]"
>
  <button className="bg-transparent hover:bg-white hover:text-[#500114] text-white py-2 px-4 border border-white rounded w-full">
    Hire Teamify
  </button>
</a>

      </div>
      <Contactus />
      <Footer />
    </>
  );
}
