var newCar = document.getElementById("new-car");


function populatePage (inventory) {
  newProduct = "";
  for(var i=0;i<inventory.length;i++){
      // currentProduct = discount.products[i];
      newProduct += `<div class="car-holder col-sm-6 col-md-4">`;
      newProduct += `<h3>${inventory[i].make}<br /></h3>`;
      newProduct += `<h4>${inventory[i].model}</h4>`;
      newProduct += `<div class="thumbnail">`;
      newProduct += `<img class="image" src="${inventory[i].img}">`;
      newProduct += `${inventory[i].year}<br>`;
      newProduct += `${inventory[i].price}<br>`;
      newProduct += `<p class="caption">${inventory[i].description}</p>`;
      newProduct += `</div></div>`;
    }
    newCar.innerHTML = newProduct;
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
