// import style from './index.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useGetData } from "../../store/v2";

const index = () => {
  const { full_slider } = useGetData((state) => {
    return {
      full_slider: state.data?.data.widgets.filter(
        (data) => data.type === "full_slider"
      )[0]?.data,
    };
  });

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {full_slider?.map((slid, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[400px] flex">
            <img src={slid.image} alt="" className="w-full m-0" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default index;
