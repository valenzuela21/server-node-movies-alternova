const {Router} = require('express');
const {generateSeed} = require("../controllers/seed");

const router = Router();

router.post('/', generateSeed);

module.exports = router;