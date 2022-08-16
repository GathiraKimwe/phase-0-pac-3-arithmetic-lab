function add(a, b) {
    return parseFloat(a) + parseFloat(b);
  }
  
  function subtract(a, b) {
    return parseFloat(a) - parseFloat(b)
  }
  
  function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
  }
  
  function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
  }
  
  function increment(n) {
    let result = parseFloat(n) + 1;
    return result;
  }
  
  function decrement(n) {
    n = parseFloat(n) - 1;
    return n--;
  }
  
  function makeInt(n) {
    return parseInt(n, 10);
  }
  
  function preserveDecimal(n) {
    return parseFloat(n);
  }