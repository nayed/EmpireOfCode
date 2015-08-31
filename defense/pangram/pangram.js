"use strict"

function checkPangram(text) {
    var s = text.toLowerCase()
    var letters = "abcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i < 26; i++) {
        if (s.indexOf(letters.charAt(i)) == -1)
            return false
    }
    return true
}

var assert = require('assert')

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(checkPangram("The quick brown fox jumps over the lazy dog."), true, "brown fox")
    assert.equal(checkPangram("ABCDEF"), false, "ABC")
    assert.equal(checkPangram("Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!"), true, "Bored?")
}
