console.log("hello");

var CarLot = (function () {
  var inventory = [];

  function carIn(){
    var inventory = JSON.parse(this.responseText).cars;
    populatePage(inventory);
  }

  function failed(){
    alert("Load failed");
  }

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", carIn);
      inventoryLoader.addEventListener("error", failed);
      inventoryLoader.open("GET", "../inventory.json");
      inventoryLoader.send();
    }
  };

})(CarLot || {});
