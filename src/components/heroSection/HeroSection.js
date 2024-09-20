import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="heroSection text-gray-400 bg-gray-900 body-font lg:px-28 md:h-[100vh]">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-5 pt-20 md:pt-44">
          <div className="lg:flex-grow lg:pr-24 px-5 md:pr-16 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
            <h1 className="title-font sm:text-6xl text-4xl font-bold mb-4 text-white">
              Unlimited <span className="text-[#e4d804]">Movie</span>, TVs
              <br className="hidden lg:inline-block" />
              Shows, & More.
            </h1>
            <p className="mb-5 leading-relaxed">
              <span className="font-semibold text-sm text-black border-2 border-none bg-white px-2 mx-3">
                PG 18
              </span>
              <span className="font-semibold text-sm text-[#e4d804] border-2 border-white px-2 mx-2">
                HD
              </span>
              Action, Adventure
            </p>
            <p className="mb-5 leading-relaxed text-lg max-w-xl">
              At MovFlix, we offer unlimited access to a vast library of movies
              and TV shows for every taste. Join us for an unparalleled
              entertainment experience that keeps you on the edge of your seat!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex tracking-widest text-white bg-[#12151E] border-2 border-[#e4d804] px-10 py-4 transition duration-300 hover:text-black font-bold hover:bg-[#e4d804] rounded-full text-sm">
                ▶ WATCH NOW
              </button>
            </div>
          </div>
          {/* Uncomment this section if you want to include an image */}
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
