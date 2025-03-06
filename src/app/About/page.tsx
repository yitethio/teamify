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
          Our Story
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
              src="/about_4.svg"
              alt="Team Collaboration 4"
              width={498}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="mt-12 w-full flex flex-col justify-center items-center lg:items-start px-5 md:px-20 lg:px-40 gap-12 lg:gap-16 lg:mb-52 mb-10">
        {/* Title */}
        {/* <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#500114] text-center lg:text-left">
          Our Story
        </h1> */}

        {/* First Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center lg:items-start gap-10 lg:gap-16">
          {/* Text Section */}
          <p className="text-xs md:text-sm lg:text-base leading-relaxed md:w-1/2 text-center md:text-left">
            Welcome to Teamify, <br /> where we believe in harnessing the
            immense talent from Africa—specifically Ethiopia—to provide
            exceptional outsourcing solutions for businesses across the US,
            Europe, and the UK. Our mission is simple yet powerful: we aim to
            connect skilled professionals with organizations seeking dedicated
            support in various professional roles such as customer support,
            sales development and business development representations, software
            engineering, graphics design, virtual assistance, and project
            management. <br /> At Teamify, we recognize that every client has
            unique needs; therefore, we take pride in offering customized
            solutions tailored specifically for each organization we serve. Our
            rigorous selection process ensures that we only recruit top-tier
            talents, who not only possess the necessary skills but also share
            our commitment to excellence in service delivery.
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
          <p className="text-xs md:text-sm lg:text-base leading-relaxed md:w-1/2 text-center md:text-left">
            One of the key pillars of our operation is delivering results within
            short timeframes without compromising quality. We understand that
            time is of the essence in today’s competitive landscape; therefore,
            we prioritize efficient processes that allow us to meet project
            deadlines consistently. Our teams work diligently around the
            clock—leveraging time zone differences—to ensure timely completion
            of tasks while maintaining open lines of communication with clients
            throughout the process. <br /> Customer satisfaction is at the heart
            of everything we do at Teamify. We believe that happy clients lead
            to long-term partnerships built on trust and reliability. To achieve
            this goal, we employ a proactive approach by assigning dedicated
            account managers, who serve as points of contact for clients
            throughout their engagement with us. These managers facilitate
            seamless communication between clients and our teams—ensuring that
            any concerns or feedback are addressed promptly. Our commitment
            extends beyond merely fulfilling job roles; we strive for excellence
            in every interaction we have with clients or customers alike. Our
            agents undergo rigorous training programs focused on enhancing their
            problem-solving capabilities while equipping them with essential
            soft skills such as empathy and active listening—skills critical for
            providing outstanding customer service experiences.
          </p>
        </div>

        <p className="text-xs md:text-sm lg:text-base leading-relaxed text-center md:text-left">
          We also recognize the importance of adaptability in today’s fast-paced
          environment; hence our teams embrace change wholeheartedly! Whether it
          involves adopting new technologies or adjusting strategies based on
          evolving client requirements—our talent remains agile enough not only
          meet but exceed expectations consistently! Moreover—we value
          transparency at Teamify . Clients can expect regular updates regarding
          project progresses along with detailed reports outlining key
          performance indicators (KPIs). This level of transparency fosters
          accountability within our teams while providing clients peace-of-mind
          knowing they’re kept informed on every step along their journey with
          us. As an outsourcing company rooted in ethical practices—we
          prioritize fair compensation for all employees involved within our
          organization! By choosing Teamify—clients contribute positively
          towards sustainable economic growth within Ethiopia while gaining
          access to highly-skilled professionals eager to contribute towards
          mutual success! Ultimately—our goal is simple: To empower businesses
          by providing access to world-class talents capable of delivering
          outstanding results! Whether it’s enhancing customer experiences
          through exceptional support services or driving revenue growth via
          strategic sales initiatives—our teams stand ready to assist however
          possible! Thank you for considering Teamify as your outsourcing
          partner! We look forward to partnering together to achieve remarkable
          outcomes!
        </p>
      </div>

      <Footer />
    </>
  );
};

export default About;
