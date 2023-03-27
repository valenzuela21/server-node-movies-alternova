const {Router} = require('express');
const {check} = require('express-validator');
const {validateJWT} = require('../middlewares');

const {getMoviesALL, getMoviesDetail, postMovie, updatePoint, movieHighlights} = require('../controllers/movie');
const {validateInputs} = require("../middlewares/validate-inputs");

const router = Router();


router.get('/', getMoviesALL);

router.get('/detail/:id', getMoviesDetail);

router.post('/create', [
    validateJWT,
    check('name', 'Insert input name').not().isEmpty(),
    check('gender', 'Insert input gender').notEmpty().isIn(['action', 'terror', 'comedy', 'romantic', 'suspense', 'fantasy']).withMessage("Type date not validate"),
    check('type', 'Insert input type').notEmpty().isIn(['series', 'movie']).withMessage("Type date not validate"),
    check('visible', 'Insert input visible').notEmpty().isBoolean().withMessage("Type date is boolean"),
    check('score', 'Insert input score').not().isEmpty(),
    validateInputs
], postMovie )


router.put('/vote/:id', [validateJWT,
    check("id", "Not id validate").isMongoId(),
    validateInputs
], updatePoint)


router.post('/banner', [validateJWT,
    check('banner', 'Insert input banner').not().isEmpty(),
    validateInputs
], movieHighlights)


module.exports = router;