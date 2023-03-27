const {Router} = require('express');
const {login, insertUser, userAuth, userById} = require('../controllers/auth');
const {validateJWT} = require('../middlewares');
const {check} = require('express-validator');
const {validateInputs} = require("../middlewares/validate-inputs");

const router = Router();

router.post('/',[
    check('email', "Email input is required").isEmail(),
    check('password', "Password input is required").not().isEmpty(),
    validateInputs
] ,login);

router.post('/register', [
    check('namefull', 'the input name is required').not().isEmpty(),
    check('email', 'the input email is required').isEmail(),
    check('password', 'the input password is required').isLength({min: 6}),
    validateInputs
    ],insertUser);

router.get('/user/:id', [
    validateJWT,
    check('id', 'The input id is required').not().isEmpty().isMongoId(),
    validateInputs
],userById);

router.get('/', validateJWT, userAuth)

module.exports = router;