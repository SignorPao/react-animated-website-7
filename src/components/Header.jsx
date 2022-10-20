import React, { useState, useEffect } from "react";

// import header data
import { header } from "../data";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  // navMobile state
  const [navMobile, setNavMobile] = useState(false);

  // destructure header data
  const { logo, btnLoginText, btnSignupText } = header;

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed w-full z-30 left-0 right-0 flex justify-between items-center px-[2%] transition-all duration-300`}
      data-aos="fade-down"
      data-aos-delay="100"
    >
      {/* logo */}
      <a href="#home">
        <img src={logo} alt="logo" className="h-[30px]" />
      </a>

      {/* nav - show on desktop */}
      <Nav />

      {/* btns - show on desktop */}
      <div className="hidden lg:flex space-x-4">
        <button className="btn btn-sm text-white hover:text-primary-200 transition">
          {btnLoginText}
        </button>
        <button className="btn btn-sm btn-primary">{btnSignupText}</button>
      </div>

      {/* burger menu btn - show on mobile */}
      <div
        className="lg:hidden absolute right-[2%]"
        onClick={() => setNavMobile(!navMobile)}
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 text-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-primary-200 text-3xl cursor-pointer" />
        )}
      </div>

      {/* mobile menu - show on burger btn click */}
      <NavMobile navMobile={navMobile} click={() => setNavMobile(!navMobile)} />
    </header>
  );
};

export default Header;
