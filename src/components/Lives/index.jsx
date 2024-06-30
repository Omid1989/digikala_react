import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useMagnet } from "../../hooks/useMagnet";
import React, { useContext, useEffect, useState } from "react";

import { IconContext } from "react-icons";
import { BiHeart } from "react-icons/bi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Live, Player } from "../index";
import { LivesSkeleton } from "../../Skeletons";

const ReactModalPortal = () => {
  const { ReactPortal, setReactPortal } = useContext(LivesContext);

  const [postID, setpostID] = useState(ReactPortal.postId);
  const post = ReactPortal?.posts?.filter((value) => value.id == postID)[0];

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <>
      <div
        className="fixed opacity-100 z-50 inset-0 bg-black bg-opacity-[0.8] 
                       flex flex-col left-0 top-0"
        onClick={() => setReactPortal({ ...ReactPortal, Modal: false })}
      >
        <div
          className="flex items-center content-center
                                w-fit ml-auto mr-auto relative flex-grow 
                                pl-[80px] pr-[80px]"
          onClick={(event) => event.stopPropagation()}
        >
          <div
            className="left-[-22px] border-[1px] border-solid 
                                  border-[#e9e9ec] p-[8px] bg-[#fff] rounded-[50%]
                                   cursor-pointer   absolute flex content-center"
          >
            <IconContext.Provider
              value={{
                color: "black",
                size: "1.5em",
                style: { width: "20px", height: "20px" },
              }}
            >
              <IoIosArrowBack />
            </IconContext.Provider>
          </div>
          <div className="flex flex-col w-[360px] h-[610px]">
            <div className="w-full relative h-full">
              <div
                className="absolute top-0 w-full h-[80px]
                                         bg-[linear-gradient(0deg,_rgba(12,_12,_12,_0)_0,_rgba(6,_6,_6,_0.6)_100%)] "
              ></div>
              <div className="flex pr-[10px] pl-[10px] justify-between items-center pt-[16px]">
                <div className="flex">
                  <div className="flex items-center">
                    <IconContext.Provider
                      value={{ color: "white", size: "1.5em" }}
                    >
                      <FaArrowRight />
                    </IconContext.Provider>
                  </div>
                  <div className="flex items-center mr-[20px] text-white">
                    <img
                      src={post?.circle_cover}
                      alt=""
                      className="w-[50px] h-[50px] rounded-[20px]"
                    />
                    <span className="mr-[8px]">{post?.author?.username}</span>
                  </div>
                </div>
                <div
                  className="bg-[#fff] text-[#0b0a0a] border-[1px] 
                                                 border-[solid] border-[#fbfafa] 
                                                text-[12px] rounded-[8px] items-center px-[15px] py-[10px]"
                >
                  دنبال کردن
                </div>
              </div>
              <div className="absolute top-0 w-full h-full">
                <Player url={post.media[0].url} />
              </div>
              <div
                className="absolute bottom-0 w-full h-[156px] z-[2]
                                           text-white pr-[20px]"
              >
                <div
                  className="absolute top-[0] right-[0] bottom-[0] left-[0] 
                                bg-[linear-gradient(180deg,_rgba(13,_13,_13,_0),_rgba(12,_12,_12,_1))]"
                ></div>
                <div className="flex justify-between pl-[10px]">
                  <div className="flex flex-col justify-end pb-[10px]">
                    <span>{post?.title}</span>
                    <span>{post?.caption} </span>
                  </div>
                  <div>
                    <div className="flex flex-col items-center mt-[10px]">
                      <IconContext.Provider
                        value={{ color: "white", size: "2em" }}
                      >
                        <BiHeart />
                      </IconContext.Provider>
                      <span>{post?.likes_count}</span>
                    </div>
                    <div className="flex flex-col items-center mt-[10px]">
                      <IconContext.Provider
                        value={{ color: "white", size: "2em" }}
                      >
                        <TfiCommentsSmiley />
                      </IconContext.Provider>
                      <span>{post?.likes_count}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full bg-[#0d0c0c] p-[8px] pt-[25px] ">
              <Swiper
                spaceBetween={8}
                // slidesPerView={12}
                slidesPerView={"auto"}
                className="ml-0 mr-0 relative overflow-hidden list-none p-0 z-[1] block"
              >
                {post?.products.map((product, index) => {
                  return (
                    <SwiperSlide key={index} className="w-auto h-auto">
                      <div className="flex bg-white flex-row rounded-[8px] p-[2px] w-[240px]">
                        <div className="w-[60px] h-[60px]">
                          <img
                            width="60"
                            height="60"
                            src={product.images.main}
                            alt=""
                          />
                        </div>
                        <div className="overflow-hidden line-clamp-2 leading-[2.17] flex flex-wrap">
                          {product.title_fa}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div
            className=" right-[-22px]  border-[1px] border-solid 
                                 border-[#e9e9ec] p-[8px] bg-[#fff] rounded-[50%] cursor-pointer
                                   absolute flex content-center"
          >
            <IconContext.Provider
              value={{
                color: "black",
                size: "1.5em",
                style: { width: "20px", height: "20px" },
              }}
            >
              <IoIosArrowForward />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};
const LivesContext = React.createContext();

const index = () => {
  const { lives, posts, loading, error } = useMagnet();
  const [ReactPortal, setReactPortal] = useState({
    Modal: false,
    posts: null,
    postId: null,
  });

  useEffect(() => {
    setReactPortal({ ...ReactPortal, posts: posts });
  }, [loading]);

  const actionModal = (value, id) =>
    setReactPortal({ ...ReactPortal, Modal: value, postId: id });

  return loading ? (
    <LivesSkeleton count={18} />
  ) : (
    <div className={"mt-[120px] max-[1024px]:mt-[72px] "}>
      <Swiper
        spaceBetween={8}
        // slidesPerView={12}
        navigation={false}
        modules={[Navigation]}
        slidesPerView={"auto"}
        className="ml-0 mr-0 relative overflow-hidden list-none p-0 z-2 block"
      >
        {lives?.map((live, index) => (
          <SwiperSlide key={index} className="w-auto h-auto">
            <Live data={live} key={index} />
          </SwiperSlide>
        ))}
        {posts?.map((post, index) => (
          <SwiperSlide
            key={index}
            className="w-auto h-auto"
            onClick={() => actionModal(true, post.id)}
          >
            <Live data={post} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      {ReactPortal?.Modal && (
        <LivesContext.Provider value={{ ReactPortal, setReactPortal }}>
          <ReactModalPortal />
        </LivesContext.Provider>
      )}
    </div>
  );
};
export default index;
