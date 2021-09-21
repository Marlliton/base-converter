const Stack = require("./stack.js");

const baseConverter = (decNumber, base) => {
  const restStack = new Stack();

  const digits = "0123456789ABCDEF";
  let num = decNumber;
  let rest;
  let baseString = "";

  if (!(base >= 2 && base <= 16)) return;
  if (!(base == 2 || base == 16 || base == 8)) return;
  

  while (num > 0) {
    rest = Math.floor(num % base);
    restStack.push(rest);
    num = Math.floor(num / base);
  }

  while (restStack.size() > 0) {
    baseString += digits[restStack.pop()];
  }

  return baseString;
};

module.exports = baseConverter;
