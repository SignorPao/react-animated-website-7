import React from "react";

// import workouts data
import { workouts } from "../data";

// import swiper slider react
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../workoutSlider.css";

// import required modules
import { Navigation } from "swiper";

const WorkoutSlider = () => {
  // destructure workous data
  const { programs } = workouts;

  return (
    <Swiper
      slidesPerView={1.3}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 2.3,
        },
        1024: {
          slidesPerView: 3.3,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, index) => {
        // destructure program
        const { image, name } = program;

        return (
          <SwiperSlide
            key={index}
            className="max-w-[320px] max-h-[320px] relative"
          >
            <img
              src={image}
              alt="program"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[2px]">
              <div className="font-primary font-semibold text-sm text-neutral-500">
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
