// index.js
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import connectDB from './db/index.js';
import app from './app.js';


// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get("/api/expenses", (req, res) => {
//   res.json([
//     { id: 1, title: "Tea", amount: 20 },
//     { id: 2, title: "Lunch", amount: 150 }
//   ]);
// });

connectDB()
.then(() => {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
 
})


.catch((error) => {
  console.log("MongoDb Error:", error);
});