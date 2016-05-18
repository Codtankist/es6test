function addItem(arr) {
	arr.push('item ' + arr.length)
}

module.exports.addItem = addItem

module.exports = function() {
	debugger
	var items = []
	for (var i = 0; i < 10; i++) {
		addItem(items)
	}
	return items
}