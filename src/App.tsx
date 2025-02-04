import AppGallery from "./components/DownloadButtons/AppGallery";
import AppStoreButton from "./components/DownloadButtons/AppStoreButton";
import GooglePlayButton from "./components/DownloadButtons/GooglePlayButton";
import RuStoreButton from "./components/DownloadButtons/RuStoreButton";

function App() {
  return (
    <main className="h-dvh">
      <div className="relative flex size-full flex-col items-center justify-center bg-blue-500 bg-[url('/img/bg_0_mobile.svg')] bg-cover md:bg-[url('/img/bg_0_desktop.svg')]">
        <img
          className="pointer-events-none absolute top-0 left-0 w-[40vw]"
          src="/img/head.png"
          alt="Head Wave"
        />
        <img
          className="pointer-events-none absolute top-20 right-20 w-[12vw]"
          src="/img/smile.svg"
          alt="Smile Face"
        />
        <img
          className="pointer-events-none absolute top-0 right-0 w-full"
          src="/img/stars.svg"
          alt="Stars"
        />
        <div className="space-y-8">
          <img className="mx-auto" src="/img/logo.svg" alt="Logo DFM" />
          <img
            className="mx-auto w-44 bg-white"
            src="/img/qr.svg"
            alt="QR-code"
          />
          <div className="grid grid-cols-2 gap-4 px-8">
            <GooglePlayButton />
            <AppStoreButton />
            <AppGallery />
            <RuStoreButton />
          </div>
          <p className="font-mazzardH absolute bottom-3 left-1/2 -translate-x-1/2 text-center font-bold text-white uppercase">
            Скачай приложение по ссылке
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
