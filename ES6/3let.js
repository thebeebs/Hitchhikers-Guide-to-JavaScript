function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
     
    }
    // error, already declared in block
   console.log(x);
  }
}