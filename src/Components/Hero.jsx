import heroImage from "../assets/herobackground.jpg";
import rightImage from "../assets/heroright.png";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-16"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start gap-6 max-w-xl text-center md:text-left">
        <p className="text-white text-lg sm:text-xl uppercase font-light tracking-wide">
          Smarter, Faster, and More Reliable
        </p>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Streamline procurement and enhance your supply chain with 1IGS
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300">
            Explore Cost-Effective Sourcing Options
          </button>
          <p className="text-white text-sm sm:text-base uppercase font-bold cursor-pointer hover:underline">
            Book a meeting
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0">
        <img
          src={rightImage}
          alt="Hero Right"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto object-contain transform md:-scale-x-100"
        />
      </div>
    </div>
  );
};

export default Hero;
