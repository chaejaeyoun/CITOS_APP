
var qreader = require('Qreader');
var Observable = require('FuseJS/Observable');
var txt = Observable();

function load () {
	qreader.scan().then(function (res) {
		txt.value = res;
	});
}


module.exports = {
	load: load,
	txt: txt
}
