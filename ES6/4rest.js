function f(x, ...y) {
  // y is an Array

  for (let item of y) {
	  console.log(item); // logs "hello", true
  }

  return x * y.length;

}
f(3, "hello", true)