import React from "react";

// import footer data
import { footer } from "../data";

// get current year
const year = new Date().getFullYear();

const Footer = () => {
  // destructure footer data
  const { logo, copyrightText } = footer;
  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[195px] px-[2%]">
      <div
        className="h-full flex flex-col md:flex-row justify-around lg:justify-between items-center lg:pb-12 lg:items-end"
        data-aos="fade-up"
        data-aso-delay="200"
      >
        {/* logo */}
        <a href="#">
          <img src={logo} alt="logo" />
        </a>

        {/* copyright */}
        <p className="text-neutral-300 text-sm">
          {year} {copyrightText}
        </p>

        {/* me */}
        <p className="text-neutral-300 text-sm">
          Created by
          <a
            href="https://github.com/SignorPao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-200 transition"
          >
            @signorPao
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
