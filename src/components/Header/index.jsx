import React, { useCallback, useState, useRef, useEffect } from "react";
import logo from "../../assets/logo.svg";

import { FaShopify } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { IconContext } from "react-icons";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import { BaseLayoutSearch } from "../index";

const index = () => {
  const [searchClick, setSearchClick] = useState(false);
  const handleClickOutside = useCallback(() => setSearchClick(false));
  const ref = useOutsideClick(handleClickOutside);
  const handleHeaderClick = useCallback((event) => event.stopPropagation());
  const handleSearchClick = useCallback(() => setSearchClick(true));

  return (
    <div
      className="w-full flex  max-[1024px]:shadow  max-[1024px]:h-[60px] p-[20px] h-[80px] bg-white 
       fixed left-0 top-0 z-10 "
    >
      <div className="flex items-center justify-center text-xl flex-1 grow-[2]  ">
        <img
          src={logo}
          alt=""
          className="cursor-pointer max-[1024px]:hidden "
        />
        <div className="flex w-full flex-col items-start max-[1024px]:inherit  relative">
          <div
            className="flex items-center bg-[#f0f0f1] rounded-[10px] w-[70%] px-[20px] 
                                py-[5px] mr-[20px] max-[1024px]:w-[100%] max-[1024px]:mr-0"
          >
            <IconContext.Provider value={{ color: "#a5a5a8", size: "1.5em" }}>
              <RiSearchLine />
            </IconContext.Provider>

            <input
              className="flex text-[#242424] border-0 bg-transparent p-[6px] flex-1"
              ref={ref}
              type="text"
              id="search"
              placeholder="جستجو"
              onClick={handleSearchClick}
            />
          </div>
          {searchClick && (
            <BaseLayoutSearch
              handleHeaderClick={handleHeaderClick}
              handleClickOutside={handleClickOutside}
            />
          )}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end max-[1024px]:hidden  ">
        <a
          className="flex py-[8px] px-5 rounded-[10px] 
                      cursor-pointer border-[1px] border-solid
                          border-[#e0e0e2]"
        >
          <IconContext.Provider
            value={{
              color: "#424751",
              size: "2.5em",
              style: { marginLeft: "10px", marginRight: "10px" },
            }}
          >
            <HiOutlineLogin />
          </IconContext.Provider>
          <p className="text-xl p-1 text-[#424751] font-semibold">
            {" "}
            ورود | ثبت‌نام{" "}
          </p>
        </a>
        <span className="block w-[1px] px-0 pt-[5px] pb-[20px] bg-[#f0f0f1] ml-[12px] mr-[12px] "></span>
        <a className="cursor-pointer">
          <IconContext.Provider value={{ color: "#a5a5a8", size: "3em" }}>
            <FaShopify />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
};

export default index;
