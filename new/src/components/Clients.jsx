import React from "react";
import map from "../assets/map.svg";
import user from "../assets/images/user.png";
import Tesmonial from "./UI/Tesmonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

function Clients() {
  return (
    <div className="bg-[rgba(0,0,0,1)] relative w-full min-h-[400px]">
      <div className="container relative mx-auto w-full h-full">
        <img
          src={map}
          alt="map"
          className="w-[1100px] h-[374px] absolute top-[200px] left-[130px] 2xl:left-[170px]"
        />
<div className="p-10 xs:p-10 md:p-0">

  <p className="uppercase text-center text-[16px] sm:text-[20px] tracking-[6px] text-[rgba(224,224,224,1)]">
    Testimonials
  </p>
  <h1
    style={{ fontFamily: "clashMedium" }}
    className="text-gradient text-[24px] sm:text-[35px] md:text-[62px] leading-[30px] sm:leading-[45px] md:leading-[76px] mt-4 text-center"
  >
    Don’t take our word for it. Here are the people who trust us.
  </h1>
</div>

        <Swiper
          slidesPerView={1.3}
          spaceBetween={25}
          centeredSlides={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
          initialSlide={0}
        >
          {arr.map((data) => (
            <SwiperSlide key={data.id} className="pb-[10px] max-sm:h-fit">
              <Tesmonial
                user={data.userPic}
                name={data.name}
                title={data.title}
                comment={data.comment}
                desc={data.desc}
                titleSize={data.titleSize}
                commentSize={data.commentSize}
                descSize={data.descSize}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Clients;

const arr = [
  {
    id: 1,
    comment:
      "As a startup founder, choosing Shellcode for our mobile app development in Pune was a game-changer. Their expertise in Android development ensured our app was not only functional but also scalable and secure. Highly recommend Shellcode for anyone looking to build a robust mobile solution.",
    userPic: user,
    name: "Abhijit Jadhav",
    title: "Pehul Hotel Bookings App",
    titleSize: "text-[18px] md:text-[22px] ",
    commentSize: "text-[18px] md:text-[22px] max-sm:text-[20px]",
    descSize: "text-[12px] md:text-[14px]",
  },
  {
    id: 2,
    comment:
      "Shellcode is not just an app development agency in Pune but also a competent web design and development company. They ensured our app integrated seamlessly with our website.",
    userPic: user,
    name: "Parvej Shaikh",
    title: "No Title Provided", // Fixed missing title
    titleSize: "text-[18px] md:text-[22px]",
    commentSize: "text-[18px] md:text-[22px] max-sm:text-[25px]",
    descSize: "text-[12px] md:text-[14px]",
  },
  {
    id: 3,
    comment:
      "We opted for Shellcode, a mobile app development company in Pune, for a high-scale project. While they managed it well, communication could have been clearer.",
    userPic: user,
    name: "Akshay Dinge",
    title: "Car Service App",
    titleSize: "text-[18px] md:text-[22px]",
    commentSize: "text-[18px] md:text-[22px] max-sm:text-[25px]",
    descSize: "text-[12px] md:text-[14px]",
  },
  {
    id: 4,
    comment:
      "One of the best app developers near Pune. Working since 2 years and they are best in work as well as support. Their work is professional and will help you get the best app. Just give them time and you'll come to know why they are best. Harshal sir will help you even on holiday in case of emergencies. Our business is growing exponentially with the help of the app made by them. Don't think just go for them.",
    userPic: user,
    name: "Pranav Dhamal",
    title: "ICSE E-Book App",
    titleSize: "text-[18px] md:text-[22px]",
    commentSize: "text-[18px] md:text-[22px] max-sm:text-[19px]",
    descSize: "text-[12px] md:text-[14px]",
  },
  {
    id: 5,
    comment:
      "Working with Shellcode Solutions has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support. They took the time to understand our unique needs and developed a tailored solution that exceeded our expectations. I cannot recommend Shellcode Solutions highly enough for any business seeking innovative software solutions and exceptional customer care.",
    userPic: user,
    name: "Ravindra Bansode",
    title: "Pass 11 App",
    titleSize: "text-[18px] md:text-[22px]",
    commentSize: "text-[16px] md:text-[22px] max-sm:text-[16px]",
    descSize: "text-[12px] md:text-[14px] ",
  },
  {
    id: 6,
    comment:
      "Shellcode's app development services in Pune exceeded our expectations. Their deep technical knowledge and attention to detail were evident throughout the project. While there were minor delays, their commitment to quality and technical proficiency stood out. Overall, Shellcode is a reliable choice for anyone seeking top-notch app development.",
    userPic: user,
    name: "Sarvesh",
    title: "Learn Era App",
    titleSize: "text-[18px] md:text-[22px]",
    commentSize: "text-[18px] md:text-[22px] max-sm:text-[19px]",
    descSize: "text-[12px] md:text-[14px]",
  },
];
