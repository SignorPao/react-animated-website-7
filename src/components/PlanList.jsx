import React, { useState } from "react";

// import icons
import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  // index state
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1100px] mx-auto gap-y-4">
      {plans.map((plan, currentIndex) => {
        // destructure plan
        const { name, price, list, delay } = plan;

        return (
          <div
            key={currentIndex}
            className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[400px]"
            onClick={() => setIndex(currentIndex)}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
          >
            <div
              className={`${
                currentIndex === index
                  ? "bg-neutral-500 text-white scale-105"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex justify-center items-center p-[20px] lg:min-h-[400px] transition duration-100`}
            >
              <div className="flex flex-col gap-x-8 gap-y-4 lg:gap-x-0 items-center">
                {/* name, price wrapper */}
                <div>
                  {/* name */}
                  <div
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "bg-neutral-500 text-white"
                    } h-[26px] font-primary text-sm font-semibold min-w-min mx-auto px-[14px] flex items-center justify-center mb-6`}
                  >
                    {name}
                  </div>

                  {/* price */}
                  <div className="text-[30px] lg:text-[40px] font-primary font-extrabold text-center flex flex-col justify-center items-center">
                    <div className="leading-none">
                      <span className="tracking-[0.1px]">{price}</span>
                      <span className="text-[30px] font-extrabold">$</span>
                    </div>
                    <span className="text-sm font-medium">/month</span>
                  </div>
                </div>

                {/* list, btn wrapper */}
                <div>
                  {/* list */}
                  <ul className="flex flex-col gap-y-2 mb-8">
                    {list.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center gap-x-[10px]"
                        >
                          <BsCheckCircleFill className="text-lg" />
                          <div>{item.name}</div>
                        </li>
                      );
                    })}
                  </ul>

                  {/* btn */}
                  <button
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "border border-neutral-500"
                    } btn btn-lg rounded-[2px] mx-auto`}
                  >
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
