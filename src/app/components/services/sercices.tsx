import React from "react";
import data from "./data/services";

const Services = () => {
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
        key={service.title}
        className="relative w-full sm:w-1/2 lg:w-1/4 min-h-[400px] lg:min-h-[585px] bg-cover bg-center group"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-[#500114]/70 flex flex-col p-5 text-white transition-all duration-300">
          {/* Title at the top */}
          <h1 className="text-md lg:text-2xl font-bold min-h-[40px]">{service.title}</h1>

      
          {/* Added margin-top for spacing */}
          <div className="relative flex-1 flex items-center overflow-hidden group-hover:overflow-auto transition-all duration-300">
            <p className="text-xs lg:text-sm opacity-80 group-hover:opacity-100 mt-15">
              {service.description}
            </p>
          </div>
        </div>
      </div>
      
        ))}
      </div>
    </>
  );
};

export default Services;
