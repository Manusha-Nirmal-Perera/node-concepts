
const lodash = require('lodash')

const names= ["manusha", "nirmal", "perera"];

const capitalize = lodash.map(names, lodash.capitalize)

console.log(capitalize);
