/**
 *
 * @param {Number} n
 */
function test(n) {
  let res = 0;
  for (let i = 0; i <= n; ++i) {
    res += i;
  }
  return res;
}

console.log(test(3));
