import React, { useContext } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AppContext } from "../../Context";

const socialLinks = [
  {
    href: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    href: "https://twitter.com",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
];

const Contact = () => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <section
      className={`text-gray-400  body-font relative ${
        isDarkMode ? " bg-gray-50 text-gray-950" : " bg-gray-900 text-gray-400"
      }`}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#e4d804]">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-[#e4d804] focus:bg-gray-900  focus:ring-[#e4d804] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-[#e4d804] focus:bg-gray-900 focus:ring-[#e4d804] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm ">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-[#e4d804] focus:bg-gray-900  focus:ring-[#e4d804] h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-300 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-[#e4d804] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg">
                Submit
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
              <a className="text-[#e4d804]" href="mailto:example@email.com">
                example@email.com
              </a>
              <p className="leading-normal my-5">
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
              <span className="inline-flex">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    className="ml-4 text-gray-500 hover:text-[#e4d804] transition-colors duration-300"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
