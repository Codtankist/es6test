
// let allows you to declare variables that are limited in scope
// to the block, statement, or expression on which it is used. 
// This is unlike the var keyword, which defines a variable globally, 
// or locally to an entire function regardless of block scope. 

/*let type = "Grizzly";
while (true){
	let type = "polar";
	console.log(type);
	break;
}
console.log(type);*/

//const PI = Math.PIl

/*class Bear {
	constructor(){
		this.type = "bear"
	}
	says(sound){
		console.log(this.type + ' says ' + sound);
	}
}

class Grizzly extends Bear {
	constructor(){
		super()
		this.type = 'grizzly' 
	}
}

let bear = new Grizzly();
    bear.says('growl');*/


/*let bears = ['polar', 'koala', 'grizzly'].filter(function(bear){
	return bear !== 'koala';
})*/
// into with arrow functions
/*let bears = ['polar', 'koala', 'grizzly'].filter((bear) => bear !== 'koala');
console.log(bears);*/

// lexical this
/*class Bear {
	constructor(){
		this.type = "bear"
	}
	says(sound){
		setTimeout(function(){ // this is lame
			console.log(this.type + ' says ' + sound);
		}.bind(this), 1000) // this is lame
	}
	says(sound){
		setTimeout(()=>{ 
			console.log(this.type + ' says ' + sound);
		}, 1000) 
	}
}


var bear = new Bear()
	bear.says('ura')*/

// template strings

// this is old
/*var bears = [
	'polar',
	'grizzly',
	'koala'
].join('\n')
console.log(bears);*/
/*
let bears = `
 polar
 grizzly
 koala
`
console.log(bears)
*/

/*let bear = 'grizzly'
let says = function(){
	return 'growl'
} // doesnt work with function returning string
console.log(`${bear} says ${says}`)
*/



/*
let testIt = ['aba', 'sada', ['o', 'b'], 1, null].filter(function(item){
		if(item instanceof Array){		
			return item;
		}
	})

	for (let [key, value] of testIt) {
  		console.log(key, value);
	}*/


//Object Literal Enhancements
/*let bear = 'grizzly'
let says = 'growl'
let zoo  = { bear , says}
// log zoo = { bear : bear , says : says} // old way
console.log(zoo)*/
/*
let bear = { type : 'grizzly', many : 2 }
let { type , many } = bear;
console.log(type , many); // pulling out objects from bear*/


/*let name = 'BOH'
let belt = 'black'

let ninja = {
	belt, name, 
	chop : function(x){ // old way
		console.log(`you choped ${x} times`)
	},

	choping(x){
		console.log(`you choped ${x} times`)
	}

}
console.log(ninja.choping(5))*/

// NEW STRING METHODS
/*
	- repeat  		string.repeat(x) - repeats
	- startsWith	string.startsWith("string", number) - returns boolean
	- endsWith		string.endsWith("string", number) 	- returns boolean
	- includes 		string.includes("search string")	- returns boolean
*/


// default values
/*function bear(type = 'grizzly'){
	console.log(type)
}
bear('polar')
*/
/*function bears(...types){ // spread operator
	console.log(types)
	console.log(...types) // spread operator
}
bears('polar', 'grizzly', 'koala')

let numbersO = [0,0,0]
let numbersD = [...numbersO , 1 , 2 , 3]
console.log(numbersD.length)
console.log(numbersD)

var nums = [2,4,6]

function addNums(a,b,c){
	console.log(a+b+c)
}
addNums(...nums)
// is same as
addNums.apply(undefined, nums);
*/

// ARROW FUNCTIONS

/*let greeting = name => console.log(`${name} says hi`)
	greeting('Noah')*/

/*let ninja = {
	name : "Ria",
	chop(x){
		setInterval (()=>{
			if(x > 0){
				console.log(this.name + `chopped enemy ${x} times`)
				x--;
			}
		}, 1000)
	}
}

ninja.chop(4)*/

// SETS

// array with dublicates conversiot to set and back to array without dublicates

/*let items = ['ola', 4, 5, 5, 4 ,'string', NaN, null, NaN, undefined, 'figaro', 'string']
let itemsInSet = new Set(items);
console.log(items);
console.log(itemsInSet);

let newItems = [...itemsInSet]
// old way to do it would be like this
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var newItemsOldWay = [].concat(_toConsumableArray(itemsInSet));

console.log(newItems)
console.log(newItemsOldWay)*/
