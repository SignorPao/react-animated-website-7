import React from "react";

// import about data
import { about } from "../data";

// import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  // destructure about data
  const { icon, title, subtitle1, subtitle2, link } = about;

  return (
    <section id="about" className="section">
      <div className="container mx-auto px-[20px] lg:px-[135px] 2xl:px-[300px]">
        {/* section title */}
        <div
          className="section-title-group justify-start"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src={icon} alt="icon" />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>

        {/* subtitle 1 */}
        <p
          className="md:text-body-md mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle1}
        </p>

        {/* subtitle 2 */}
        <p
          className="md:text-body-md mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {subtitle2}
        </p>

        {/* link */}
        <div className="inline-block" data-aos="fade-up" data-aos-delay="400">
          <a
            href="#!"
            className="link flex items-center gap-x-2 hover:gap-x-4 transition-all"
          >
            {link} <IoIosArrowDroprightCircle className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
