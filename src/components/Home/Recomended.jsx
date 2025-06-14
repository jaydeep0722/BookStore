// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // import required modules
// import { Pagination, Navigation } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import BookCart from "../../pages/Book/BookCart";

// const Recomended = ({ books }) => {
//   // const [books, setBooks] = useState([]);

//   // const handleBooksFromBackEnd = async () => {
//   //   // just do get request
//   //   const { data } = await axios.get(
//   //     "http://localhost:3000/api/book/getAllBooks"
//   //   );
//   //   console.log(data.books)
//   //   setBooks(data.books);
//   // };
//   // useEffect(() => {
//   //   // fetch("books.json")
//   //   //   .then((res) => res.json())
//   //   //   .then((data) => setBooks(data));
//   //   handleBooksFromBackEnd();
//   // }, []);

//   return (
//     <div className="py-16">
//       <h2 className="text-3xl font-semibold mb-6">Recommended for you </h2>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         navigation={true}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//           1180: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {books.length > 0 &&
//           books.slice(8, 18).map((book, index) => (
//             <SwiperSlide key={index}>
//               <BookCart book={book} />
//             </SwiperSlide>
//           ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Recomended;





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
