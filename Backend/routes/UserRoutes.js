import express from "express";
import { createAdmin } from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.post("/admin", createAdmin);

export default UserRouter;
