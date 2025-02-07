import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
// @ts-expect-error
import "swiper/css/bundle";
import {
  FifthScreen,
  FirstScreen,
  FourthScreen,
  SecondScreen,
  ThirdScreen,
} from "@/components/Screens";
import { useSpring } from "motion/react";

function App() {
  const progress = useSpring(0, { bounce: 0, mass: 0.1 });
  progress.on("change", (v) => console.log(v));
  return (
    <main className="h-dvh">
      <Swiper
        className="h-full"
        direction="vertical"
        modules={[Mousewheel]}
        mousewheel
        onProgress={(_, v) => progress.set(v)}
      >
        <SwiperSlide>
          <FirstScreen />
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 50 }}>
          <SecondScreen progress={progress} />
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 49 }}>
          <ThirdScreen />
        </SwiperSlide>
        <SwiperSlide>
          <FourthScreen />
        </SwiperSlide>
        <SwiperSlide>
          <FifthScreen />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

export default App;
