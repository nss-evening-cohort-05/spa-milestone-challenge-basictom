console.log("hello");
var CarLot = (function(myCar){
  var newCar = document.getElementById("new-car");
  var selectedDesc;
  console.log("not hitting if statement");

  myCar.addStyles = function(e){
    // remove functions callback
    removeBorder();
    if(e.target.classList.contains("car-holder")){
      e.target.childNodes[2].classList.toggle("add-border");
      selectedDesc = e.target.childNodes[2].childNodes[0].childNodes[3]
      // console.log("card-holder", selectedDesc);
    }else if(e.target.classList.contains("thumbnail")){
      e.target.classList.toggle("add-border");
      selectedDesc = e.target.childNodes[0].childNodes[3];
    }else if(e.target.classList.contains("caption")){
      e.target.parentNode.classList.toggle("add-border");
      console.log(e.target.childNodes[3]);
    }
    // }else if(e.target.classList.contains("thumbnail")){
    //   selectedDesc = e.target.childNodes[2].childNodes[1];
    //   console.log("it clicked", selectedDesc);
    // }else if(e.target.classList.contains("caption")){
    //   console.log(selectedDesc);
    // }
  }

  function removeBorder(e){
    var carArray = document.getElementsByClassName("thumbnail");
    for(var i=0;i<carArray.length;i++){
      console.log(carArray[i]);
      carArray[i].classList.remove("add-border");
    }
  }

document.body.addEventListener("click", CarLot.addStyles);

})(CarLot || {});
