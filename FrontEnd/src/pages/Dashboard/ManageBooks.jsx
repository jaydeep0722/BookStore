// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// const ManageBooks = () => {
//   const navigate = useNavigate();

//   // fetch all books here
//   const [books, setBooks] = useState([]);

//   // Handle deleting a book
//   const handleAllBooks = async () => {
//     const { data } = await axios.get(
//       "http://localhost:3000/api/book/getAllBooks"
//     );
//     console.log(data.books);
//     setBooks(data.books);
//   };
//   useEffect(() => {
//     handleAllBooks();
//   }, []);
//   const handleDeleteBook = async (id) => {
//     try {
//       alert("Book deleted successfully!");
//     } catch (error) {
//       console.error("Failed to delete book:", error.message);
//       alert("Failed to delete book. Please try again.");
//     }
//   };

//   // // Handle navigating to Edit Book page
//   // const handleEditClick = (id) => {
//   //   navigate(`/dashboard/updatebook/${id}`);
//   // };
//   return (
//     <section className="py-1 bg-blueGray-50">
//       <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
//         <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
//           <div className="rounded-t mb-0 px-4 py-3 border-0">
//             <div className="flex flex-wrap items-center">
//               <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                 <h3 className="font-semibold text-base text-blueGray-700">
//                   All Books
//                 </h3>
//               </div>
//               <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//                 <button
//                   className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                   type="button"
//                 >
//                   See all
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="block w-full overflow-x-auto">
//             <table className="items-center bg-transparent w-full border-collapse ">
//               <thead>
//                 <tr>
//                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                     #
//                   </th>
//                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                     Book Title
//                   </th>
//                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                     Category
//                   </th>
//                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                     Price
//                   </th>
//                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {books &&
//                   books.map((book, index) => (
//                     <tr key={index}>
//                       <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
//                         {index + 1}
//                       </th>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
//                         {book.title}
//                       </td>
//                       <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         {book.category}
//                       </td>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         ${book.newPrice}
//                       </td>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-4">
//                         <Link
//                           to={`/dashboard/updatebook/${book._id}`}
//                           className="font-medium text-indigo-600 hover:text-indigo-700 mr-2 hover:underline underline-offset-2"
//                         >
//                           Edit
//                         </Link>
//                         <button
//                           onClick={() => handleDeleteBook(book._id)}
//                           className="font-medium bg-red-500 py-1 px-4 rounded-full text-white mr-2"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ManageBooks;








import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ManageBooks = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  const handleAllBooks = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/book/getAllBooks"
    );
    setBooks(data.books);
  };

  useEffect(() => {
    handleAllBooks();
  }, []);

  const handleDeleteBook = async (id) => {
    try {
      alert("Book deleted successfully!");
    } catch (error) {
      console.error("Failed to delete book:", error.message);
      alert("Failed to delete book. Please try again.");
    }
  };

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full px-4 mx-auto mt-24 max-w-screen-xl">
        <div className="flex flex-col bg-white w-full shadow-lg rounded overflow-x-auto">
          <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b">
            <h3 className="font-semibold text-base text-blueGray-700">
              All Books
            </h3>
            <button
              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none transition duration-150"
              type="button"
            >
              See all
            </button>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase bg-gray-100">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase bg-gray-100">
                    Book Title
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase bg-gray-100">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase bg-gray-100">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase bg-gray-100">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {books &&
                  books.map((book, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 text-sm">{index + 1}</td>
                      <td className="px-4 py-2 text-sm">{book.title}</td>
                      <td className="px-4 py-2 text-sm">{book.category}</td>
                      <td className="px-4 py-2 text-sm">${book.newPrice}</td>
                      <td className="px-4 py-2 text-sm space-x-2">
                        <Link
                          to={`/dashboard/updatebook/${book._id}`}
                          className="text-indigo-600 hover:underline"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteBook(book._id)}
                          className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageBooks;
