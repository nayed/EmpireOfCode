"use strict"

var VOWELS = "aeiouy"

function translate(phrase) {
    var i = 0
    var trad = ""
    while (i < phrase.length) {
        if (phrase[i] == ' ') {
            trad += phrase[i]
            i++
        } else if (/[aeiouy/]+/.test(phrase.charAt(i))) {
            trad += phrase.charAt(i)
            i += 3
        } else {
            trad += phrase.charAt(i)
            i += 2
        }
    }
    return trad
}

var assert = require("assert")

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(translate("hieeelalaooo"), "hello", "Hi!")
    assert.equal(translate("hoooowe yyyooouuu duoooiiine"), "how you doin", "Joey?")
    assert.equal(translate("aaa bo cy da eee fe"), "a b c d e f", "Alphabet")
    assert.equal(translate("sooooso aaaaaaaaa"), "sos aaa", "Mayday, mayday")
}
