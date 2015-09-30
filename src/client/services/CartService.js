module.exports = function() {
  var Cart = {};

  Cart.itemList = [];

  Cart.getItems = function () {
    return Cart.itemList;
  }

  Cart.addItem = function(num, obj){

    var arr = Cart.itemList.filter(function(innerItem){
      return innerItem.id == obj.id;
    });
    console.log(arr);
    if(arr.length == 0){
      obj.quantity = Number(num);
      obj.subTotal = obj.quantity * obj.price;
      Cart.itemList.push(obj);
      Cart.addTotalItems();
      return;
    }
    else if(arr.length == 1){
        arr[0].quantity +=1;
        obj.subTotal = obj.quantity * obj.price;
    }
    else {
      console.log('error')
    }
  }

  Cart.findItem = function(index) {
    return Cart.itemList[index];
  };

  Cart.deleteItem = function(index) {
    Cart.itemList.splice(index,1);
    Cart.addTotalItems();
  };

  Cart.addTotalItems = function(){
    var arr = Cart.itemList;
    var sum = 0;
    for(var i in arr ){
      sum += arr[i].quantity; 
    }
    return sum;
  }

  Cart.addTotalPrice = function(items){
    var arr = items;
    var sum = 0;
    for(var i in arr ){
      sum += arr[i].subTotal; 
    }
    return sum;
  } 
  return Cart;
};
