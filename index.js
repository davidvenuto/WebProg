const express = require("express");
const app = express();
const path = require('path');

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());

// Import routes
const userRoutes = require("./server/routes/user");
const todoRoutes = require("./server/routes/todo");

// CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes to serve HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "public", "todoItem.html")));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, "public", "register.html")));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, "public", "login.html")));

// Use routes for user and to-do operations
app.use('/users', userRoutes);
app.use('/todos', todoRoutes); // Use your to-do routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started!! Listening on port ${PORT}!!! :)`));
