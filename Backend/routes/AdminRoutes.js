import express from "express";
import { AdminStuff } from "../controllers/AdminController.js";
const AdminRouter = express.Router();

AdminRouter.get("/AdminStuff", AdminStuff);


export default AdminRouter;
