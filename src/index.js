import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

connectDB();

// dummy data
const expenses = [
  { id: 1, title: "Tea", amount: 20 },
  { id: 2, title: "Lunch", amount: 150 }
];

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

// port
const PORT = process.env.PORT || 3000;

// listen
app.listen(PORT, () => {
  console.log(`🚀 Server Working on Port ${PORT}`);
});
