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

function App() {
  return (
    <main className="h-dvh">
      <Swiper
        className="h-full"
        direction="vertical"
        modules={[Mousewheel]}
        mousewheel
      >
        <SwiperSlide>
          <FirstScreen />
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 50 }}>
          <SecondScreen />
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
