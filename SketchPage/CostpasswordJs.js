var Observable = require("FuseJS/Observable");

var bill = this.Parameter;



var Cardpassword = Observable();


function back(){
	router.push("Qrscan");
	console.log("Move to Qrscan");

}


function check(){
	console.log(JSON.stringify(bill));
	console.log(JSON.stringify(bill._values));
	console.log(bill._values.menu);
}



function next(){
	// router.push("Costresult");
	// console.log("Move to Costresult");
	console.log(JSON.stringify(bill));
	console.log(JSON.stringify(bill._values));
	console.log(bill._values.menu);

	var info = ({
        		'info' : bill._values,
        		'Cardpassword' : Cardpassword.value
              });

	fetch('http://52f05b35.ngrok.io/qrcode/qrbill',{
	            method: "POST",
	            headers: {
	            	"Content-type": "application/json"
	            },
	            body : JSON.stringify(info)
	        }).then((res)=>{ return res.json()
	        }).then((res)=>{
	            // console.log( JSON.parse(res._bodyInit).documents[1].address_name )
	            console.log(JSON.stringify(res));


	            if( JSON.parse(res.success) == true){
	            	router.push("Costresult");
	            	console.log("Move to Costresult");
	            }
	            
	            // JSON.parse(res._bodyInit).documents[1].address_name
	        }).catch((err)=>{
	            console.log(err);
	        });



}





module.exports = {
    back : back,
    next : next,
    Cardpassword : Cardpassword,
    bill : bill,
    check : check

};