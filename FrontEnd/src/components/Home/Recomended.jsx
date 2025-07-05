
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCart from "../../pages/Book/BookCart";

const Recomended = ({ books }) => {
  return (
    <div className="py-16 px-4 md:px-12">
      <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">
        Recommended for you
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {books.length > 0 &&
          books.slice(8, 18).map((book, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <BookCart book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recomended;
