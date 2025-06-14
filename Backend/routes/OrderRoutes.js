import express from "express";
import  {createOrder, getAllOrdersByEmail}  from "../controllers/OrderController.js";


const OrderRouter = express.Router();

OrderRouter.post("/createOrder", createOrder);
OrderRouter.get("/AllOrders/:email", getAllOrdersByEmail);

export default OrderRouter;