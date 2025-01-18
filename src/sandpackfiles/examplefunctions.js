export function helloWorld() {
  console.log('Hello, world!');
}

export function greetUser() {
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  greet('Jessica');
}

export function sumTwoNumbers() {
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(3, 5));
}

export function functionToString(func) {
  return func.toString();
}
