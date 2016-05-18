
const fetch = require('./utilities/fetch.js')

/*let promise = fetch('bears.txt')
	promise.then(function(items) {
		console.log(items)
		throw new Error('Ou no')
		return fetch('fish.txt').then(function(items){
			console.log(items)})
	}).catch(err=>console.log('error was catched: ' + err))*/

/*
Promise.all([
	fetch('bears.txt'), 
	// Even though the order in which they finish is not guaranteed,
	// the order they are resolved to the "values" array is guaranteed. 
	fetch('fish.txt')
]).then((items) => {
	let bears = items[0]
	let fish  = items[1]
	
	console.log(bears,fish)
})*/

var promise = new Promise((resolve, reject)=>{
	//reject(new Error('Ou no'))
	resolve('all good')
})

promise.then((result)=>{
	console.log('the result is: ' + result)
}).catch((err)=>{
	console.log('Error cathced: ' + err)
})
