const express = require('express')
const router = express.Router();
const controller = require('../controllers/minifig')


router.get("/",controller.getMinifig)

module.exports = router;