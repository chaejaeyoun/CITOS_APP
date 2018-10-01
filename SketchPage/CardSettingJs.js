var Observable = require('FuseJS/Observable');


var iD = this.Parameter;

var id = Observable();

function Setting(){
	console.log(iD._values);
	id = iD._values;
	router.push("Qrscan", id);
	console.log("Move to Qrscan");
}

function back3(){
	router.push("AddCard");
	console.log("Move to AddCard");
}



module.exports = {
	Setting : Setting,
	iD : iD,
	id : id,
	back3 : back3
};
