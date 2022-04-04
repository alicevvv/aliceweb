export default function Works() {
  return (
    <div className="w-screen h-screen min-h-[896px] md:min-h-[768px] bg-aurora bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center">
      <div className="w-4/5 md:w-2/3 flex row justify-start z-[100] mb-6">
        <button
          className="backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white border-2 border-white p-3 mr-3 rounded-full"
        >
          Web
        </button>
        <button
          className="backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white border-2 border-white p-3 rounded-full"
        >
          Design
        </button>
      </div>
      <div className="w-4/5 md:w-2/3 backdrop-blur-xl bg-white/10  border-white border-2 rounded-3xl z-[100]">
        <div className="h-full text-white text-lg font-bold md:text-home leading-10 align-middle px-12 py-12"></div>
      </div>
    </div>
  );
}
