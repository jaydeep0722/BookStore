
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
