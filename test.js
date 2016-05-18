'use strict'

let Bear = require('./class.js')
let	test = require('tape')

test('should say something', function(assert) {
	var bear 	= new Bear()
	var result 	= bear.growl()
	assert.equal(result, 'The any bear says grrr')
	assert.end()

	
})