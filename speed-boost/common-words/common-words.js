"use strict"

function commonWords(first, second) {
    var arrFirst = first.split(",")
    var arrSecond = second.split(",")
    var arrCommon = []
    var commonW = ""
    arrSecond.map(function(sec) {
        return arrFirst.filter(function(fir) {
            if (sec === fir)
                arrCommon.push(fir)
            return arrCommon
        })
    })
    arrCommon.sort()
    arrCommon.map(function(common) {
        if (arrCommon[arrCommon.length - 1] !== common)
            commonW += common + ","
        else
            commonW += common
    })
    return commonW
}

var assert = require("assert")

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(commonWords("hello,world", "hello,earth") == "hello", "Hello")
    assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different")
    assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3")
}
