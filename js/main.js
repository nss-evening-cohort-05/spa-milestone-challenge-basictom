var newCar = document.getElementById("new-car");


function populatePage (inventory) {
  newProduct = "";
  console.log("iwehfowphe", newProduct);
  for(var i=0;i<inventory.length;i++){
      // currentProduct = discount.products[i];
      newProduct += `<div class="col-sm-6 col-md-4">`;
      newProduct += `<h3>${inventory[i].make}<br />${inventory[i].model}</h3>`;
      newProduct += `<div class="thumbnail">`;
      newProduct += `<div class="caption">`;
      newProduct += `<p>${inventory[i].year}</p>`;
      newProduct += `<p>${inventory[i].price}</p>`;
      newProduct += `<p>${inventory[i].description}</p>`;
      newProduct += `</div></div></div>`;
    }
  // Now that the DOM is loaded, establish all the event listeners needed
  console.log(newProduct);
  newCar.innerHTML = newProduct;
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(CarLot.carIn);

console.log(CarLot.carIn);
