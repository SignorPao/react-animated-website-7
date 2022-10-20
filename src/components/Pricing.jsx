import React from "react";

// import pricing data
import { pricing } from "../data";

// import component
import PlanList from "./PlanList";

const Pricing = () => {
  // destructure pricing data
  const { icon, title, plans } = pricing;

  return (
    <section id="pricing" className="section md:pb-[40px] lg:pb-[120px]">
      {/* section title */}
      <div
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <img src={icon} alt="icon" />
        <h2 className="h2">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>

      {/* plan list */}
      <PlanList plans={plans} />
    </section>
  );
};

export default Pricing;