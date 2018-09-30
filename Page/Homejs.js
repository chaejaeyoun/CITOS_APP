var Observable = require("FuseJS/Observable");

var ID = this.Parameter;

// var userid = ID.map(function(x) { return x.userid; });

var Id = Observable("");

function goBack()
{
    console.log("goback");
    router.push("Login");
     
}



function GetClicked(){
 	router.push("Getpage");	
    console.log("Move to Getpage");
   

}

function QRClicked(){
	console.log(JSON.stringify(ID));
	console.log(ID._values);
	Id = ID._values;
 	router.push("QRpage", Id);	
    console.log("Move to QRpage");
   

}

function CardClicked(){
	console.log(JSON.stringify(ID));
	console.log(ID._values);
	Id = ID._values;
 	router.push("Cardpage", Id);	
    console.log("Move to Cardpage");
   

}


module.exports = {
	goBack : goBack,
	GetClicked : GetClicked,
	QRClicked : QRClicked,
	CardClicked : CardClicked,
	// userid : userid,
	ID : ID,
	Id : Id
};
