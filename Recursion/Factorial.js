function findFactorialRecursive(numer) {
  if (numer <= 1) {
    return 1;
  }
  return numer * findFactorialRecursive(numer - 1);
}

function findFactorialIterative(numer) {
  let res = 1;
  for (let i = 1; i <= numer; i++) {
    res = res * i;
  }
  return res;
}

const res1 = findFactorialRecursive(5);
const res2 = findFactorialIterative(5);

console.log(res1, res2);
