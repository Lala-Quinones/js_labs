function factorialCalculator(x) {
  let result = 1;
  for (let i = x; i > 0; i--) {
    result *= i;
  }
  return result
}

const factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg);
