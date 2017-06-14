const express = require('express');
const bc = require(__dirname + '/../controllers/books_controller.js');
const router = express.Router();

router.post('/', bc.create);
router.get('/', bc.read);

module.exports = router;
