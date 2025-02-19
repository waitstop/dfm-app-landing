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
      <h3 className="font-mazzardH absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center text-4xl text-white uppercase">
        Только лучшая музыка
      </h3>
    </div>
  );
}
