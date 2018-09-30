var Observable = require("FuseJS/Observable");

function goBack()
{
  router.goBack();
  console.log("goback");    
}

var images = Observable();
 // GetImage();
function GetImage(){

  // images.clear();

  fetch('https://dog.ceo/api/breeds/image/random', {
              method: 'GET', 
              headers: { 
                "Content-type": "application/json",
                "x-api-key": "663dde0a-12c7-445c-a072-c66ef62f64b6"
              }})
              .then((res)=>{ return res.json()})
              .then(function(response) {
                  console.log(JSON.stringify(response));
                  console.log(JSON.stringify(response));
                  console.log(response.message);
                  images.value =response.message;
                  // images.value = (response.message);

                  // var getimg = response.message;
                  // for(var i=0; i<getimg.length; i++){
                  //     status.value = getimg[i].status;
                  //     message.value = getimg[i].message;
                  //     // images.add(getimg[i]);
                  // }
                  // console.log(getimg[0].massage);
                  // var instance = {
                  //     status: response.status,
                  //     message: response.message,
                  //     topColor: "#cdb8b5",
                  //     bottomColor: "#4f3250"
                  //   }
                  // images.add(instance)
                  // console.log(JSON.stringify(images.value));
        });
   }







module.exports = {
    goBack : goBack,
    images : images,
    GetImage : GetImage

}