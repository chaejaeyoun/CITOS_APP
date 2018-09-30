var Observable = require('FuseJS/Observable');


var iD = this.Parameter;

var id = Observable();

function Setting(){
	console.log(iD._values);
	id = iD._values;
	router.push("Qrscan", id);
	console.log("Move to Qrscan");
}



module.exports = {
	Setting : Setting,
	iD : iD,
	id : id
};
