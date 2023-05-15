import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="bg-yellow-300 shadow-md h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 px-16 -mt-3">
        <div className="container mx-auto flex justify-center items-center h-full">
          {/* text */}
          <div className="flex flex-col">
            <div className="font-seminbold flex items-center uppercase text-red-600">
              <div className="w-10 h-[3px] bg-red-500 mr-3"></div>New Trend
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-gray-100">
              FASHION HAS<span className="text-black"> REFLECT</span> WHO <br />{" "}
              YOU ARE ! <br />
              <span className="font-semibold text-pink-400">
                IT'S MAKE<span className="text-black"> CONFIDENCE</span>{" "}
              </span>
            </h1>
            <Link
              to={"/home"}
              className="self-start uppercase font-semibold border-b-2 border-black text-red-400"
            >
              See More
            </Link>
            <div className="md:w-[130px] w-[100px] h-[40px] cursor-pointer relative z-10 opacity-100 mt-5">
               
            </div>
          </div> 
           {/* image */}
          <div className="hidden lg:block">
            <img
              src="https://res.cloudinary.com/ddoexoinc/image/upload/v1683629902/store-g599c7eb74_1920_bvmqt5.jpg"
              alt="main-bg"
              className="w-[900px] h-[580px] mt-16"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
