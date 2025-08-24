function hello(name = "world") {
  return `Hello, ${name}!`;
}
console.log(hello());

module.exports = hello;
