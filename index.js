'use strict';

var isndarray = require('isndarray');

module.exports = function(array, options) {
    var opts  = options || {}, cx, cy, getter;
    var chars = opts.characters || ['░', '█'];
    var width = opts.doubleWidth ? 2  : 1;

    if (isndarray(array)) {
        cx = array.shape[0];
        cy = array.shape[1];
        getter = array.get.bind(array);
    } else {
        cy = array.length;
        cx = cy > 0 ? array[0].length : 0;
        
        getter = function(x, y) {
            return array[y][x];
        };
    }

    var output = '', row, x, y, i;
    for (y = 0; y < cy; y++) {
        row = [];
        
        for (x = 0; x < cx; x++) {
            for (i = 0; i < width; i++) {
                row.push(getter(x, y) ? chars[1] : chars[0]);
            }
        }

        output += row.join('') + '\n';
    }

    return output;
};