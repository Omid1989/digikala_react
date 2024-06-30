import { useRef, useState, useEffect } from "react";
import { DataMenu } from "../../db/Data";
import { TfiLocationPin } from "react-icons/tfi";
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";
import { useMediaQueries } from "../../hooks/useMediaQueries";

const initialState = {
  offsetWidth: 0,
  offsetTop: 0,
  offsetLeft: 0,
  offsetHeight: 0,
  height: 0,
};
const index = () => {
  const { md } = useMediaQueries("(max-width:  1279px)");
  const navbar = useRef();
  const handleScroll = () => {
    if (window.scrollY && window.scrollY >= 204) {
      if (navbar.current != null) {
        navbar.current.style.transitionDuration = "300ms";
        navbar.current.style.top = "-50px";
        navbar.current.style.zIndex = -4;
      }
    } else {
      if (navbar.current != null) {
        navbar.current.style.top = "0px";
        navbar.current.style.zIndex = 4;
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [offsetitem, setoffsetitem] = useState(initialState);
  const handleMouseEnter = (event) => {
    const element = event.currentTarget;
    setoffsetitem({
      offsetWidth: element.offsetWidth,
      offsetTop: element.offsetTop,
      offsetLeft: element.offsetLeft,
      offsetHeight: element.offsetHeight,
      height: element.offsetHeight + element.offsetTop,
    });
  };
  const handleMouseLeave = () => {
    setoffsetitem({
      ...offsetitem,
      offsetWidth: 0,
    });
  };
  return (
    <div
      className="max-[1024px]:hidden flex h-[40px] fixed top-0 left-0 w-full
                       bg-white z-[2] mt-[75px] shadow justify-between "
      ref={navbar}
    >
      <div className="flex  flex-wrap px-[10px]">
        <div className="flex justify-between overflow-hidden px-[5px] text-lg flex-wrap ">
          <a
            href=""
            className="text-2xl font-bold no-underline text-[#404166] flex flex-row 
                           items-center text-left"
          >
            <IconContext.Provider
              value={{
                color: "#404166",
                size: "1.5em",
                style: {
                  marginLeft: "5px",
                },
              }}
            >
              <HiMenu />
            </IconContext.Provider>
            <span>دسته‌بندی کالاها</span>
          </a>
        </div>
        <span
          className="block w-[1px] px-0 pt-[5px] pb-[20px] bg-[#f0f0f1] ml-[12px] mr-[12px] h-[40%] max-[1109px]:mr-[5px]
          max-[1109px]:ml-[5px]
                                 my-auto "
        ></span>
        {DataMenu.map(({ title, icon }, index) => {
          if (md && index === 4) return;
          return (
            <div
              key={index}
              className="flex justify-between overflow-hidden px-[5px] pl-[15px] max-[1225px]:pl-[8px]
                                      text-lg flex-wrap"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href=""
                className="text-[13px] no-underline text-gray-600 flex flex-row 
                                       items-center text-left"
              >
                {icon}
                {title}
              </a>
            </div>
          );
        })}
        <div
          className="absolute w-[10px] opacity-0 h-[2px] rounded-t-lg bg-[#dc1515]
                                transition-all duration-200 ease-in-out"
          style={{
            width: offsetitem.offsetWidth,
            left: offsetitem.offsetLeft,
            top: offsetitem.height,
            opacity: 1,
          }}
        ></div>
      </div>
      <div className="flex  flex-wrap justify-start">
        <div>
          <a
            href=""
            className="no-underline text-[#5e6168] p-[9px] flex items-center text-lg"
          >
            <IconContext.Provider
              value={{ color: "#a5a5a8", size: "2em", margin_left: "10px" }}
            >
              <TfiLocationPin />
            </IconContext.Provider>
            لطفا شهر خود را انتخاب کنید
          </a>
        </div>
      </div>
    </div>
  );
};
export default index;
