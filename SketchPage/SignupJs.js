var Observable = require('FuseJS/Observable');

function goBack()
{
	router.push("Login");
    console.log("goback");
    
     
}


var saveid = Observable("");
var savepassword = Observable("");
var savesex = Observable("");
var saveage = Observable("");
var savename = Observable("");

function Save(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://52f05b35.ngrok.io/users/signup',{
	            method: "POST",
	            headers: {
	            	"Content-type": "application/json"
	            },
	            body : JSON.stringify({
	            	'newid' : saveid.value,
	                'newpw' : savepassword.value,
	                'newname' : savename.value,
	                'newage' : saveage.value,
	                'newsex' : savesex.value
	                
	              })
	        }).then((res)=>{ return res.json()
	        }).then((res)=>{
	            // console.log( JSON.parse(res._bodyInit).documents[1].address_name )
	            console.log(JSON.stringify(res));
	            console.log(res.success);

	            if( JSON.parse(res.success) == true){
	            	router.push("LogIn");
	            	console.log("Move to Login");
	            }


	            // JSON.parse(res._bodyInit).documents[1].address_name
	        }).catch((err)=>{
	            console.log(err);
	        });




}






module.exports = {
	goBack : goBack,
	saveid : saveid,
	savepassword : savepassword,
	savesex : savesex,
	saveage : saveage,
	savename : savename,
	Save : Save
};
