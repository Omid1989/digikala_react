import React, { useEffect } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Autocomplete, Categories, LastSearch, TrendsSearch } from "../index";

import { IconContext } from "react-icons";
import { RiSearchLine, RiCloseCircleFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { useAutoComplete } from "../../hooks/useAutoComplete";
import { useMediaQueries } from "../../hooks/useMediaQueries";

const IconMedia = ({ handleClickOutside }) => {
  const { md } = useMediaQueries("(max-width:  1024px)");
  return md ? (
    <IconContext.Provider
      value={{ color: "#a5a5a8", size: "1.5em", style: { cursor: "pointer" } }}
    >
      <FaArrowRight onClick={handleClickOutside} />
    </IconContext.Provider>
  ) : (
    <IconContext.Provider value={{ color: "#a5a5a8", size: "1.5em" }}>
      <RiSearchLine />
    </IconContext.Provider>
  );
};

const index = ({ handleHeaderClick, handleClickOutside }) => {
  const [localstorage, setlocalstorage] = useLocalStorage("store", []);
  const {
    result: data,
    isLoading: loading,
    setkeysearch: setkey,
    keysearch: key,
  } = useAutoComplete();
  const ref = React.useRef();

  useEffect(() => {
    ref.current && ref.current.focus();
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  const TrendsClick = React.useCallback((item) => {
    const updatetodos = [...localstorage, item];
    setlocalstorage(updatetodos);
    console.log(updatetodos);
  });
  const RemoveLocalStorage = React.useCallback(() => {
    setlocalstorage([]);
  });

  return (
    <>
      <div
        className=" w-[70%] bg-white   
                            absolute top-0 flex z-20 mx-0 mr-[20px] 
                            max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:mr-0 
                            max-[1024px]:w-full
                             max-[1024px]:h-[100vh]
                             max-[1024px]:right-0 max-[1024px]:left-0
                            border-[1px] border-solid border-[#f0f0f1] rounded-tr-[10px]
                            flex-col items-center pb-[16px]   "
        onClick={handleHeaderClick}
      >
        <div
          className="flex items-center bg-[#ffffff] px-[10px] py-[5px] border-b-[1px]
                                                      border-solid border-b-[#57cfde] content-center w-[96%]"
        >
          <IconMedia handleClickOutside />
          <input
            ref={ref}
            className=" w-full p-[6px] bg-transparent border-[0px] 
                                text-[#242424] text-[14px] flex-wrap focus:outline-none"
            type="text"
            id="search"
            placeholder="جستجو"
            value={key}
            onChange={(el) => setkey(el.target.value)}
          />

          {!loading && key.trim() != "" && (
            <IconContext.Provider
              value={{
                color: "#a5a5a8",
                size: "2em",
                style: { cursor: "pointer" },
              }}
            >
              <RiCloseCircleFill onClick={() => setkey("")} />
            </IconContext.Provider>
          )}
        </div>

        <Categories data={data?.categories} />
        <Autocomplete data={data?.auto_complete} />
        {(() => {
          if (key.trim() == "" && data != null && data.banner != undefined)
            return (
              <div className="p-[10px] w-full block mt-[16px]">
                <img
                  src={data?.banner[0]?.image}
                  alt=""
                  className="w-full  rounded-[10px]"
                />
              </div>
            );
        })()}

        {key.trim() == "" && localstorage?.length > 0 && (
          <LastSearch
            localstorage={localstorage}
            RemoveLocalStorage={RemoveLocalStorage}
          />
        )}
        {data?.trends && (
          <TrendsSearch trends={data?.trends} TrendsClick={TrendsClick} />
        )}
      </div>
      <div
        className="fixed top-[115px] w-[100vw] h-[100vh] opacity-[0.5]  
                           p-0 m-0 mr-0 right-0 z-10 bg-[#0d0d0d]"
      ></div>
    </>
  );
};

export default React.memo(index);
