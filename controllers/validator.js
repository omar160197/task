const { check } = require('express-validator');
 
exports.addValidation = [
    check('first_name', 'First Name is requied').not().isEmpty(),
    check('last_name', 'Last Name is Required').not().isEmpty(),
    check('last_name', 'Country Code is Required').not().isEmpty(),
    check('country_code', 'Last Name is Required').not().isEmpty(),
    check('phone_numer', 'Last Name is Required').not().isEmpty().isLength(11),
    check('gender', 'Last Name is Required').not().isEmpty(),
    check('birth_date', 'Birth Date is Required').not().isEmpty(),
    check('avatar', 'Avatar is Required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
]
