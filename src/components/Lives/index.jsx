import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useMagnet } from "../../hooks/useMagnet";
import { useEffect, useState } from "react";
import { Live } from "../index";
import { LivesSkeleton } from "../../Skeletons";
import { LivesContext } from "../../hooks/useLivesContext";
import { ModalLive } from "../index";

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
          <ModalLive />
        </LivesContext.Provider>
      )}
    </div>
  );
};
export default index;
