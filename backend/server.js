const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');
const path = require('path');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// Connect Database
connectDB();

// Init Middleware
// No longer body-parser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/our_work', require('./routes/our_work'));
// Image upload route
app.use('/api/upload', require('./routes/upload'));
// Make uploads folder statis
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Make sure middleware is after all other routes
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
