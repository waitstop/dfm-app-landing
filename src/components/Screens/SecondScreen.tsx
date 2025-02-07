import type { MotionValue } from "motion/react";
import { motion, useMotionTemplate, useTransform } from "motion/react";

type Props = {
  progress: MotionValue<number>;
};
export default function SecondScreen({ progress }: Props) {
  const phonesLength = 5;
  const xPos = useTransform(
    progress,
    [0.25, 0.5],
    [0, (phonesLength - 1) * 100],
  );
  return (
    <div className="h-full bg-[#FF00FF] bg-cover bg-left-top md:bg-[url('../img/bg/bg_1_desktop.svg')]">
      <h2 className="font-mazzardH pt-6 text-center text-xl font-black text-white uppercase">
        Главный танцевальный
        <br /> чарт страны
      </h2>

      <p className="font-rhythmic mt-32 -rotate-5 text-center text-[40vw] leading-[28vw] text-yellow-300 md:mb-64 md:text-[10vw] md:leading-1">
        Dance <br className="md:hidden" />
        radio
      </p>

      <p className="font-arimo mt-32 mb-6 text-center text-5xl font-bold text-white uppercase md:hidden">
        Новый DFM
      </p>

      <motion.div className="relative w-full overflow-visible bg-blue-500">
        {[...Array(phonesLength).keys()].map((index) => (
          <motion.img
            key={index}
            viewport={{ amount: 1 }}
            src={`img/phones/phone_${index}.png`}
            className="absolute top-0 left-1/2"
            style={{
              x: useMotionTemplate`calc(${-100 * (index + 1)}% + (50% - ${(32 * index).toString()}px) + ${xPos}%)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
