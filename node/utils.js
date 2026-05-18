function sum(value1, value2) {
  return value1 + value2;
}

function greet() {
  return "hello world, Namesta";
}

export function square(value) {
  return value * value;
}
// module.exports = { sum };
export { sum };

export default greet;
