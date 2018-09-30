var Observable = require('FuseJS/Observable');
var qreader = require('Qreader');


var ID = this.Parameter;

var Id = Observable("");

var tmp = Observable("");
var bill = Observable("");

function back()
{
    console.log("goback");
    router.push("LogIn");
     
}


function Add(){
	router.push("EnrollmentCard");
	console.log("Move to EnrollmentCard");
	console.log(JSON.stringify(ID));
	console.log(ID._values);
	Id = ID._values;
 	router.push("EnrollmentCard", Id);	
    
}


function scan() {

	qreader.scan().then(function (res) {

	//JSON.parse는 스트링을 제이슨으로 바꿔줌
	tmp = JSON.parse(res);
	console.log(JSON.stringify(res));


	console.log(tmp.menu);
    console.log(tmp.price);
    console.log(ID._values);

    router.push("Costpassword");
	console.log("Move to Costpassword");
	
	// bill = ({
 //        		'userid' : ID._values,
 //            	'menu' : tmp.menu,
 //            	'price' : tmp.price
 //              });

	// console.log("Move to Costpassword");

	// fetch('http://52f05b35.ngrok.io/qrcode/qrbill',{
	//             method: "POST",
	//             headers: {
	//             	"Content-type": "application/json"
	//             },
	//             body : JSON.stringify(bill)
	//         }).then((res)=>{ return res.json()
	//         }).then((res)=>{
	//             // console.log( JSON.parse(res._bodyInit).documents[1].address_name )
	//             console.log(JSON.stringify(res));


	//             if( JSON.parse(res.success) == true){
	//             	router.push("Costpassword");
	//             	console.log("Move to Costpassword");
	//             }
	            
	//             // JSON.parse(res._bodyInit).documents[1].address_name
	//         }).catch((err)=>{
	//             console.log(err);
	//         });


	})
}

module.exports = {
	Add : Add,
	back : back,
	ID : ID,
	Id : Id,
	scan : scan
};
