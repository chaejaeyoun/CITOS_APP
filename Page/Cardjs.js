var Observable = require('FuseJS/Observable');
// var MainView = require('../MainView.js');

var Id = this.Parameter;

var cardnum = Observable("");
var month = Observable("");
var year = Observable("");
var cardbank = Observable("");
// var userid = Id._values;

var userid = Id.map(function(x) { return x._values; }); //딱히 필요없을 듯

function goBack()
{
  router.goBack();
  console.log("goback");    
}






function SaveCard(){
    console.log('cardsave'); //Sign_in 함수가 호출되었는지 확인
    console.log(JSON.stringify(Id));
    console.log(Id._values);
    //console.log(JSON.stringify(Id));
    


    var otp = ({
	            	'userid' : Id._values,
	            	'cardbank' : cardbank.value,
	            	'cardnum' : cardnum.value,
	            	'year' : year.value,
	            	'month' : month.value
	            	
	              });

	fetch('http://e4b6c854.ngrok.io/card/add',{
	            method: "POST",
	            headers: {
	            	"Content-type": "application/json"
	            },
	            body : JSON.stringify(otp)
<<<<<<< HEAD
	        }).then((res)=>{ return res.json()
=======
	        }).then((res)=>{ return res.json() 
>>>>>>> de35a9065a9fcc28fcdb9bc294651135bb82d3b6
	        }).then((res)=>{
	            // console.log( JSON.parse(res._bodyInit).documents[1].address_name )
	            console.log(JSON.stringify(res));
	            console.log(res.success);

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
	SaveCard : SaveCard,
	cardnum : cardnum,
	month : month,
	year : year,
	cardbank : cardbank,
	Id : Id,
	userid : userid
};
