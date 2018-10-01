var Observable = require('FuseJS/Observable');
var qreader = require('Qreader');


var ID = this.Parameter;

var tmp = Observable();
var txt1 = Observable();
var txt2 = Observable();

var Cardnum = Observable();
var Cardpassword = Observable();
var DateMY = Observable();
var CVVnum = Observable();

var costpassword = Observable();

var Id = Observable();
var Menu = Observable();
var Price = Observable();

//AddCardJs 부분
function back1()
{
    console.log("goback");
    router.push("LogIn");
     
}


function Add(){
	router.push("EnrollmentCard");
	console.log("Move to EnrollmentCard");
	console.log(JSON.stringify(ID));
	console.log(ID._values);
	Id = ID._values
 	router.push("EnrollmentCard", Id);	
    
}


function scan1() {

    Id = ID._values


    router.push("Qrscan", Id);
	console.log("Move to Qrscan");
	
}

//-----------------------------------------------
	//EnrollmentCard



function back2(){
	router.push("AddCard");
	console.log("Move to AddCard");
}



function SaveCard(){
    console.log('cardsave'); //Sign_in 함수가 호출되었는지 확인
    console.log(JSON.stringify(ID));
    console.log(ID._values);
    //console.log(JSON.stringify(Id));

    var otp = ({
	            	'userid' : ID._values,
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

	            Id = ID._values

	            if( JSON.parse(res.success) == true){
	            	router.push("CardSetting", Id);
	            	console.log("Move to CardSetting");
	            }
	            
	            // JSON.parse(res._bodyInit).documents[1].address_name
	        }).catch((err)=>{
	            console.log(err);
	        });

}

function scan2() {

	qreader.scan().then(function (res) {

	//JSON.parse는 스트링을 제이슨으로 바꿔줌
	tmp = JSON.parse(res);
	console.log(JSON.stringify(res));
	txt.value = res;



	console.log(tmp.menu);
    console.log(tmp.price);
    console.log(ID._values);
 	Id = ID._values


    router.push("Qrscan", Id);
	console.log("Move to Qrscan");
	

	})
}

// ------------------------------------------------

// CardSetting부분

function back3(){
	router.push("AddCard");
	console.log("Move to AddCard");
}


function Setting(){
	console.log(ID._values);
	Id = ID._values

	router.push("Qrscan", Id);
	console.log("Move to Qrscan");
}

function scan3() {

	qreader.scan().then(function (res) {

	//JSON.parse는 스트링을 제이슨으로 바꿔줌
	tmp = JSON.parse(res);
	console.log(JSON.stringify(res));
	txt.value = res;

	console.log(tmp.menu);
    console.log(tmp.price);
    console.log(ID._values);
    Id = ID._values


    router.push("Qrscan", Id);
	console.log("Move to Qrscan");
	

	})
}

// -----------------------------------------------
// Qrscan 부분


function back4(){
	router.push("CardSetting");
	console.log("Move to CardSetting");
}



function scan4() {

	qreader.scan().then(function (res) {

	//JSON.parse는 스트링을 제이슨으로 바꿔줌
	tmp = JSON.parse(res);
	console.log(JSON.stringify(res));
	txt1.value = tmp.price;
	txt2.value = JSON.stringify(tmp.menu);

	})
}

function Clicked () {

	console.log(tmp.menu);
    console.log(tmp.price);
    console.log(ID._values);
    // TMP = ({
    //     		'userid' : ID._values,
    //         	'menu' : tmp.menu,
    //         	'price' : tmp.price,
    //           });

    Id = ID._values;
    Menu = tmp.menu;
    Price = tmp.price;

	router.push("Costpassword",{Id, Menu, Price});
	console.log("Move to Costpassword");

}


// -----------------------------------------------

	// Costpassword


function back5(){
	router.push("Qrscan");
	console.log("Move to Qrscan");

}


function next(){
	console.log(JSON.stringify(ID));
	// console.log(ID._values[0]);



	var info = ({
        		'info' : ID._values,
            	// 'menu' : tmp.menu,
            	// 'price' : tmp.price,
        		'Costpassword' : costpassword.value
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

	            Id = ID._values

	            if( JSON.parse(res.success) == true){
	            	router.push("Costresult", Id);
	            	console.log("Move to Costresult");
	            }
	            
	            // JSON.parse(res._bodyInit).documents[1].address_name
	        }).catch((err)=>{
	            console.log(err);
	        });



}









module.exports = {
	//AddCard
	back1 : back1,
	Add : Add,
	ID : ID,
	scan1 : scan1,

	//EnrollmentCard
	back2 : back2,
	SaveCard : SaveCard,
	Cardnum : Cardnum,
	Cardpassword : Cardpassword,
	DateMY : DateMY,
	CVVnum : CVVnum,
	scan2 : scan2,

	// CardSetting
	back3 : back3,
	Setting : Setting,
	scan3 : scan3,
	
	// Qrscan
	back4 : back4,
	scan4 : scan4,
	txt1 : txt1,
	txt2 : txt2,
	Clicked : Clicked,
	tmp : tmp,
	Menu : Menu,
	Price : Price,

	// Costpassword
	back5 : back5,
    next : next,
    costpassword : costpassword

};
