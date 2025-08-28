import heroImage from "../assets/herobackground.jpg";
import rightImage from "../assets/heroright.png";

const Hero = () => {
  return (
    <>
      {/* main container */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* left container */}
        <div className="flex flex-col items-center md:items-start pt-30 pl-5 gap-7 md:pt-50 md:pl-20">
          <p className="text-white text-xl uppercase font-light">
            Smarter, Faster, and More Reliable
          </p>
          <h1 className="text-white text-3xl font-bold">
            Streamline procurement and enhance your supply chain with 1IGS
          </h1>
          <div className="flex flex-col gap-5 space-x-5 items-center md:flex-row">
            <button className="text-white bg-orange-500 px-2 py-1.5 rounded-sm cursor-pointer">
              Explore Cost-Effective Sourcing Options.
            </button>
            <p className="text-white text-sm uppercase font-bold">
              Book a meeting
            </p>
          </div>
        </div>

        {/* right container */}
        <div>
          <img
            src={rightImage}
            alt="Hero Right"
            className="transform -scale-x-100 pt-20 md:pt-35 w-[800px] h-auto"
          />
        </div>
        
      </div>
      
    </>
  );
};

export default Hero;
