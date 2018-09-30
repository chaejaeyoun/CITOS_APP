var Observable = require("FuseJS/Observable");

var userid = Observable();
var password = Observable();

function Signin(){
    console.log('sign'); //Sign_in 함수가 호출되었는지 확인
    var opts = {
	            	'userid' : userid.value,
	                'password' : password.value
	              };
	fetch('http://dbb3914d.ngrok.io/users/signin',{
	            method: "POST",
	            headers: {
	            	"Content-type": "application/json"
	            },
	            body : JSON.stringify(opts)
	        }).then((res)=>{
	        	return res.json();
	            // console.log( JSON.parse(res._bodyInit).documents[1].address_name )
	            // console.log(JSON.stringify(res));
	            // JSON.parse(res._bodyInit).documents[1].address_name
	        }).catch((err)=>{
	            console.log(err);
	        });

}

function SignClicked(){	
    console.log("Move to Page.Home");
    router.push("Home");

}


module.exports = {
	Signin : Signin,
	userid : userid,
	password : password,
	SignClicked : SignClicked
};