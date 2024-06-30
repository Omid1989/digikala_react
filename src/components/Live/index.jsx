import React from "react";
const index = ({ data }) => {
  return (
    <div className="p-[10px] cursor-pointer w-[105px] ">
      <div className="relative">
        <div
          className="  rounded-[100px] p-[2px] flex flex-col content-center
         bg-gradient-to-br from-[#e03d96] to-[#7d4c9e]  "
        >
          <img
            src={data?.circle_cover}
            alt=""
            className="border-[2px] border-solid border-white w-full h-full rounded-[100px]  aspect-square"
          />
        </div>

        {data?.badge_text && (
          <div
            className="  text-[#e03e97] text-xl p-[3px]  bg-[#fdecf5] w-[50%] m-auto absolute bottom-[-8px] right-0 left-0
                       border-solid border-[2px] border-[#f9f6f6] rounded-[8px]  justify-center flex "
          >
            {data?.badge_text}
          </div>
        )}
      </div>
      <div
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
        className="  text-center leading-[2.17] text-[11px] text-[#22244d] pt-[7px] overflow-hidden"
      >
        {data?.title}
      </div>
    </div>
  );
};

export default React.memo(index);
