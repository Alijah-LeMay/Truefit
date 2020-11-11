const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');
const path = require('path');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
// No longer body-parser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/user', userRoutes);

app.use('/api/send', require('./routes/sendEmail'));
//
// Image upload route
app.use('/api/upload', require('./routes/upload'));
// Make uploads folder statis
const dirname = path.resolve();
app.use('/uploads', express.static(path.join(dirname, '/uploads')));

//
// Make sure middleware is after all other routes
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
