function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= num; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

function calculateFibonacci() {
  const num = parseInt(document.getElementById('num').value);
  const result = fibonacci(num);
  document.getElementById('result').textContent = `The ${num}th Fibonacci number is: ${result}`;
}
