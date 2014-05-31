'use strict';

var test = require('tape'),
    printArray = require('../'),
    ndarray = require('ndarray'),
    ndbits = require('ndarray-bit');

test('prints correct for simple 2D-array', function(t) {
    var expected = '░█░\n█░█\n';
    var input = [
        [0, 1, 0],
        [1, 0, 1]
    ];

    t.equal(printArray(input), expected);
    t.end();
});

test('can use different characters', function(t) {
    var expected = '  .\n ..\n...\n';
    var input = [
        [0, 0, 1],
        [0, 1, 1],
        [1, 1, 1]
    ];

    t.equal(printArray(input, {
        characters: [' ', '.']
    }), expected);
    t.end();
});

test('can use double width', function(t) {
    var expected = '░░██░░\n██░░██\n';
    var input = [
        [0, 1, 0],
        [1, 0, 1]
    ];

    t.equal(printArray(input, {
        doubleWidth: true
    }), expected);
    t.end();
});

test('can use ndarrays', function(t) {
    var expected = '█░\n░█\n';
    var input = ndarray(new Int8Array([1, 0, 0, 1]), [2, 2]);

    t.equal(printArray(input), expected);
    t.end();
});

test('can print the octocat', function(t) {
    var input = [
        3758618655, 2481045507, 670087161, 4293984240,
        4293984240, 2281244664, 3221455841, 4162838535, 0
    ];

    var expected = [
        '██████████░░░░░░░░░░░░██████████',
        '██████░░░░░░░░░░░░░░░░░░░░██████',
        '████░░░░░░░░░░░░░░░░░░░░░░░░████',
        '██░░░░░░██░░░░░░░░░░████░░░░░░██',
        '██░░░░░░████████████████░░░░░░██',
        '░░░░░░████████████████████░░░░░░',
        '░░░░░░████████████████████░░░░░░',
        '░░░░░░████████████████████░░░░░░',
        '░░░░░░████████████████████░░░░░░',
        '░░░░░░████████████████████░░░░░░',
        '░░░░░░░░████████████████░░░░░░░░',
        '██░░░░░░░░░░████████░░░░░░░░░░██',
        '██░░░░████░░████████░░░░░░░░░░██',
        '████░░░░████████████░░░░░░░░████',
        '██████░░░░░░████████░░░░░░██████',
        '██████████░░████████░░██████████'
    ].join('\n') + '\n';

    var octocat = ndbits([16, 16]);
    octocat.data.bits.set(input);

    t.equals(printArray(octocat, { doubleWidth: true }), expected, 'should be equal the octocat');
    t.end();
});