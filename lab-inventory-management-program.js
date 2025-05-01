const inventory = [];
  
  function findProductIndex (product) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === product.toLowerCase()) {
        return i; 
    }
    }
    return -1;
  }
  
  function addProduct (product) {
    const index = findProductIndex(product.name);
    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(`${inventory[index].name} quantity updated`);
        return;
    } 
    inventory.push({ name: product.name.toLowerCase(), quantity: product.quantity });
    console.log(`${product.name.toLowerCase()} added to inventory`)
    }
  
  function removeProduct (productName, productQuantity) {
    const index = findProductIndex(productName);    
    if (index === -1) {
        console.log(`${productName.toLowerCase()} not found`);
        return;
    }
        inventory[index].quantity -= productQuantity;

        if (inventory[index].quantity <= 0) {
            console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[index].quantity + productQuantity}`);
            inventory.splice(index, 1);
        } else {
            console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[index].quantity}`);
            }
    }