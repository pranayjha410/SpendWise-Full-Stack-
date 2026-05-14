# SpendWise 
A personal finance tracker to manage income, expenses and savings.

## Features
- JWT Authentication
- Income Management (CRUD + Excel Export)
- Expense Management (CRUD + Excel Export)
- Dashboard (Net Savings, 45 Days Summary, Recent Transactions)

- ## Tech Stack
- Node.js, Express.js
- MongoDB, Mongoose
- JWT, Bcrypt
- ExcelJS

- ## API Endpoints
### Auth
- POST /api/v1/user/register
- POST /api/v1/user/login
- POST /api/v1/user/logout

### Income
- POST   /api/v1/income/add
- GET    /api/v1/income/get
- GET    /api/v1/income/get/:id
- PUT    /api/v1/income/get/:id
- DELETE /api/v1/income/get/:id
- GET    /api/v1/income/downloadexcel

### Expense
- POST   /api/v1/expense/add
- GET    /api/v1/expense/get
- GET    /api/v1/expense/get/:id
- PUT    /api/v1/expense/get/:id
- DELETE /api/v1/expense/get/:id
- GET    /api/v1/expense/downloadexcel

### Dashboard
- GET /api/v1/dashboard
