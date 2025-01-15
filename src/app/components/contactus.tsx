import React from "react";

function contactus() {
  return (
    <div className="h-auto lg:h-screen flex flex-wrap lg:items-center justify-between px-5 lg:px-40 py-10">
      {/* Left Section */}
      <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-1/2">
        <h1 className="text-4xl lg:text-6xl text-[#500114]">Contact Us</h1>
        <p className="text-[#500114] font-bold">
          Contact us to learn more about Teamify and how we can help your
          company.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-1/2 mt-10 lg:mt-0">
        <h1 className="text-4xl lg:text-6xl text-[#500114] w-full lg:w-[80%]">
          We Would Love to Hear From You
        </h1>
        <p className="text-[#500114] font-bold">
          Contact us to learn more about Teamify and how we can help your
          company.
        </p>
        <form action="" className="flex flex-col gap-5">
          {/* Name Inputs */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            <input
              type="text"
              placeholder="First Name"
              className="border border-[#500114] rounded-lg w-full lg:w-1/2 h-12"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-[#500114] rounded-lg w-full lg:w-1/2 h-12"
            />
          </div>

          {/* Email and Company Name */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            <input
              type="email"
              placeholder="Email"
              className="border border-[#500114] rounded-lg w-full lg:w-1/2 h-12"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="border border-[#500114] rounded-lg w-full lg:w-1/2 h-12"
            />
          </div>

          {/* Company Address and Position */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            <input
              type="text"
              placeholder="Company Address"
              className="border border-[#500114] rounded-lg w-full lg:w-1/2 h-12"
            />
            <input
              type="text"
              placeholder="Position"
              className="border border-[#500114] rounded-lg w-full lg:w-1/2 h-12"
            />
          </div>

          {/* Message Input */}
          <textarea
            placeholder="Message"
            className="border border-[#500114] rounded-lg w-full h-24 resize-none"
          />

          {/* Button */}
          <button className="bg-[#500114] hover:bg-white hover:text-[#500114] text-white py-2 px-4 border border-[#500114] rounded w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default contactus;
