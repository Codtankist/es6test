// GENERATORS

/*
function* bears(){
	var kind = yield 'grizzly'
	yield kind + ' growl'
	console.log('kind is ' + kind);
	return 'done'
}

var bear = bears()
console.log(bear.next().value) // Object {value: "grizzly", done: false}
console.log(bear.next('angry').value)
console.log(bear.next().value)*/

function* topGenerator(i){
	yield i + 1
	yield i + 2	
	yield i + 3
}

function* generator(i){
	yield i;
	yield* topGenerator(i)
	yield i + 10;
}

var gen = generator(10);
	
	console.log(gen.next().value)
	console.log(gen.next().value)
	console.log(gen.next().value)
	console.log(gen.next().value)
	console.log(gen.next().value)