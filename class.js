//'use strict'

 // module.exports = Bear // this would produce ReferenceError

/*class Bear{
	constructor(type){
		this.type = type || 'any'
	}
	growl(says){
		return 'The ' + this.type + ' bear says' + (says || ' grrr') ;
	}
}

module.exports = Bear
*/

module.exports = Bear

function Bear(type) {
	this.type = type || 'any'
}

Bear.prototype.growl = function growl(says) {
	return 'The ' + this.type + ' bear says' + (says || ' grrr');
};

/*class Grizzly extends Bear {
	constructor(){
		super()
		this.type = 'grizzly' 
	}
}

let bear = new Grizzly();
    bear.says('growl');*/
