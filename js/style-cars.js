console.log("hello");
var CarLot = (function(myCar){
  var newCar = document.getElementById("new-car");
  var search = document.getElementById("search");
  var selectedDesc;
  console.log("not hitting if statement");

  myCar.addStyles = function(e){
    // remove functions callback
    removeBorder();
    if(e.target.classList.contains("car-holder")){
      e.target.childNodes[2].classList.toggle("add-border");
      selectDesc = e.target.childNodes[2].childNodes[5];
      // console.log("car-holder", selectDesc);
    }else if(e.target.classList.contains("thumbnail")){
      e.target.classList.toggle("add-border");
      selectDesc = e.target.childNodes[5];
      console.log("thumbnail-nodes", selectDesc);
    }else if(e.target.classList.contains("image")){
      e.target.parentNode.classList.toggle("add-border");
      selectDesc = e.target;
      console.log("image", e.target.nodeSibling);
    }else if(e.target.classList.contains("caption")){
      e.target.parentNode.classList.toggle("add-border");
      selectDesc = e.target;
    }
    search.focus();
  }

  function mirrorText(){
    selectDesc.innerHTML = search.value;
  }

  function removeBorder(e){
    var carArray = document.getElementsByClassName("thumbnail");
    for(var i=0;i<carArray.length;i++){
      // console.log(carArray[i]);
      carArray[i].classList.remove("add-border");
      search.value = "";
    }
  }
search.addEventListener("keyup", mirrorText);
document.body.addEventListener("click", CarLot.addStyles);

})(CarLot || {});
