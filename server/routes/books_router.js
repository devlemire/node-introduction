const express = require('express');
const bc = require(__dirname + '/../controllers/books_controller.js');
const router = express.Router();

router.post('/', bc.create);
router.get('/', bc.read);
router.put('/:id', bc.update);
router.delete('/:id', bc.delete);

module.exports = router;
