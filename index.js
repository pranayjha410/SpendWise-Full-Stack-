const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// port
const PORT = process.env.PORT || 3000;

// listen
app.listen(PORT, () => {
  console.log(`🚀 Server Working on Port ${PORT}`);
});
