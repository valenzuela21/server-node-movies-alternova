const {Router} = require('express');
const {voteMovie, voteUpdateMovie} = require("../controllers/vote");
const {validateJWT} = require("../middlewares");
const {check} = require("express-validator");
const {validateInputs} = require("../middlewares/validate-inputs");

const router = Router();

router.post('/create', [validateJWT,
    check("user", "Insert id the input user").notEmpty().isMongoId().withMessage('Input user id not validate'),
    check("score", "Insert input score").notEmpty().isArray().withMessage('Input score is array object'),
    check("score.*.movie", "Insert attribute object movie").not().isEmpty().isMongoId().withMessage('Input attribute Movie ID not validate'),
    check("score.*.vote", "Insert attribute object vote").not().isEmpty().isNumeric().withMessage('Input attribute is numeric'),
    validateInputs
], voteMovie);

router.put('/add',[
    validateJWT,
    check("user", "Insert id the input user").notEmpty().isMongoId().withMessage('Input user id not validate'),
    check("score", "Insert input score").notEmpty().isArray().withMessage('Input score is array object'),
    check("score.*.movie", "Insert attribute object movie").not().isEmpty().isMongoId().withMessage('Input attribute Movie ID not validate'),
    check("score.*.vote", "Insert attribute object vote").not().isEmpty().isNumeric().withMessage('Input attribute is numeric'),
    validateInputs
], voteUpdateMovie)

module.exports = router;