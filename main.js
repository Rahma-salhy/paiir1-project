function addItem() {
    var itemName = document.getElementById("addItemName").value;
    addItemToCollection(stockCollection, itemName);
    displayItems(stockCollection, "itemsContainer");
  }


  
  function addItemToCollection(collection, itemName) {
    for (var i = 0; i < stockCollection.length; i++) {
      if (stockCollection[i].name === itemName) {
        collection.push(stockCollection[i]);
        return;
      }
    }
  }


function searchItems() {
  var search = document.getElementById("search").value;
  var result = searchItem(mensCollection, search);
  displayItems(result, "itemsContainer");
}

function searchItem(collection, search) {
  return collection.filter(function (item) {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
}

function addToFavorites() {
  var itemName = document.getElementById("favoriteItemName").value;
  for (var i = 0; i < mensCollection.length; i++) {
    if (mensCollection[i].name === itemName) {
      favoriteCollection.push(mensCollection[i]);
      return;
    }
  }

  for (var j = 0; j < womensCollection.length; j++) {
    if (womensCollection[j].name === itemName) {
      favoriteCollection.push(womensCollection[j]);
      return;
    }
  }

  displayItems(favoriteCollection, "favoritesContainer");
}