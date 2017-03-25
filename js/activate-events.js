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
