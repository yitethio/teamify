import React from "react";
import data from "./data/services";

const sercices = () => {
  return (
    <>
      <div
        id="services-section"
        className="w-full h-32 flex items-center px-5 lg:px-40"
      >
        <h1 className="text-2xl lg:text-4xl font-bold text-[#500114] text-center lg:text-left">
          Services we provide
        </h1>
      </div>
      <div className="w-full flex justify-center flex-wrap px-5 lg:px-40 gap-5 lg:gap-10 mt-5 lg:mt-10">
        {data.services.map((service) => (
          <div
            className="w-full sm:w-1/2 lg:w-1/4 h-[300px] lg:h-[500px] bg-cover bg-center"
            key={service.title}
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          >
            <div className="flex flex-col w-full h-full bg-[#500114]/70 p-5 gap-3 lg:gap-5 justify-center text-white">
              <h1 className="text-md lg:text-2xl">{service.title}</h1>
              <p className="text-xs lg:text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default sercices;
