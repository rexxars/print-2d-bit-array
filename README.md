print-2d-bit-array
==================

Prints 2D-arrays of bits. Supports [ndarray](https://github.com/mikolalysenko/ndarray).

[![Build Status](https://travis-ci.org/rexxars/print-2d-bit-array.svg?branch=master)](https://travis-ci.org/rexxars/print-2d-bit-array)

[![testling badge](https://ci.testling.com/rexxars/print-2d-bit-array.png)](https://ci.testling.com/rexxars/print-2d-bit-array)

## Example

``` js
var printBitArray = require('print-2d-bit-array');
var input = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
];

console.log(printBitArray(input, {
    doubleWidth: true
}));

/* Outputs: 
██████████
██░░░░░░██
██░░██░░██
██░░░░░░██
██████████
*/
```

## Options

  - doubleWidth (boolean) - Whether to print two characters instead of one, to make up for thinner characters. Default: false
  - characters: (array) - Characters to use when printing. First element represents 0, second represents 1. Default: ['░', '█']


## Installing

Install the module using npm:

``` sh
npm install print-2d-bit-array
```

Also works in the browser using browserify.