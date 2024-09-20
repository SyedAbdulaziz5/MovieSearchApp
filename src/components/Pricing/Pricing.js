import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      title: "START",
      price: "Free",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
      ],
      isPopular: false,
    },
    {
      title: "PRO",
      price: "$38",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Hexagon neutra unicorn",
        "Mixtape chillwave tumeric",
      ],
      isPopular: true,
    },
    {
      title: "BUSINESS",
      price: "$56",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Hexagon neutra unicorn",
        "Mixtape chillwave tumeric",
      ],
      isPopular: false,
    },
    {
      title: "SPECIAL",
      price: "$72",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Hexagon neutra unicorn",
        "Mixtape chillwave tumeric",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-[#e4d804]">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
          </p>
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
              Monthly
            </button>
            <button className="py-1 px-4 text-gray-300 focus:outline-none">
              Annually
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {plans.map((plan, index) => (
            <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div
                className={`h-full p-6 rounded-lg border-2 ${
                  plan.isPopular ? "border-[#e4d804]" : "border-gray-700"
                } flex flex-col relative overflow-hidden`}
              >
                {plan.isPopular && (
                  <span className="bg-[#e4d804] text-gray-900 px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                )}
                <h2 className="text-sm tracking-widest text-[#e4d804] title-font mb-1 font-medium">
                  {plan.title}
                </h2>
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-lg ml-1 font-normal text-gray-400">
                      /mo
                    </span>
                  )}
                </h1>
                {plan.features.map((feature, index) => (
                  <p
                    key={index}
                    className="flex items-center text-gray-400 mb-2"
                  >
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-[#e4d804] rounded-full flex-shrink-0">
                      <FaCheckCircle />
                    </span>
                    {feature}
                  </p>
                ))}
                <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
