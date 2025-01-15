import React from "react";

function contactus() {
  return (
    <div className="w-full h-screen flex items-center justify-between px-40">
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl text-[#500114]">Contact Us</h1>
        <p className="w-[90%] text-[#500114] font-bold">
          Contact us to learn more about Teamify and how we can help your
          company
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl text-[#500114] w-[80%]">
          We Would love to hear from you
        </h1>
        <p className="w-[50%] text-[#500114] font-bold">
          Contact us to learn more about Teamify and how we can help your
          company{" "}
        </p>
        <form action="" className="flex flex-col gap-5">
          <div className="flex gap-10">
            <input
              type="text"
              placeholder="First Name"
              className="border border-[#500114] rounded-lg w-1/2 h-12"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-[#500114] rounded-lg w-1/2 h-12"
            />
          </div>
          <div className="flex gap-10">
            <input
              type="text"
              placeholder="Email"
              className="border border-[#500114] rounded-lg w-1/2 h-12"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="border border-[#500114] rounded-lg w-1/2 h-12"
            />
          </div>
          <div className="flex gap-10">
            <input
              type="text"
              placeholder="company Address"
              className="border border-[#500114] rounded-lg w-1/2 h-12"
            />
            <input
              type="text"
              placeholder="Position"
              className="border border-[#500114] rounded-lg w-1/2 h-12"
            />
          </div>
          <input
            type="text"
            placeholder="Message"
            className="border border-[#500114] rounded-lg w-full h-24"
          />
          <button className="bg-[#500114] hover:bg-white hover:text-[#500114] hover:border-[#500114] text-white py-2 px-4 border border-white rounded w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default contactus;
