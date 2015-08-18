"use strict"

function countIngots(report) {
    var number = null
    var result = null
    var arrayReport = report.split(',')
    var ALPHABET = [
        "A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X",
        "Y", "Z"
    ]
    
    ALPHABET.map(function(letter) {
        arrayReport.map(function(rep) {
            if (rep.charAt(0) === letter) {
                number = parseInt(rep.charAt(1))
                var indexLetter = ALPHABET.indexOf(letter)
                result += indexLetter * 10 + number - indexLetter
            }
        })
    })
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
