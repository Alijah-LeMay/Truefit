const express = require('express');

const { body, validationResult } = require('express-validator');
const Site = require('../models/Site');
const router = express.Router();

// @route       GET api/our_work
// desc         Get all sets of our work
// @access      Public

router.get('/', async (req, res) => {
  try {
    const sites = await Site.find();
    res.json(sites);
  } catch (error) {
    console.error(err.message);
    res.status(400).send('Server Error');
  }
});

// @route       POST api/our_work
// desc         Create or update site entry
// @access      Private

router.post('/', async (req, res) => {
  try {
    const siteFields = { ...req.body };

    const newSite = new Site(siteFields);
    const site = await newSite.save();
    res.status(200).send(site);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
