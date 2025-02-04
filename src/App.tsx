import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
// @ts-expect-error
import "swiper/css/bundle";
import { FirstScreen } from "@/components/Screens";

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
        <SwiperSlide>
          <h1>test</h1>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

export default App;
