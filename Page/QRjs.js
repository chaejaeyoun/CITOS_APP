var Observable = require('FuseJS/Observable');
var qreader = require('Qreader');
// var MainView = require('../MainView');

var Id = this.Parameter;



var txt = Observable();

function goBack()
{
    console.log("goback");
    router.push("Home");
     
}


    // var opts = ({
    //         	'username' : MainVew.userid.value,
    //             'menu' : password.value,
    //             'price' : password.value,
    //             'buytime' : password.value,
    //           });

var tmp = Observable();


function load () {
	//qr코드상에서 json형식을 string으로 변화하여 보내줘서 res는 string으로 옴
	qreader.scan().then(function (res) {

	//JSON.parse는 스트링을 제이슨으로 바꿔줌
	tmp = JSON.parse(res);

	console.log(JSON.stringify(res));

	txt.value = res;

	})
}



function Clicked () {

	console.log(tmp.menu);
    console.log(tmp.price);
    console.log(Id._values);
	
	var bill = ({
        		'userid' : Id._values,
            	'menu' : tmp.menu,
            	'price' : tmp.price
              });

	fetch('http://e4b6c854.ngrok.io/qrcode/qrbill',{
	            method: "POST",
	            headers: {
	            	"Content-type": "application/json"
	            },
	            body : JSON.stringify(bill)
	        }).then((res)=>{ return res.json()
	        }).then((res)=>{
	            // console.log( JSON.parse(res._bodyInit).documents[1].address_name )
	            console.log(JSON.stringify(res));


	            if( JSON.parse(res.success) == true){
	            	router.push("Home");
	            	console.log("Move to Home");
	            }
	            
	            // JSON.parse(res._bodyInit).documents[1].address_name
	        }).catch((err)=>{
	            console.log(err);
	        });
}





module.exports = {
	goBack : goBack,
	load: load,
 	txt: txt,
 	Id : Id,
 	tmp : tmp,
 	Clicked : Clicked
};
