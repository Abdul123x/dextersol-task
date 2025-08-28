import React from "react";
import heroImage from "../assets/herobackground.jpg";
import rightImage from "../assets/heroright.png";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:pl-20 md:pr-0 pb-50 overflow-hidden pt-30"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start gap-6 max-w-xl text-center md:text-left z-10">
        <p className="text-blue-300 text-l uppercase font-light tracking-wide">
          Smarter, Faster, and More Reliable
        </p>
        <h1 className="text-white text-2xl sm:text-4xl md:text-3xl font-bold leading-snug">
          Streamline procurement and enhance your supply chain with IIGS
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <button className="bg-orange-500 text-white px-5 py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300 shadow-lg">
            Explore Cost-Effective Sourcing Options
          </button>
          <p className="text-white text-sm sm:text-base uppercase font-bold cursor-pointer hover:underline">
            Book a meeting
          </p>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 md:mt-0 z-10">
        <img
          src={rightImage}
          alt="Hero Right Illustration"
          className="w-[430px] sm:w-96 md:w-[800px] object-contain md:scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default Hero;
