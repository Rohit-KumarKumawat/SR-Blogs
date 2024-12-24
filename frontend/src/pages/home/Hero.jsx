import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Img1 from "../../assets/hero-carousel/img1.jpg";
import Img2 from "../../assets/hero-carousel/img2.jpg";
import Img3 from "../../assets/hero-carousel/img3.jpg";
import Img4 from "../../assets/hero-carousel/img4.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8">
      <div className="md:w-1/2 w-full text-center">
        <h1 className="md:text-5xl text-3xl font-bold md:leading-tight">
          Welcome to SR Blogs
        </h1>
        <h2 className="md:text-3xl text-2xl font-bold md:leading-tight text-blue-500">
          Explore, Learn, Innovate
        </h2>
        <p className="py-4">
          Discover a world of innovation and technology. Dive into expert
          insights, tutorials, and trends that keep you ahead in the
          ever-evolving tech landscape.
          <br />
          From coding tips to the latest tech breakthroughs, our blogs are your
          ultimate resource for navigating the digital world with confidence.
        </p>
      </div>

      <div className="md:w-1/2 w-full mx-auto bg-black">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className=""
        >
          <SwiperSlide>
            <img
              src={Img1}
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img2}
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img3}
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img4}
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
