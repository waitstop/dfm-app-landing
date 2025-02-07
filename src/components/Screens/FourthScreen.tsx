export default function FourthScreen() {
  return (
    <div className="relative h-full bg-[url('../img/bg/bg_3_mobile.svg')] bg-cover bg-left-top md:bg-[url('../img/bg/bg_3_desktop.svg')]">
      <img
        className="1relative z-10 mx-auto w-[70vw] max-w-[500px] pt-6"
        src="img/logo_black.png"
        alt="Logo"
      />
      <img
        className="absolute top-[25vh] right-6 w-[40vw] max-w-[250px]"
        src="img/decorations/record.png"
        alt="Record"
      />
      <div className="absolute bottom-6 left-0 w-full">
        <div className="relative">
          <img
            className="relative z-50 mx-auto w-full max-w-[500px]"
            src="img/decorations/hand.png"
            alt="Hand"
          />
          {/* <img
            className="absolute -top-1/2 -left-[60vw] max-w-[300px]"
            src="img/decorations/hand_wave.png"
            alt="Hand Wave"
          /> */}
        </div>
      </div>
      <img
        className="absolute top-[5vh] left-0 w-full"
        src="img/decorations/stars.png"
        alt="Stars"
      />
    </div>
  );
}
