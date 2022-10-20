import React from "react";

// import nav data
import { nav } from "../data";

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex text-white gap-x-4">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={`#${item.href}`}
                className="px-4 py-1 rounded-[1px] hover:text-neutral-500 hover:bg-white font-semibold transition"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
