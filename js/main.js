var newCar = document.getElementById("new-car");


function populatePage (inventory) {
  newProduct = "";
  for(var i=0;i<inventory.length;i++){
      // currentProduct = discount.products[i];
      newProduct += `<div class="car-holder col-sm-6 col-md-4">`;
      newProduct += `<h3>${inventory[i].make}<br /></h3>`;
      newProduct += `<h4>${inventory[i].model}</h4>`
      newProduct += `<div class="thumbnail">`;
      newProduct += `<div class="caption">`;
      newProduct += `<img src="${inventory[i].img}">`;
      newProduct += `<p>${inventory[i].year}</p>`;
      newProduct += `<p>${inventory[i].price}</p>`;
      newProduct += `<p>${inventory[i].description}</p>`;
      newProduct += `</div></div></div>`;
    }
    newCar.innerHTML = newProduct;
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
  console.log(inventory);
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
