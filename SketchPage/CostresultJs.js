var Observable = require('FuseJS/Observable');

function back(){
	router.push("AddCard");
	console.log("Move to AddCard");
}

module.exports = {
	back : back
};
