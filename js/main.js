var newCar = document.getElementById("new-car");


function populatePage (inventory) {
  newProduct = "";
  for(var i=0;i<inventory.length;i++){
      if(i%3===0){
        newProduct += `<div class="row">`;
      }
      newProduct += `<div class="car-holder col-sm-6 col-md-4">`;
      newProduct += `<h3>Make: ${inventory[i].make}<br /></h3>`;
      newProduct += `<h4>Model: ${inventory[i].model}</h4>`;
      newProduct += `<div class="thumbnail">`;
      newProduct += `<img class="image" src="${inventory[i].img}">`;
      newProduct += `Year: ${inventory[i].year}<br>`;
      newProduct += `Price: ${inventory[i].price}<br>`;
      newProduct += `<p class="caption">Description: ${inventory[i].description}</p>`;
      newProduct += `</div></div>`;
      if(i%3===2){
        newProduct += `</div>`;
      }
    }
    newCar.innerHTML = newProduct;
}

CarLot.loadInventory();
