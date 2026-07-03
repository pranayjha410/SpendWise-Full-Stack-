import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); 

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import incomeRouter from "./routes/income.routes.js";
import expenseRouter from "./routes/expense.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import { UPLOAD_DIR } from "./utils/uploadPath.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/income", incomeRouter);
app.use("/api/v1/expense", expenseRouter);
app.use("/api/v1/dashboard", dashboardRouter);

// Serve the same directory where Multer stores uploaded profile images.
app.use("/uploads", express.static(UPLOAD_DIR));
export default app;
