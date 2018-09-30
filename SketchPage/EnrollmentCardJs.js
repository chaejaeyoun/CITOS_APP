var Observable = require('FuseJS/Observable');

var Id = this.Parameter;

var iD = Observable();

var Cardnum = Observable();
var Cardpassword = Observable();
var DateMY = Observable();
var CVVnum = Observable();


function SaveCard(){
    console.log('cardsave'); //Sign_in 함수가 호출되었는지 확인
    console.log(JSON.stringify(Id));
    console.log(Id._values);
    //console.log(JSON.stringify(Id));

    var otp = ({
	            	'userid' : Id._values,
	            	'cardpw' : Cardpassword.value,
	            	'cardnum' : Cardnum.value,
	            	'mmyy' : DateMY.value,
	            	'cvv' : CVVnum.value
	            	
	              });

	fetch('http://52f05b35.ngrok.io/card/add',{
	            method: "POST",
	            headers: {
	            	"Content-type": "application/json"
	            },
	            body : JSON.stringify(otp)
	        }).then((res)=>{ return res.json()

	        // }).then((res)=>{ return res.json() 

	        }).then((res)=>{
	            // console.log( JSON.parse(res._bodyInit).documents[1].address_name )
	            console.log(JSON.stringify(res));
	            console.log(res.success);

	            iD = Id._values;

	            if( JSON.parse(res.success) == true){
	            	router.push("CardSetting",iD);
	            	console.log("Move to CardSetting");
	            }
	            
	            // JSON.parse(res._bodyInit).documents[1].address_name
	        }).catch((err)=>{
	            console.log(err);
	        });

}




function back(){
	router.push("AddCard");
	console.log("Move to AddCard");
}



module.exports = {
	back : back,
	SaveCard : SaveCard,
	Cardnum : Cardnum,
	Cardpassword : Cardpassword,
	DateMY : DateMY,
	CVVnum : CVVnum,
	Id : Id,
	iD : iD
};
