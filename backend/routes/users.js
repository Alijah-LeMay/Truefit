const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');

const router = express.Router();

const User = require('../models/User');
const jwt = require('jsonwebtoken');

// @route       POST api/users
// desc         Register User
// @access      Public

router.post(
  '/',
  [
    body('name', 'Name is required.').not().isEmpty(),
    body('email', 'Please include a valid email.').isEmail(),
    body('password', 'Please enter a valid password.').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // if errors returned from express-validator
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        // if user exists, send bad request
        res.status(400).json({ errors: [{ msg: 'User already exists.' }] });
      }
      user = new User({
        name,
        email,
        password,
      });
      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
          });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
