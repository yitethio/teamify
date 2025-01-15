import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div
        className="min-h-screen text-white"
        style={{
          background: "linear-gradient(0deg, #B6032E 0%, #500114 100%)",
        }}
      >
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4">
          <Image
            src="/logo.svg" // Ensure the logo file is in the "public" folder
            alt="teamify logo"
            height={28}
            width={100}
          />
          <ul className="flex lg:gap-14 md:gap-10 gap-2 text-xs lg:text-sm text-white z-50">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-red-700 transition">
            Contact us
          </button>
        </header>

        {/* Main Content */}
        <main className="text-left px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Expertise Outside Your Walls</h1>
          <p className="text-lg mb-8">
            Stop chasing leads and start achieving your goals. Teamify.net handles
            the sales engine, so you can focus on what truly matters!
          </p>
        </main>

        {/* Image Grid */}
        <div className="flex justify-start gap-4 px-8 pb-8 flex-wrap">
          <div className="flex-shrink-0">
            <Image
              src="/img1.png" // Ensure the image files are in the "public" folder
              alt="Team Collaboration 1"
              width={492}
              height={344}
             
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/image2.png"
              alt="Team Collaboration 2"
              width={380}
              height={344}
             
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/image3.png"
              alt="Team Collaboration 3"
              width={502}
              height={344}
             
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/image4.png"
              alt="Team Collaboration 4"
              width={310}
              height={344}
             
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
