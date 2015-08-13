"use strict"

function countNeighbours(grid, row, col){
    var enemies = 0

    var locationRow =  {
        'NW': [row - 1], 'N': [row - 1], 'NE': [row - 1],
        'W': [row], 'E': [row],
        'SW': [row + 1], 'S': [row + 1], 'SE': [row + 1]
    }

    var locationCol = {
        'NW': [col - 1], 'N': [col], 'NE': [col + 1],
        'W': [col - 1], 'E': [col + 1],
        'SW': [col - 1], 'S': [col], 'SE': [col + 1]
    }

    for (var keyRow in locationRow) {
        for (var keyCol in locationCol) {
            if ((keyRow === keyCol) && (locationRow[keyRow] >= 0) 
                && (locationCol[keyCol] >= 0) && (grid[locationRow[keyRow]]) 
                && grid[locationRow[keyRow]][locationCol[keyCol]]) {
                    enemies += grid[locationRow[keyRow]][locationCol[keyCol]]
            }
        }
    }
    return enemies
}

var assert = require('assert')

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 1, 2), 3, "1st example")
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example")
    assert.equal(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2), 3, "Dense corner")
    assert.equal(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1), 0, "Single")
    assert.equal(countNeighbours([[1, 0, 1, 0, 1], 
                                  [0, 1, 0, 1, 0], 
                                  [1, 0, 1, 0, 1], 
                                  [0, 1, 0, 1, 0], 
                                  [1, 0, 1, 0, 1], 
                                  [0, 1, 0, 1, 0]], 5, 4), 2, "That one's hard")
}
