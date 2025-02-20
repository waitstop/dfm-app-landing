import {
  GooglePlayButton,
  AppGallery,
  AppStoreButton,
  RuStoreButton,
} from "@/components/DownloadButtons";

export default function FirstScreen() {
  return (
    <div className="relative flex size-full flex-col items-center justify-center bg-blue-500 bg-[url('../img/bg/bg_0_mobile.svg')] bg-cover bg-left-bottom md:bg-[url('../img/bg/bg_0_desktop.svg')]">
      <img
        className="pointer-events-none absolute top-0 left-0 w-[40vw] md:hidden"
        src="img/decorations/head_mobile.png"
        alt="Head Wave"
      />
      <img
        className="pointer-events-none absolute top-0 left-0 hidden w-[25vw] md:block"
        src="img/decorations/head_desktop.png"
        alt="Head Wave"
      />
      <img
        className="pointer-events-none absolute top-20 right-20 w-[12vw] md:top-[initial] md:bottom-10"
        src="img/decorations/smile.svg"
        alt="Smile Face"
      />
      <img
        className="pointer-events-none absolute top-0 right-0 w-full"
        src="img/decorations/stars.svg"
        alt="Stars"
      />
      <div className="z-50 flex h-full w-full flex-col items-center justify-center space-y-8 md:flex-row md:justify-evenly">
        <div className="mx-auto flex max-w-[250px] items-center md:mx-0 md:w-2/5">
          <img
            className="h-auto w-full"
            src="img/logo_white.png"
            alt="Logo DFM"
          />
        </div>
        <div className="space-y-8 md:w-2/6">
          <img
            className="pixelated mx-auto hidden w-2/3 bg-white md:block"
            src="img/qr.png"
            alt="QR-code"
          />
          <div className="grid grid-cols-2 gap-4 px-8">
            <GooglePlayButton />
            <AppStoreButton />
            <AppGallery />
            <RuStoreButton />
          </div>
          <p className="font-mazzardH text-center font-bold text-nowrap text-white uppercase">
            Скачай приложение по ссылке
          </p>
        </div>
      </div>
    </div>
  );
}
