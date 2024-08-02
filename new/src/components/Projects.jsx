import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../assets/images/cat1.png";
import img2 from "../assets/images/cat2.png";
import img3 from "../assets/images/cat3.png";
import img4 from "../assets/images/cat4.png";
import img5 from "../assets/images/cat5.png";
import img6 from "../assets/images/cat6.png";

function Projects() {
  return (
    <div className="bg-gray-950 p-4">
      <div className="container mx-auto min-h-[400px] h-auto w-full pb-20 ">
        <h1
          style={{ fontFamily: "clashBold" }}
          className="uppercase pt-12 pl-6 text text-[rgba(255,255,255,1)] text-[50px] md:text-[76px] tracking-[4%]"
        >
          Latest Projects
        </h1>
        <div className="flex items-center justify-center gap-6 md:gap-0 flex-wrap mt-6 md:mt-20 md:justify-between">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <img
                src={img1}
                alt="Projects Images"
                className="w-auto h-auto md:w-[400px] md:h-[330px] 2xl:w-[472px] rounded-[30px] 2xl:h-[370px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                alt="Projects Images"
                className="w-auto h-auto md:w-[400px] md:h-[330px] 2xl:w-[472px] rounded-[30px] 2xl:h-[370px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                alt="Projects Images"
                className="w-auto h-auto md:w-[400px] md:h-[330px] 2xl:w-[472px] rounded-[30px] 2xl:h-[370px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img4}
                alt="Projects Images"
                className="w-auto h-auto md:w-[400px] md:h-[330px] 2xl:w-[472px] rounded-[30px] 2xl:h-[370px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img5}
                alt="Projects Images"
                className="w-auto h-auto md:w-[400px] md:h-[330px] 2xl:w-[472px] rounded-[30px] 2xl:h-[370px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img6}
                alt="Projects Images"
                className="w-auto h-auto md:w-[400px] md:h-[330px] 2xl:w-[472px] rounded-[30px] 2xl:h-[370px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projects;
