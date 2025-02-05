"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Footer from "../components/footer";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div
        className="max-h-screen text-white"
        style={{
          background: "linear-gradient(0deg, #B6032E 0%, #500114 100%)",
        }}
      >
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
            <Link href="/" className=" text-white">
              Home
            </Link>
            <Link href="#services-section" className=" text-white">
              Services
            </Link>
            <Link href="/About" className=" text-white">
              About
            </Link>
            <Link href="#contact-section" className=" text-white">
              Contact Us
            </Link>
          </ul>
        </div>

        <div className="text-left px-8 py-16">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 w-1/3">
           Maximize your success
          </h1>
          <p className="text-sm md:text:lg lg:text-xl mb-8 w-full">
            Stop chasing leads and start achieving your goals. Teamify.net
            handles the sales engine, so you can focus on what truly matters!
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex justify-start gap-4 pb-8 ">
          <div className="">
            <Image
              src="/about1.svg" // Ensure the image files are in the "public" folder
              alt="Team Collaboration 1"
              width={392}
              height={10}
            />
          </div>
          <div className="">
            <Image
              src="/about2.svg"
              alt="Team Collaboration 2"
              width={533}
              height={10}
            />
          </div>
          <div className="">
            <Image
              src="/about3.svg"
              alt="Team Collaboration 3"
              width={705}
              height={344}
            />
          </div>
          <div className="">
            <Image
              src="/about4.svg"
              alt="Team Collaboration 4"
              width={335}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="mt-12 w-full flex flex-col justify-center items-center lg:items-start px-5 md:px-20 lg:px-40 gap-12 lg:gap-16 lg:mb-52 mb-10">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#500114] text-center lg:text-left">
          Our Story
        </h1>

        {/* First Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center lg:items-start gap-10 lg:gap-16">
          {/* Text Section */}
          <p className="text-sm md:text-base lg:text-xl md:w-1/2 text-center md:text-left">
            Founded by two industry veterans, Teamfy was born from a shared
            vision of creating a thriving outsourcing provider specializing in
            virtual assistance, customer service, sales and business
            development, and social media management. We are committed to
            delivering exceptional results while fostering a positive and
            rewarding work environment for our team.
          </p>
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center lg:justify-end">
            <Image
              className="max-w-full h-auto"
              src="/team.svg"
              alt="teamify logo"
              height={400}
              width={400}
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center lg:items-start gap-10 lg:gap-16 mt-16">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center lg:justify-start">
            <Image
              className="max-w-full h-auto"
              src="/team2.svg"
              alt="teamify team"
              height={400}
              width={300}
            />
          </div>
          {/* Text Section */}
          <p className="text-sm md:text-base lg:text-xl md:w-1/2 text-center md:text-left">
            Our team of experienced professionals empower your growth by
            providing comprehensive lead generation, exceptional customer
            service, and impactful social media management.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
