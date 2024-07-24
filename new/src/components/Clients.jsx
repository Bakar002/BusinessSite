import map from "../assets/map.svg";
import user from "../assets/images/user.png";
import Tesmonial from "./UI/Tesmonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

function Clients() {
  return (
    <div className="bg-[rgba(0,0,0,1)] relative w-full min-h-[846px] ">
      <div className="container relative mx-auto w-full h-full">
        <img
          src={map}
          alt="map"
          className="w-[1100px] h-[374px] absolute top-[200px] left-[130px] 2xl:left-[170px]"
        />
        <div className="">
          <p className="uppercase text-center text-[20px] tracking-[6px] text-[rgba(224,224,224,1)]">
            Testimonials
          </p>
          <h1
            style={{ fontFamily: "clashMedium" }}
            className="text-gradient text-[35px] md:text-[62px] leading-[45px] mt-4 md:leading-[76px] text-center"
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
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          initialSlide={1} // Set initial slide to the second slide
        >
          {arr.map((data) => (
            <SwiperSlide key={data.id} className="pb-[10px]">
              <Tesmonial
                user={data.userPic}
                name={data.name}
                title={data.title}
                comment={data.comment}
                desc={data.desc}
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
      "“This platform helped me increase my sales and revenue. They’re really awesome.",
    desc: "“This platform helped me increase my sales and revenue. They’re really awesome.“This platform helped me increase my sales and revenue. They’re really awesome.",
    userPic: user,
    name: "Mervin Agera",
    title: "Digilligence",
  },
  {
    id: 2,
    comment:
      "“This platform helped me increase my sales and revenue. They’re really awesome.",
    desc: "“This platform helped me increase my sales and revenue. They’re really awesome.“This platform helped me increase my sales and revenue. They’re really awesome.",
    userPic: user,
    name: "Mervin Agera",
    title: "Digilligence",
  },
  {
    id: 3,
    comment:
      "“This platform helped me increase my sales and revenue. They’re really awesome.",
    desc: "“This platform helped me increase my sales and revenue. They’re really awesome.“This platform helped me increase my sales and revenue. They’re really awesome.",
    userPic: user,
    name: "Mervin Agera",
    title: "Digilligence",
  },
  {
    id: 4,
    comment:
      "“This platform helped me increase my sales and revenue. They’re really awesome.",
    desc: "“This platform helped me increase my sales and revenue. They’re really awesome.“This platform helped me increase my sales and revenue. They’re really awesome.",
    userPic: user,
    name: "Mervin Agera",
    title: "Digilligence",
  },
  {
    id: 5,
    comment:
      "“This platform helped me increase my sales and revenue. They’re really awesome.",
    desc: "“This platform helped me increase my sales and revenue. They’re really awesome.“This platform helped me increase my sales and revenue. They’re really awesome.",
    userPic: user,
    name: "Mervin Agera",
    title: "Digilligence",
  },
];
