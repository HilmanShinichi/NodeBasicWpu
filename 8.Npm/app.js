const validator = require('validator');
const log = console.log

const isEmail = validator.isEmail('hilman@yahoo.com');

log(isEmail);