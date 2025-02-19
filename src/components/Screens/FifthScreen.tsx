import {
  GooglePlayButton,
  AppGallery,
  AppStoreButton,
  RuStoreButton,
} from "@/components/DownloadButtons";

export default function FifthScreen() {
  return (
    <div className="flex h-full items-center justify-center bg-[#007FFF] bg-[url('../img/bg/bg_4_mobile.svg')] bg-contain bg-left-bottom bg-no-repeat">
      <div>
        <h2 className="font-mazzardH pt-6 text-center text-xl font-bold text-white uppercase">
          Слушай, загружай, делись
        </h2>
        <div className="relative mt-6 space-y-6">
          <p className="font-mazzardH text-center font-bold text-white uppercase">
            Скачай приложение по ссылке
          </p>
          <img
            src="img/qr.png"
            alt="QR"
            className="pixelated relative z-50 mx-auto hidden w-2/3 bg-white md:block"
          />
          <div className="relative z-50 grid max-w-[300px] grid-cols-2 gap-3 px-6 md:max-w-[500px]">
            <GooglePlayButton />
            <AppStoreButton />
            <AppGallery />
            <RuStoreButton />
          </div>
          <img
            className="absolute top-0 left-0 md:-top-1/2 md:-left-32"
            src="img/decorations/bolts_left.png"
            alt="Bolts Left"
          />
          <img
            className="absolute top-0 right-0 md:-top-1/2 md:-right-32"
            src="img/decorations/bolts_right.png"
            alt="Bolts Right"
          />
        </div>
      </div>
    </div>
  );
}
