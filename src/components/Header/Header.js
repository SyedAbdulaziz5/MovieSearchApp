import React, { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../Context";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "MOVIES", path: "/movies" },
  { name: "PRICING", path: "/pricing" },
  { name: "CONTACT", path: "/contact" },
  { name: "BOOKMARKS", path: "/bookmarks" },
];

const Header = () => {
  const { query, setQuery } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header sticky top-0 flex flex-col md:flex-row justify-between items-center p-5 sm:px-10 md:px-28 bg-[#171d22] text-white z-50 shadow-lg">
      <div className="header-logo mb-4 md:mb-0">
        <NavLink to="/" className="text-3xl font-bold">
          <span className="text-[#e4d804]">Mov</span>Flix
        </NavLink>
      </div>

      <nav className="navigation hidden lg:flex">
        <ul className="flex space-x-6">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover:text-[#e4d804] font-bold transition duration-300 ${
                    isActive ? "text-[#e4d804] border-b-2 border-[#e4d804]" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative flex items-center w-fit max-w-sm md:mt-0">
        <h1 className="text-gray-600 text-3xl hover:text-[#e4d804] pr-4">
          <CgProfile />
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 pl-4 text-[0.9rem] rounded-full bg-gray-800 border border-none text-white focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-gray-800 border border-none rounded-full flex items-center justify-center text-[#e4d804]">
          <IoSearch />
        </button>
      </div>

      {/* <div className="lg:hidden relative">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen ? <AiOutlineClose /> : <TiThMenu />}
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[#171d22] rounded-md shadow-lg">
            <ul className="flex flex-col space-y-2 p-3">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `hover:text-[#e4d804] font-bold transition duration-300 ${
                        isActive ? "text-[#e4d804]" : ""
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div> */}
    </header>
  );
};

export default Header;
