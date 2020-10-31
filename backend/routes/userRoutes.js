const express = require('express');
const router = express.Router();

// Middleware

const { protect, admin } = require('../middleware/authMiddleware');

// Controllers

const { authUser, registerUser } = require('../controllers/userController');

// Routes

router.route('/').post(registerUser);
router.post('/login', authUser);

module.exports = router;
