const express = require('express');
const router = express.Router();
const namesController = require('../controllers/name.controller');

router.post('/', namesController.createName);
router.get('/', namesController.getNames);
router.get('/:id', namesController.getNameById);
router.put('/:id', namesController.updateName);
router.delete('/:id', namesController.deleteName);

module.exports = router;
