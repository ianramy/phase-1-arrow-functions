// Function expression for divide
const divide = function() {
    return 2000 / 100;
}

// Arrow function for square
const square = (x) => x * x;

// Arrow function for add
const add = (a, b) => a + b;

// Exporting the functions if needed in a module environment
module.exports = {
    divide,
    square,
    add
};
