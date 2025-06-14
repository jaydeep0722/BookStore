import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./utils/connections.js";
import BookRouter from "./routes/BookRoutes.js";
import OrderRouter from "./routes/OrderRoutes.js";
import UserRouter from "./routes/UserRoutes.js";
import AdminRouter from "./routes/AdminRoutes.js";

// make app
const app = express();
const PORT = process.env.PORT || 4001;
connectDB();

// middelewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/book", BookRouter);
app.use("/api/order", OrderRouter);
app.use("/api/auth", UserRouter);
app.use("/api/admin", AdminRouter);

app.get("/", () => {
  res.send("API WORKING PROPERLY");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
