# SpendWise

SpendWise is a full-stack MERN (MongoDB, Express.js, React, Node.js) personal finance tracker that helps users manage their income, expenses, and savings through a clean dashboard. It includes secure user authentication, profile image uploads, transaction management, Excel export, and data visualization.

## 🌐 Live Demo

**Frontend:** https://spendwise-dusky-iota.vercel.app

**Backend API:** https://spendwise-backend-pranay.onrender.com

**GitHub Repository:** https://github.com/pranayjha410/SpendWise-Full-Stack-

---


#  Features

* User Registration & Login
* JWT Authentication
* Secure Password Hashing (bcrypt)
* Profile Image Upload
* Dashboard with Financial Summary
* Income Management (Create, Read, Update, Delete)
* Expense Management (Create, Read, Update, Delete)
* Recent Transactions
* Net Savings Calculation
* Last 45 Days Financial Summary
* Download Income as Excel
* Download Expense as Excel
* Responsive User Interface
* Deployed on Vercel & Render

---

#  Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Router
* Context API

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* JWT
* bcryptjs

## File Upload

* Multer

## Excel Export

* ExcelJS

## Deployment

* Vercel
* Render

---

# 🏗 Architecture

```
Frontend (React)
        │
        ▼
Axios API Calls
        │
        ▼
Express Routes
        │
        ▼
Controllers
        │
        ▼
Mongoose Models
        │
        ▼
MongoDB Atlas
```

---

# 📂 Project Structure

```
SpendWise-Full-Stack
│
├── Backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middlewares
│   │   ├── utils
│   │   └── db
│   └── package.json
│
└── Frontend
    └── spend-wise
        ├── src
        │   ├── components
        │   ├── context
        │   ├── layouts
        │   ├── pages
        │   ├── utils
        │   └── assets
        └── package.json
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/pranayjha410/SpendWise-Full-Stack-.git
```

## Backend

```bash
cd Backend
npm install
npm run dev
```

## Frontend

```bash
cd Frontend/spend-wise
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=
MONGODB_URI=
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=
CORS_ORIGIN=
```

## Frontend (.env)

```env
VITE_API_BASE_URL=
```

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint              |
| ------ | --------------------- |
| POST   | /api/v1/user/register |
| POST   | /api/v1/user/login    |
| POST   | /api/v1/user/logout   |

## Income

| Method | Endpoint                     |
| ------ | ---------------------------- |
| POST   | /api/v1/income/add           |
| GET    | /api/v1/income/get           |
| GET    | /api/v1/income/get/:id       |
| PUT    | /api/v1/income/get/:id       |
| DELETE | /api/v1/income/get/:id       |
| GET    | /api/v1/income/downloadexcel |

## Expense

| Method | Endpoint                      |
| ------ | ----------------------------- |
| POST   | /api/v1/expense/add           |
| GET    | /api/v1/expense/get           |
| GET    | /api/v1/expense/get/:id       |
| PUT    | /api/v1/expense/get/:id       |
| DELETE | /api/v1/expense/get/:id       |
| GET    | /api/v1/expense/downloadexcel |

## Dashboard

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/v1/dashboard |

---

#  What I Learned

During this project I learned:

* Building RESTful APIs using Express.js
* MongoDB schema design with Mongoose
* JWT Authentication
* Password hashing using bcrypt
* React Context API
* React Router
* Axios for API communication
* Image upload using Multer
* Excel export using ExcelJS
* Deployment using Vercel and Render
* Environment variable management
* CORS configuration
* Full-stack project deployment

---

#  Future Improvements

* Edit Profile
* Forgot Password
* Email Verification
* Monthly Reports
* Budget Goals
* Advanced Analytics
* Better Error Handling
* Pagination
* Dark Mode

---

# 👨‍💻 Author

**Pranay Jha**

GitHub: https://github.com/pranayjha410

---


