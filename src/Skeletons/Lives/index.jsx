export default function index({ count }) {
  return (
    <div
      className="w-full h-[200px] flex-row  flex mt-[120px] 
                  max-[1024px]:mt-[72px] overflow-hidden"
    >
      {Array.from({ length: count }, (_, i) => i + 1).map((num) => (
        <div
          className="p-[10px] cursor-pointer w-[105px] flex flex-col items-center "
          key={num}
        >
          <div
            className=" bg-gray-500
                            w-[100px]  h-[100px] rounded-[100px] 
                            bg-[linear-gradient(90deg,_#e8e8e8_0px,_#f8f8f8_40px,_#e8e8e8_80px)] 
                            animate-[animation_3.5s_infinite]"
          ></div>
          <div
            className=" bg-gray-500 rounded mt-1 h-6  w-full 
                            bg-[linear-gradient(90deg,_#e8e8e8_0px,_#f8f8f8_40px,_#e8e8e8_80px)] 
                            animate-[animation_3.5s_infinite]"
          ></div>
          <div
            className=" bg-gray-500 rounded mt-1 h-6 w-2/3 m-auto 
                        bg-[linear-gradient(90deg,_#e8e8e8_0px,_#f8f8f8_40px,_#e8e8e8_80px)] 
                        animate-[animation_3.5s_infinite]"
          ></div>
        </div>
      ))}
    </div>
  );
}
