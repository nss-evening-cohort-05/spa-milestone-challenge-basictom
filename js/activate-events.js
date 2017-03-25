var CarLot = (function(myCar){
var carHolder = document.getElementsByClassName("car-holder");

  myCar.activateEvents = function (){
    console.log("car", carHolder);
    function addStyles(){
      carHolder.focus();

    }
    // carHolder.focus();
    // carHolder.addEventListener("click", activateEvents);
  }

document.body.addEventListener("click", CarLot.addStyles);

	return myCar;

})(CarLot || {});


//
// var myInput = document.getElementById("txtField");
//
// if (myInput.value < 0 || myInput.value > 1000) {
// myInput.value = '';
// return outPut.innerHTML += "I said between 0 and 1000.";
// }
//
// if (myInput.value == "") {
// return outPut.innerHTML += "Please enter a number between 0 and 1000!!!";		 }
//
// if (myInput.value > randomNumber) {
// myInput.value = '';
// outPut.innerHTML += "Too High !!!";
// }
//
// if (myInput.value < randomNumber) {
// myInput.value = '';
// outPut.innerHTML += "Too low !!!";
// }
