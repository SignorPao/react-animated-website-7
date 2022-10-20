import React from "react";

// import join data
import { join } from "../data";

const Join = () => {
  // destructure join data
  const { image, title, subtitle, btnText } = join;
  return (
    <section className="bg-neutral-500 min-h-[537px]">
      <div className="container mx-auto lg:px-[135px]">
        {/* image, text wrapper */}
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0">
          {/* image */}
          <div
            className="-mt-[60px] lg:-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <img src={image} alt="join" />
          </div>

          {/* text */}
          <div
            className="max-w-[350px] px-[20px] lg:px-0"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <h2 className="h1 text-white md:text-[60px] md:leading-[62px] mb-4 lg:mb-6 lg:w-[500px] 2xl:w-[800px]">
              Wanna join <span className="text-primary-200">&</span> have fun?
            </h2>
            <p className="text-body-sm md:text-body-md text-white mb-4 lg:mb-6 max-w-[348px] md:max-w-[500px] lg:w-[500px] 2xl:min-w-[800px]">
              {subtitle}
            </p>
            <button className="btn btn-secondary btn-lg">{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
