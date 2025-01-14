import Image from "next/image";
import Link from "next/link";
import data from "./data/services";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-[#500114]">
        <div className="h-full w-[55%] rounded-s-full absolute top-0 right-0 bg-white justify-center items-center flex">
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
          <ul className="flex gap-20 text-[#500114]">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
        </div>
        <div className="h-full w-[45%] px-40 flex flex-col justify-center text-white gap-10">
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
      <div className="w-full h-32 flex items-center px-40">
        <h1 className="text-4xl font-bold text-[#500114]">
          Services we provide
        </h1>
      </div>
      <div className="w-full flex flex-wrap px-40 gap-40 mt-10">
        {data.services.map((service) => (
          <div
            className="w-full sm:w-1/2 lg:w-1/4 h-[500px] bg-cover bg-center"
            key={service.title}
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          >
            <div className="flex flex-col w-full h-full bg-[#500114]/70 px-5 sm:px-10 gap-4 sm:gap-10 justify-center text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
