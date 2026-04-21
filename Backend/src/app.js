import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";  // ← move here
import path from "path";
import { fileURLToPath } from "url";
const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
  methods: ["GET","POST","PUT","DELETE"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);  

//server uploads folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
export default app;