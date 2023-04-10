require("dotenv").config();
console.log(process.env.MSG)

const add = require("./add.js")
console.log(`1 + 2 = ${add(1,2)}`)

const mult = require("./calculations/multiply.js")
console.log(`3 * 4 = ${mult(3,4)}`)

const calculations = require("./calculations")
console.log(`5 / 6 = ${calculations.divide(5,6)}`)

const {divide} = require("./calculations")
console.log(`7 / 8 = ${divide(7,8)}`)