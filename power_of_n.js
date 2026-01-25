function power(n, p) {
  // base condition
  if (p === 0) return 1;
  // approch
  return n * power(n, p - 1);
}
console.log(power(2, 3)); // 8
