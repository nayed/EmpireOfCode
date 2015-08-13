"use strict"

function countUnits(number) {
    var binary = number.toString(2)
    var sNumber = binary.toString()
    var output = []
    for (var i = 0; i < sNumber.length; i++) {
        output.push(+sNumber.charAt(i))
        var sum = 0
        for (var z = 0; z < output.length; z++) {
            sum += output[z]
        }
    }
    return sum
}

var assert = require('assert')

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countUnits(4), 1, "0b100")
    assert.equal(countUnits(15), 4, "0b1111")
    assert.equal(countUnits(1), 1, "0b1")
    assert.equal(countUnits(1022), 9, "0b1111111110")
}
