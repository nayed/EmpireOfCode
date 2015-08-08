"use strict"

function countIngots(report) {
    var number = null
    var result = null
    var arrayReport = report.split(',')
    var ALPHABET = {
        0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F",
        6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L",
        12: "M", 13: "N", 14: "O", 15: "P", 16: "Q", 17: "R",
        18: "S", 19: "T", 20: "U", 21: "V", 22: "W", 23: "X",
        24: "Y", 25: "Z"
    }
    
    for (var key in ALPHABET) {
        for (var i = 0; i < arrayReport.length; i++) {
            if (arrayReport[i].charAt(0) === ALPHABET[key]) {
                number = parseInt(arrayReport[i].charAt(1))
                result += key * 10 + number - key
            }
        }
    }
    return result
}

var assert = require('assert')

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countIngots("A2,B1"), 12, "Two and ten")
    assert.equal(countIngots("A1,A1,A1"), 3, "One, two, three")
    assert.equal(countIngots("Z9,X8,Y7"), 672, "XYZ")
    assert.equal(countIngots("C1,D1,B1,E1,F1"), 140, "Daily")
}
