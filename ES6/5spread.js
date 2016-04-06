function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
var array = [1,2,3];
f(...array) == 6