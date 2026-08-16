import Image from "next/image";

function Hero() {
  return (
    <div className="w-full px-4 ">
      <div className="w-full max-w-[1298px] mx-auto pt-14  relative">
        <h1 className="mb-2.5 w-fit mx-auto relative rounded-full border border-background text-heading text-20 px-6 py-2.5">
          Hello!
          <Image
            src={"/assets/icons/vector-1.svg"}
            alt={""}
            width={28}
            height={28}
            className="absolute -top-6 -right-6 "
          />
        </h1>
        <h2 className=" mb-[70px] text-96 text-center text-heading font-semibold font-urbanist relative w-fit mx-auto">
          I’m <span className="text-primary">Jenny</span>,
          <br />
          Product Designer
          <Image
            src={"/assets/icons/vector-2.svg"}
            alt={""}
            width={71}
            height={74}
            className="absolute -bottom-[60px] -left-[60px] "
          />
        </h2>
        <div className="flex justify-between w-full ">
          <div className="max-w-[163px] md:max-w-[298px]">
            <Image
              src={"/assets/icons/quote-up.svg"}
              alt={""}
              width={36}
              height={36}
              className="mb-6"
            />
            <p className="font-medium text-body text-20-12 ">
              Jenny’s Exceptional product design ensure our website’s success.
              Highly Recommended
            </p>
          </div>

          <div className="">
            <div className="flex gap-1.5 mb-2 sm:mb-5">
              <Image
                src={"/assets/icons/star.svg"}
                alt={""}
                width={26}
                height={26}
                className="w-[18px] h-[18px] md:w-[26px] md:h-[26px]"
              />{" "}
              <Image
                src={"/assets/icons/star.svg"}
                alt={""}
                width={26}
                height={26}
                className="w-[18px] h-[18px] md:w-[26px] md:h-[26px]"
              />{" "}
              <Image
                src={"/assets/icons/star.svg"}
                alt={""}
                width={26}
                height={26}
                className="w-[18px] h-[18px] md:w-[26px] md:h-[26px]"
              />{" "}
              <Image
                src={"/assets/icons/star.svg"}
                alt={""}
                width={26}
                height={26}
                className="w-[18px] h-[18px] md:w-[26px] md:h-[26px]"
              />{" "}
              <Image
                src={"/assets/icons/star.svg"}
                alt={""}
                width={26}
                height={26}
                className="w-[18px] h-[18px] md:w-[26px] md:h-[26px]"
              />
            </div>
            <h1 className="text-right text-47 text-heading font-bold ">
              10 Years
            </h1>
            <h2 className="text-right  text-heading text-20-10 ">Experince </h2>
          </div>
        </div>
        <div className="relative lg:-mt-11 ">
          <div className="w-full max-w-[810px] mx-auto relative  aspect-[2/1] overflow-hidden">
            <div className="w-full aspect-square rounded-full bg-[#FEB273] mx-auto"></div>
          </div>
          <Image
            src={"/assets/image.png"}
            alt=""
            width={952}
            height={636}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
