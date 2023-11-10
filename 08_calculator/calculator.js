const add = function(a, b) {
  return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(array) {
	var sum = 0
  array.forEach(index => {
    sum += index
  });
  return sum
};

const multiply = function(array) {
	var sum = 1
  array.forEach(index => {
    sum *= index
  });
  return sum
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
	var sum = 1
  if (a === 0) return 1
  for (let i = a; i > 0; i--) {
    sum *= i;
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
