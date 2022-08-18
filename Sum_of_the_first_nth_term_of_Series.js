// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

function SeriesSum (n) {
    let sum = 1
    let den = 1
    if (n == 0 || n == 1) {
      return n.toFixed(2)
    }
    
    for (i = 1; i < n; i++) {
      sum = sum + (1/(den+3))
      den +=3
    }
    return sum.toFixed(2)
  }