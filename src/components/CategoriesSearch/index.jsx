import React from "react";
import { IconContext } from "react-icons";
import { RiSearchLine } from "react-icons/ri";
const Categories = ({ data }) => {
  return (
    <>
      {data?.map((cat, index) => {
        return (
          <>
            <div key={index} className="flex w-full px-[10px] py-[15px]">
              <div className="flex flex-col flex-wrap">
                <div className="flex">
                  <div>
                    <IconContext.Provider
                      value={{ color: "#a5a5a8", size: "1.5em" }}
                    >
                      <RiSearchLine />
                    </IconContext.Provider>
                  </div>
                  <div className="pr-[10px]">
                    <h3 className="text-[#3f4066]">{cat.keyword}</h3>
                    <span className="text-[#7f838a] text-lg ">در دسته </span>
                    <span className="text-[#343af5]">
                      {cat.category.title_fa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="w-[95%] border-b-[1px] border-solid border-b-[#2232] "></div>
    </>
  );
};
export default React.memo(Categories);
