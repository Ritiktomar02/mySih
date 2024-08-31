import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users/", userRouter);

app.listen(PORT, () => {
  console.log(`server running at localhost ${PORT}`);
});
