import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

export default function SecondScreen() {
  const texts = [
    "Новый DFM",
    "Цифровые станции",
    "Музыкальные миксы",
    "Подкасты",
    "Музыкальный чарт",
    "Новинки",
    "Новости",
    "Дизайн на любой вкус",
    "Дизайн на любой вкус",
  ];
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [phoneActiveSlide, setPhoneActiveSlide] = useState<number>(0);
  const phoneSwiper = useRef<null | SwiperRef>(null);

  useEffect(() => {
    if (!phoneSwiper.current) return;
    phoneSwiper.current.swiper.slideTo(activeSlide + 2);
  }, [activeSlide]);

  return (
    <div className="relative size-full bg-[#FF00FF] bg-cover bg-left-top md:bg-[url('../img/bg/bg_1_desktop.svg')]">
      <Swiper
        className="size-full"
        direction="vertical"
        modules={[Mousewheel]}
        mousewheel
        nested
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {[...Array(texts.length).keys()].map((i) => (
          <SwiperSlide key={i} />
        ))}
      </Swiper>
      <div className="pointer-events-none absolute top-0 left-0 size-full">
        <AnimatePresence mode="wait">
          <motion.h2
            className="font-arimo block h-44 px-4 pt-6 text-center text-3xl font-bold text-white uppercase md:text-6xl"
            key={texts[activeSlide]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {texts[activeSlide]}
          </motion.h2>
        </AnimatePresence>
        <p className="font-rhythmic absolute top-22 left-1/2 -translate-x-1/2 -rotate-4 text-9xl text-[#FEDA3A]">
          Dance
          <br /> Radio
        </p>
        <Swiper
          style={{ overflow: "visible" }}
          ref={phoneSwiper}
          initialSlide={2}
          slidesPerView={1.25}
          breakpoints={{
            480: {
              slidesPerView: 2.25,
            },
            720: {
              slidesPerView: 3.5,
            },
            1200: {
              slidesPerView: 3.75,
            },
            1750: {
              slidesPerView: 4.25,
            },
          }}
          centeredSlides
          spaceBetween={32}
          onSlideChange={(swiper) => setPhoneActiveSlide(swiper.activeIndex)}
        >
          {[...Array(11).keys()].map((i) => (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                key={`phone_${i}`}
                src={`img/phones/phone_${i}.png`}
                className="transition-all"
                style={{
                  transform: `translateY(${phoneActiveSlide === i ? -16 : 0}px)`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
