// Starter examples (function output expectations are provided in README)

// Start coding here...
function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
console.log(double(5)); 

function makeGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHi = makeGreeter("Hi");
console.log(sayHi("Mia")); 
