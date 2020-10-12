const express = require('express');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const auth = require('../middleware/auth');

const User = require('../models/User');

// @route       GET api/auth
// desc         Test route
// @access      Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error ');
  }
});

// @route       POST api/auth
// desc         Authenticate user & get token
// @access      Public

router.post(
  '/',
  [
    body('email', 'Please include a valid email.').isEmail(),
    body('password', 'Password is required.').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // if errors returned from express-validator
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (!user) {
        // if user doesnt exist, send bad request
        res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      //   Check password comparison
      const isMatch = await bcrypt.compare(password, user.password);
      //   if passwords dont match send error
      if (!isMatch) {
        res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

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
