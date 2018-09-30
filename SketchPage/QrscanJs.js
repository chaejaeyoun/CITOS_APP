var Observable = require('FuseJS/Observable');
var qreader = require('Qreader');

var id = this.Parameter;

var bill = Observable();
var tmp = Observable();
var txt = Observable();


function back(){
	router.push("CardSetting");
	console.log("Move to CardSetting");
}



function scan() {

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
    console.log(id._values);
	
	bill = ({
        		'userid' : id._values,
            	'menu' : tmp.menu,
            	'price' : tmp.price
              });

	router.push("Costpassword", bill);
	console.log("Move to Costpassword");

	// fetch('http://75dc81ef.ngrok.io/qrcode/qrbill',{
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

}


module.exports = {
	back : back,
	scan : scan,
	txt : txt,
	id : id,
	Clicked : Clicked,
	bill : bill
};
