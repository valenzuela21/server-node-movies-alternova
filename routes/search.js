const {Router} = require('express');
const {search} = require("../models/search");

const router = Router();

router.get('/:action/:term',  search);

module.exports = router;