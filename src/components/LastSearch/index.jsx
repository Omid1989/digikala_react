import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IconContext } from "react-icons";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
const index = ({ localstorage, RemoveLocalStorage }) => {
  return (
    localstorage.length > 0 && (
      <>
        <div className="flex w-full justify-around m-[6px]">
          <div className="w-full flex items-center px-[5px] py-[10px]">
            <IconContext.Provider value={{ color: "#a5a5a8", size: "1.5em" }}>
              <FaHistory />
            </IconContext.Provider>
            <span className="mr-[5px]">آخرین جستجوهای شما</span>
          </div>
          <div>
            <IconContext.Provider
              value={{
                color: "#a5a5a8",
                size: "2em",
                style: { marginTop: "10px", cursor: "pointer" },
              }}
            >
              <RiDeleteBin6Line onClick={RemoveLocalStorage} />
            </IconContext.Provider>
          </div>
        </div>
        <div className="w-full flex pr-[9px] overflow-x-auto touch-pan-y">
          <Swiper
            spaceBetween={1}
            slidesPerView={"auto"}
            className="mx-0 relative overflow-hidden p-0 z-[1] block list-none "
          >
            {localstorage.map((item, index) => (
              <SwiperSlide key={index} className="w-auto h-auto">
                <a
                  className="px-[10px] py-[14px] flex items-center rounded-[72px]
                                                       text-[#3f4066]  mr-[8px] flex-shrink-0 cursor-pointer
                                                        border-[1px] border-solid border-[#d9d9dd]"
                >
                  <span>{item.keyword}</span>
                  <IconContext.Provider
                    value={{
                      color: "#a5a5a8",
                      size: "1em",
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
        <div
          className="w-full p-b-[16px] border-b-[1px] border-solid
                                      border-b-[#eaeaec] h-[2px] "
        ></div>
      </>
    )
  );
};
export default React.memo(index);
