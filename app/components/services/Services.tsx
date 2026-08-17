import Image from "next/image";
import Slider from "../global/Slider";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="container px-4 pb-4 pt-10  lg:px-[70px] lg:pb-9 lg:pt-[116px] relative rounded-[50px] overflow-hidden">
      <Image
        src={"/assets/service-bg.png"}
        alt={""}
        width={1440}
        height={878}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="flex justify-between relative z-30 gap-4 sm:gap-8 mb-6 sm:mb-10 lg:mb-[96px]">
        <h1 className="text-secondary text-48 font-semibold">
          My <span className="text-primary">Services</span>
        </h1>
        <p className="text-20-16 text-secondary flex-1 max-w-[576px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales{" "}
        </p>
      </div>
      <Slider
        slidesPerView={1.2}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        <ServiceCard
          link="#"
          title="UI/ UX Design"
          image="/assets/service-1.png"
        />
        <ServiceCard
          link="#"
          title="Web Design"
          image="/assets/service-2.png"
        />
        <ServiceCard
          link="#"
          title="Landing Page"
          image="/assets/service-3.png"
        />
        <ServiceCard
          link="#"
          title="UI/ UX Design"
          image="/assets/service-1.png"
        />
        <ServiceCard
          link="#"
          title="Web Design"
          image="/assets/service-2.png"
        />
        <ServiceCard
          link="#"
          title="Landing Page"
          image="/assets/service-3.png"
        />
      </Slider>
    </div>
  );
}

export default Services;
