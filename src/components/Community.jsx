import React from "react";

// import community data
import { community } from "../data";

// import component
import CommunitySlider from "./CommunitySlider";

const Community = () => {
  // destructure community data
  const { icon, title, testimonials } = community;

  return (
    <section
      id="community"
      className="section pb-[450px] lg:pb-[100px] relative"
    >
      <div className="container mx-auto">
        <div className="flex">
          {/* section title */}
          <div
            className="section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <img src={icon} alt="icon" />
            <h2 className="h2 section-title">
              {title} <span className="text-primary-200">.</span>
            </h2>
          </div>

          {/* slider */}
          <div
            className="absolute -right-[375px] lg:-right-[280px] w-[1100px] top-60 lg:top-0"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="400"
          >
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
