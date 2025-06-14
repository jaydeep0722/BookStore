import express from "express";
import { createBook, deleteABook, getAllBooks, getSingleBook, UpdateBook } from "../controllers/BookContollers.js";
import AuthAdmin from "../middleware/AuthAdmin.js";

const BookRouter = express.Router();

BookRouter.post("/createbook", AuthAdmin, createBook);
BookRouter.get("/getAllBooks", getAllBooks);
BookRouter.get("/getSingleBook/:id",  getSingleBook);
BookRouter.put("/UpdateBook/:id", AuthAdmin, UpdateBook);
BookRouter.delete("/deleteABook/:id", AuthAdmin, deleteABook);


export default BookRouter;
