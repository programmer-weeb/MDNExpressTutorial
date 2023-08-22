const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const AuthorModel = require('../models/author')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  
  res.send('respond with a resource');
});

router.get('/cool', (req, res) => {
  res.send("You're so cool")
})

// mongoose.connect('mongodb+srv://admin:admin@cluster0.a21e1wa.mongodb.net/?retryWrites=true&w=majority')

module.exports = router;
