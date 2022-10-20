import React from "react";

// import navMobile data
import { nav } from "../data";

const NavMobile = ({ navMobile, click }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={`#${item.href}`}
                className="px-4 py-1 rounded-[1px] text-white hover:text-neutral-500 hover:bg-white text-body-md transition"
                onClick={click}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>

      {/* btns */}
      <div className="-mt-44 flex justify-center gap-x-8">
        <button className="btn btn-lg text-white hover:text-primary-200 transition">
          Log in
        </button>
        <button className="btn btn-lg text-white btn-primary">Sign up</button>
      </div>
    </nav>
  );
};

export default NavMobile;
