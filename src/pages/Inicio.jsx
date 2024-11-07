function Inicio() {
  return (
    <div className="relative w-full h-auto">
      {/* Vídeo de fundo */}
      <video
        className="w-full h-auto"
        src="/public/videoinicio.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
      />

      {/* Texto sobre o vídeo */}
      <div className="absolute inset-0 flex items-center justify-center z-10 flex-col ">
        <h1 className="text-white text-4xl font-bold text-center bg-red-950/50 px-4 py-2 rounded">
          Igreja Assembéia de Deus em Carajás
        </h1>
        <h2 className="text-white text-4xl font-bold text-center bg-red-950/50 px-4 py-2 rounded mt-2">
          Há 42 Anos Semando o Amor
        </h2>
      </div>
    </div>
    // <video
    //   className="w-full h-auto max-w-full border-none dark:border-gray-700"
    //   src="/videoinicio.mp4"
    //   type="video/mp4"
    //   autoPlay
    //   loop
    //   muted
    // ></video>
  );
}

export default Inicio;

// <div>
// <img src="/imginicio.jpg"></img>
// </div>
