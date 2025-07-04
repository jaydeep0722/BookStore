// import React, { useEffect, useState } from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import { useParams } from "react-router-dom";
// import { getImageURL } from "../../utils/getImageURL";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/feature/cart/cartSlice";
// import axios from "axios";

// const GetSingleBook = () => {
//   const { id } = useParams();
//   const [book, setBooks] = useState([]);

//   const handleBooksFromBackEnd = async () => {
//     const { data } = await axios.get(
//       `http://localhost:3000/api/book/getSingleBook/${id}`
//     );
//     console.log(data.book);
//     setBooks(data.book);
//   };
//   useEffect(() => {
//     handleBooksFromBackEnd();
//   }, []);

//   const dispatch = useDispatch();

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="max-w-lg shadow-md p-5">
//       <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

//       <div className="">
//         <div>
//           <img
//             src={`${getImageURL(book.coverImage)}`}
//             alt={book.title}
//             className="mb-8"
//           />
//         </div>

//         <div className="mb-5">
//           <p className="text-gray-700 mb-2">
//             <strong>Author:</strong> {book.author || "admin"}
//           </p>
//           <p className="text-gray-700 mb-4">
//             <strong>Published:</strong>{" "}
//             {new Date(book?.createdAt).toLocaleDateString()}
//           </p>
//           <p className="text-gray-700 mb-4 capitalize">
//             <strong>Category:</strong> {book?.category}
//           </p>
//           <p className="text-gray-700">
//             <strong>Description:</strong> {book.description}
//           </p>
//         </div>

//         <button
//           onClick={() => handleAddToCart(book)}
//           className="btn-primary px-6 space-x-1 flex items-center gap-1 "
//         >
//           <FiShoppingCart className="" />
//           <span>Add to Cart</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GetSingleBook;


import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { getImageURL } from "../../utils/getImageURL";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cart/cartSlice";
import axios from "axios";

const GetSingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const dispatch = useDispatch();

  const handleBooksFromBackEnd = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/book/getSingleBook/${id}`
      );
      setBook(data.book);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  useEffect(() => {
    if (id) {
      handleBooksFromBackEnd();
    }
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

      <div>
        <div>
          <img
            src={
              book.coverImage
                ? getImageURL(book.coverImage)
                : "/placeholder.jpg"
            }
            alt={book.title || "Book Cover"}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author || "admin"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong>{" "}
            {book.createdAt
              ? new Date(book.createdAt).toLocaleDateString()
              : "N/A"}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {book.category || "N/A"}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong>{" "}
            {book.description || "No description available."}
          </p>
        </div>

        <button
          onClick={() => handleAddToCart(book)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1"
        >
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default GetSingleBook;

