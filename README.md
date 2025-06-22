
# 🚀 Techspire Solutions

**Techspire Solutions** is a full-stack MERN web application that provides secure user authentication, role-based access, and an admin dashboard for managing users and messages. The system is designed with scalability, security, and user experience in mind.

## 📌 Features

- JWT-based user authentication and authorization  
- User registration and login with secure password hashing  
- Role-based access: Admin vs Regular User  
- Admin dashboard with:
  - View all registered users  
  - Edit user information  
  - Delete users  
  - View contact messages from users  
- Contact form for users to send messages to the admin  
- Schema validation using Zod  
- Centralized error handling for consistent API responses  

## 🛠 Tech Stack

### Frontend:
- React.js
- JavaScript
- CSS (or Tailwind/Bootstrap if used)

### Backend:
- Node.js
- Express.js
- MongoDB

### Security & Utilities:
- bcrypt – Secure password hashing  
- dotenv – Environment variable configuration  
- jsonwebtoken (JWT) – Token-based authentication  
- zod – Schema validation for inputs  
- Custom centralized error middleware  

## 🔧 Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/techspire-solutions.git
cd techspire-solutions
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

The frontend will run on:  
**http://localhost:5000**

## 📂 Folder Structure

```
techspire-solutions/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── .env
│   └── ...
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── ...
├── README.md
└── ...
```

## 🚀 Future Enhancements

- Forgot password & email verification  
- Pagination and search in admin dashboard  
- Responsive design for mobile devices  
- Admin analytics panel (graphs, stats)


## 👨‍💻 Author

**Noman Hussain**  
💼 LinkedIn: https://www.linkedin.com/in/noman-hussain0 <br>
📧 Email: nomanhussain286@gmail.com

 
