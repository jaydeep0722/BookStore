// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useParams, useNavigate } from "react-router-dom";
// import InputField from "./InputField";
// import SelectField from "./SelectField";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { useState } from "react";

// const UpdateBook = () => {
//   const { id } = useParams();
//   const { register, handleSubmit, setValue, reset } = useForm();
//   const [bookData, setBookData] = useState(null);

//   const navigate = useNavigate();

//   const fetchBook = async () => {
//     const response = await axios.get(
//       import.meta.env.VITE_backEndUrl + `/api/book/getSingleBook/${id}`
//     );
//     console.log(response.data);
//     setBookData(response.data);
//     console.log(bookData);
//   };

//   useEffect(() => {
//     fetchBook();
//   }, []);

//   useEffect(() => {
//     if (bookData) {
//       setValue("title", bookData.book.title);
//       setValue("description", bookData.book.description);
//       setValue("category", bookData.book?.category);
//       setValue("trending", bookData.book.trending);
//       setValue("oldPrice", bookData.book.oldPrice);
//       setValue("newPrice", bookData.book.newPrice);
//       setValue("coverImage", bookData.book.coverImage);
//     }
//   }, [bookData, setValue]);

//   const onSubmit = async (data) => {
//     const updateBookData = {
//       title: data.title,
//       description: data.description,
//       category: data.category,
//       trending: data.trending,
//       oldPrice: Number(data.oldPrice),
//       newPrice: Number(data.newPrice),
//       coverImage: data.coverImage || bookData.coverImage,
//     };
//     try {
//       const updatedBookData = await axios.put(
//         import.meta.env.VITE_backEndUrl + `/api/book/UpdateBook/${id}`,
//         updateBookData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       console.log(updatedBookData);
//       Swal.fire({
//         title: "Book Updated",
//         text: "Your book is updated successfully!",
//         icon: "success",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, It's Okay!",
//       });
//       await refetch();
//     } catch (error) {
//       console.log("Failed to update book.");
//       navigate("/dashboard/ManageBooks");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <InputField
//           label="Title"
//           name="title"
//           placeholder="Enter book title"
//           register={register}
//         />

//         <InputField
//           label="Description"
//           name="description"
//           placeholder="Enter book description"
//           type="textarea"
//           register={register}
//         />

//         <SelectField
//           label="Category"
//           name="category"
//           options={[
//             { value: "", label: "Choose A Category" },
//             { value: "business", label: "Business" },
//             { value: "technology", label: "Technology" },
//             { value: "fiction", label: "Fiction" },
//             { value: "horror", label: "Horror" },
//             { value: "adventure", label: "Adventure" },
//           ]}
//           register={register}
//         />
//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               {...register("trending")}
//               className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
//             />
//             <span className="ml-2 text-sm font-semibold text-gray-700">
//               Trending
//             </span>
//           </label>
//         </div>

//         <InputField
//           label="Old Price"
//           name="oldPrice"
//           type="number"
//           placeholder="Old Price"
//           register={register}
//         />

//         <InputField
//           label="New Price"
//           name="newPrice"
//           type="number"
//           placeholder="New Price"
//           register={register}
//         />

//         <InputField
//           label="Cover Image URL"
//           name="coverImage"
//           type="text"
//           placeholder="Cover Image URL"
//           register={register}
//         />

//         <button
//           type="submit"
//           className="w-full py-2 bg-blue-500 text-white font-bold rounded-md"
//         >
//           Update Book
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateBook;





import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Swal from "sweetalert2";
import axios from "axios";

const UpdateBook = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const [bookData, setBookData] = useState(null);
  const navigate = useNavigate();

  const fetchBook = async () => {
    const response = await axios.get(
      import.meta.env.VITE_backEndUrl + `/api/book/getSingleBook/${id}`
    );
    setBookData(response.data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  useEffect(() => {
    if (bookData) {
      const book = bookData.book;
      setValue("title", book.title);
      setValue("description", book.description);
      setValue("category", book.category);
      setValue("trending", book.trending);
      setValue("oldPrice", book.oldPrice);
      setValue("newPrice", book.newPrice);
      setValue("coverImage", book.coverImage);
    }
  }, [bookData, setValue]);

  const onSubmit = async (data) => {
    const updateBookData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || bookData.coverImage,
    };

    try {
      await axios.put(
        import.meta.env.VITE_backEndUrl + `/api/book/UpdateBook/${id}`,
        updateBookData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      Swal.fire({
        title: "Book Updated",
        text: "Your book is updated successfully!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okay",
      });

      navigate("/dashboard/ManageBooks");
    } catch (error) {
      console.log("Failed to update book.");
      navigate("/dashboard/ManageBooks");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update Book
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            label="Title"
            name="title"
            placeholder="Enter book title"
            register={register}
          />

          <InputField
            label="Description"
            name="description"
            placeholder="Enter book description"
            type="textarea"
            register={register}
          />

          <SelectField
            label="Category"
            name="category"
            options={[
              { value: "", label: "Choose A Category" },
              { value: "business", label: "Business" },
              { value: "technology", label: "Technology" },
              { value: "fiction", label: "Fiction" },
              { value: "horror", label: "Horror" },
              { value: "adventure", label: "Adventure" },
            ]}
            register={register}
          />

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              {...register("trending")}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-700 font-medium">
              Trending
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Old Price"
              name="oldPrice"
              type="number"
              placeholder="Old Price"
              register={register}
            />
            <InputField
              label="New Price"
              name="newPrice"
              type="number"
              placeholder="New Price"
              register={register}
            />
          </div>

          <InputField
            label="Cover Image URL"
            name="coverImage"
            type="text"
            placeholder="Cover Image URL"
            register={register}
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
