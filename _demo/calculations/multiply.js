// method that multiplies any number of args
function multiply() {
    var result = 1;
    for (var i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}
module.exports = multiply;

