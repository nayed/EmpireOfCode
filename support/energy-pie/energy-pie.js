"use strict"

// http://jonisalonen.com/2012/converting-decimal-numbers-to-ratios/
function float2rat(x) {
    var tolerance = 1.0E-6
    var h1 = 1
    var h2 = 0
    var k1 = 0
    var k2 = 1
    var b = x
    do {
        var a = Math.floor(b)
        var aux = h1
        h1 = a * h1 + h2
        h2 = aux
        aux = k1
        k1 = a * k1 + k2
        k2 = aux
        b = 1 / (b - a)
    } while (Math.abs(x - h1 / k1) > x * tolerance)

    return  h1 + "/" + k1
}

function dividePie(groups) {
    var remain = []
    var robots = null
    var energy = null
    var rep = null
    var total = groups.map(function(grp) {
        if (grp < 0)
            grp = Math.abs(grp)
        robots += grp
        return robots
    })
    groups.map(function(grp) {
        if (grp === groups[0]) {
            if (grp < 0)
                grp = Math.abs(grp)
            energy = grp / robots
            energy = 1 - energy
        }
        else if (grp === groups[1]) {
            if (grp < 0)
                grp = Math.abs(grp)
            energy = (energy) - (grp * (energy / robots))
        }
        else {
            if (grp < 0)
                grp = Math.abs(grp)
            energy = energy - grp / robots
        }
        console.log(energy)
    })
    rep = float2rat(energy)
    remain = rep.split("/")
    remain = remain.map(function(nb) {
        nb = parseInt(nb)
        return nb
    })
    return remain
}

console.log(dividePie([2, -1, 3]))

/*var assert = require("assert")

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.deepEqual(dividePie([2, -1, 3]), [1, 18], "Example")
    assert.deepEqual(dividePie([1, 2, 3]), [0, 1], "All know about the pie")
    assert.deepEqual(dividePie([-1, -1, -1]), [8, 27], "One by one")
    assert.deepEqual(dividePie([10]), [0, 1], "All together")
}
*/