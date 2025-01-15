import Image from "next/image";
import Link from "next/link";
import data from "./components/services/data/services";
import Footer from "./components/footer";
import Contactus from "./components/contactus";
import Services from "./components/services/sercices";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-[#500114]">
        <div className="h-full w-[50%] rounded-s-full absolute top-0 right-0 bg-white justify-center items-center lg:flex hidden ">
          <Image
            src="image.svg"
            alt="image logo"
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="flex px-40 items-center justify-between relative ">
          <Image
            src="logo.svg"
            alt="teamify logo"
            height={28}
            width={100}
          ></Image>
          <ul className="flex lg:gap-14 md:gap-10 gap-2 text-xs lg:text-sm lg:text-[#500114] text-white z-50">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
        </div>
        <div className="h-full lg:w-[50%] w-full px-40 flex flex-col justify-center text-white gap-10 -mt-24 ">
          <h1 className="text-6xl">Expertise Outside Your Walls</h1>
          <p className="w-[90%]">
            Maximize your sales wdiith Teamfy.net. Automate your outreach and
            spend less time chasing, more time closing
          </p>
          <button className="bg-transparent hover:bg-white hover:text-[#500114] text-white py-2 px-4 border border-white rounded w-[30%]">
            Join Us
          </button>
        </div>
      </div>
      <Services />
      <div className="flex flex-col justify-center items-center w-full h-80 mt-10 bg-[#500114] gap-10">
        <h1 className="text-lg md:text-xl lg:text-3xl w-1/4 text-center text-white">
          Getting started is the easiest thing you’ll do today.
        </h1>
        <button className="bg-transparent hover:bg-white hover:text-[#500114] text-white py-2 px-4 border border-white rounded w-[30%]">
          Hire Teamify
        </button>
      </div>
      <Contactus />
      <Footer />
    </>
  );
}
