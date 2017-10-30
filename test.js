'use strict'

require('mocha')

const allEqual = require('./')
const should = require('should')

describe('equal', function() {
  it('should return false', function() {
    allEqual([1, 1, 2]).should.equal(false)
    allEqual([1, 1, 1], [1, 2, 1]).should.equal(false)
    allEqual([1, 1], [1, 2, 1, 1], [1, 3, 1]).should.equal(false)
  }),
  it('should return true', function() {
    allEqual([1, 1, 1]).should.equal(true)
    allEqual([1, 1, 1], [2, 2, 2]).should.equal(true)
    allEqual([1, 1], [2, 2, 2, 2], [3, 3]).should.equal(true)
  })
})