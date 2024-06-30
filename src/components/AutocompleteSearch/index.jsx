import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { MdOutlineArrowOutward } from "react-icons/md";

const Autocomplete = ({ data }) => {
  return data?.map((cat, index) => {
    return (
      <>
        <div
          key={index}
          className="flex w-full px-[10px] py-[15px] justify-between"
        >
          <div className="flex flex-col flex-wrap ">
            <div className="flex ">
              <div>
                <IconContext.Provider
                  value={{ color: "#a5a5a8", size: "1.5em" }}
                >
                  <RiSearchLine />
                </IconContext.Provider>
              </div>
              <div className="pr-[10px]  text-lg">
                <h3>{cat.keyword}</h3>
              </div>
            </div>
          </div>
          <div>
            <IconContext.Provider value={{ color: "#a5a5a8", size: "1.5em" }}>
              <MdOutlineArrowOutward />
            </IconContext.Provider>
          </div>
        </div>
      </>
    );
  });
};

export default React.memo(Autocomplete);
