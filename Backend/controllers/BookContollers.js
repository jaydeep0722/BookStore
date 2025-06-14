import BOOK from "../models/Bookmodel.js";

const createBook = async (req, res) => {
  try {
    
    console.log("awaken")
    const newBook = await BOOK({ ...req.body });

    await newBook.save();
    console.log("book saved succeess")
   return res.status(201).json({
      success: true,
      message: "Book Cretaed SuccessFully",
      book: newBook,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const AllBooks = await BOOK.find({});

    res.status(200).json({
      success: true,
      message: "All Books Get Success",
      books: AllBooks,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
      const id = req.params.id;
      console.log(id)
      const singleBook = await BOOK.findById(id);
      console.log(singleBook)

    if (!singleBook) {
     return  res.status(404).send({ message: "Book not Found!" });
    }
    res.status(200).json({
      success: true,
      message: "Single Book get Success By id",
      book: singleBook,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const UpdateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedBook = await BOOK.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if(!updatedBook) {
            res.status(404).send({message: "Book is not Found!"})
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        })
    } catch (error) {
        console.error("Error updating a book", error);
        res.status(500).send({message: "Failed to update a book"})
    }
}

const deleteABook = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBook =  await BOOK.findByIdAndDelete(id);
        if(!deletedBook) {
            res.status(404).send({message: "Book is not Found!"})
        }
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletedBook
        })
    } catch (error) {
        console.error("Error deleting a book", error);
        res.status(500).send({message: "Failed to delete a book"})
    }
};
export { createBook, getAllBooks, getSingleBook, UpdateBook, deleteABook };
