// import React, { useEffect, useState } from "react";
// import BookCart from "../../pages/Book/BookCart";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination } from "swiper/modules";
// import { Navigation } from "swiper/modules";
// import axios from "axios";
// import Recomended from "./Recomended";

// const TopSellers = () => {
//   const category = [
//     "Choose a genre",
//     "Bussiness",
//     "Fiction",
//     "Horror",
//     "Adventure",
//   ];
//   const [books, setBooks] = useState([]);
//   const [categoryData, setCategoryData] = useState("Choose a genre");

//   const handleBooksFromBackEnd = async () => {
//     // just do get request
//     console.log(import.meta.env.VITE_backEndUrl);
//     const { data } = await axios.get(
//       import.meta.env.VITE_backEndUrl + "/api/book/getAllBooks"
//     );
//     setBooks(data.books);
//   };
//   useEffect(() => {
//     handleBooksFromBackEnd();
//   }, []);

//   const filteredBooks =
//     categoryData === "Choose a genre"
//       ? books
//       : books.filter((book) => book.category === categoryData.toLowerCase());

//   console.log(filteredBooks);

//   return (
//     <>
//       <div className="py-10">
//         <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
//         {/* category filtering */}
//         <div className="mb-8 flex items-center">
//           <select
//             onChange={(e) => setCategoryData(e.target.value)}
//             name="category"
//             id="category"
//             className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//           >
//             {category.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>

//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           // pagination={{
//           //   clickable: true,
//           // }}
//           navigation={true}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 2,
//               spaceBetween: 50,
//             },
//             1180: {
//               slidesPerView: 3,
//               spaceBetween: 50,
//             },
//           }}
//           modules={[Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {filteredBooks.length > 0 &&
//             filteredBooks.map((book, index) => (
//               <SwiperSlide key={index}>
//                 <BookCart book={book} />
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>

//       <div>
//         <Recomended books={books} />
//       </div>
//     </>
//   );
// };

// export default TopSellers;


import React, { useEffect, useState } from "react";
import BookCart from "../../pages/Book/BookCart";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import axios from "axios";
import Recomended from "./Recomended";

const TopSellers = () => {
  const category = [
    "Choose a genre",
    "Bussiness",
    "Fiction",
    "Horror",
    "Adventure",
  ];
  const [books, setBooks] = useState([]);
  const [categoryData, setCategoryData] = useState("Choose a genre");

  const handleBooksFromBackEnd = async () => {
    const { data } = await axios.get(
      import.meta.env.VITE_backEndUrl + "/api/book/getAllBooks"
    );
    setBooks(data.books);
  };

  useEffect(() => {
    handleBooksFromBackEnd();
  }, []);

  const filteredBooks =
    categoryData === "Choose a genre"
      ? books
      : books.filter((book) => book.category === categoryData.toLowerCase());

  return (
    <>
      <div className="py-10 px-4 md:px-12">
        <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">
          Top Sellers
        </h2>

        {/* category filtering */}
        <div className="mb-8 flex items-center justify-center md:justify-start">
          <select
            onChange={(e) => setCategoryData(e.target.value)}
            name="category"
            id="category"
            className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          >
            {category.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

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
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {filteredBooks.length > 0 &&
            filteredBooks.map((book, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <BookCart book={book} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div>
        <Recomended books={books} />
      </div>
    </>
  );
};

export default TopSellers;
