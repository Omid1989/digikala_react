import React from "react";

import { IconContext } from "react-icons";
import { MdOutlineArrowBackIos } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { RiFireLine } from "react-icons/ri";

const index = ({ trends, TrendsClick }) => {
  return (
    <>
      <div className="flex w-full justify-around m-[6px]">
        <div className="w-full flex items-center px-[5px] py-[10px]">
          <IconContext.Provider value={{ color: "#a5a5a8", size: "1.5em" }}>
            <RiFireLine />
          </IconContext.Provider>
          <span className="mr-[5px]">جستجوهای پرطرفدار</span>
        </div>
      </div>
      <div className="w-full flex pr-[9px] overflow-x-auto touch-pan-y">
        <Swiper
          spaceBetween={1}
          slidesPerView={"auto"}
          className="mx-0 relative overflow-hidden p-0 z-[1] block list-none "
        >
          {trends?.map((item, index) => (
            <SwiperSlide key={index} className="w-auto h-auto">
              <a
                className="px-[10px] py-[14px] flex items-center rounded-[72px]
                                                       text-[#3f4066]  mr-[8px] flex-shrink-0 cursor-pointer
                                                        border-[1px] border-solid border-[#d9d9dd]"
                onClick={() => TrendsClick(item)}
              >
                <span>{item.keyword}</span>
                <IconContext.Provider
                  value={{
                    color: "#a5a5a8",
                    size: "1.5em",
                    style: { marginRight: "10px" },
                  }}
                >
                  <MdOutlineArrowBackIos />
                </IconContext.Provider>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default React.memo(index);
