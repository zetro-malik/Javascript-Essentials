function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  module.exports = {
    add,
    subtract
  };


  //module wrapper function
  // node JS wraps module like this function(eports,require, module, __filename, __dirname)
  // node JS automatically wrape the whole module in this function before running it.
  console.log(exports,require, module, __filename, __dirname)