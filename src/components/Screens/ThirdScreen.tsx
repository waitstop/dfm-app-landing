export default function ThirdScreen() {
  return (
    <div className="relative h-full bg-[url('../img/bg/bg_2_mobile.svg')] bg-cover bg-left-bottom md:bg-[url('../img/bg/bg_2_desktop.svg')]">
      <img
        className="absolute top-16 -left-46 md:hidden"
        src="img/decorations/human_mobile.svg"
        alt="Human"
      />
      <img
        className="hidden h-full -translate-y-32 md:block"
        src="img/decorations/human_desktop.svg"
        alt="Human"
      />
      <img
        className="absolute top-6 right-6 w-64 md:hidden"
        src="img/decorations/woman_head_mobile.png"
        alt="Head"
      />
      <img
        className="absolute right-6 bottom-16 hidden w-128 md:block"
        src="img/decorations/woman_head_desktop.png"
        alt="Head"
      />
      <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2">
        <h2 className="font-mazzardH mb-6 text-center text-3xl font-bold text-neutral-800 uppercase md:text-4xl">
          Лучшие ремиксы
        </h2>
        <p className="font-rhythmic scale-[1.05] -rotate-6 text-center text-7xl text-white md:text-8xl">
          <span className="text-9xl md:text-8xl">Треки</span>
          <br className="md:hidden" /> и диджеи
        </p>
      </div>
    </div>
  );
}
