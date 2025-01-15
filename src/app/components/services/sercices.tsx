import React from "react";
import data from "./data/services";

const sercices = () => {
  return (
    <>
      <div className="w-full h-32 flex items-center px-40">
        <h1 className="text-4xl font-bold text-[#500114]">
          Services we provide
        </h1>
      </div>
      <div className="w-full flex justify-center flex-wrap px-40 gap-10 mt-10">
        {data.services.map((service) => (
          <div
            className="w-full sm:w-1/2 lg:w-1/4 h-[500px] bg-cover bg-center"
            key={service.title}
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          >
            <div className="flex flex-col w-full h-full bg-[#500114]/70 px-5 sm:px-10 gap-4 sm:gap-10 justify-center text-white">
              <h1 className="text-lg lg:text-3xl ">{service.title}</h1>
              <p className="text-sm ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default sercices;
