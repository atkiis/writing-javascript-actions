<<<<<<< HEAD
console.log("Hello World");
=======
>>>>>>> d6d16961f318cfa7d809ddc41cbdc7bc6ce0ce91
const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");

console.log(`Hello ${firstGreeting}`);
console.log(`Hello ${secondGreeting}`);
if (thirdGreeting) {
  console.log(`Hello ${thirdGreeting}`);
}
