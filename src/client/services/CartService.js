module.exports = function() {
  var Cart = {};
  Cart.count =0;
  Cart.num =0;

  Cart.itemList = [];

  Cart.getItems = function () {
    return Cart.itemList;
  }

  Cart.addItem = function(num, obj) {
    Cart.count += Number(num);
    obj.quantity = Number(num);
    obj.subTotal = obj.quantity * obj.price;
    Cart.itemList.push(obj);
  };

  Cart.findItem = function(index) {
    return Cart.itemList[index];
  };

  Cart.deleteItem = function(index) {
    Cart.itemList.splice(index,1);
  };

  Cart.badge = function(){
    return Cart.count;
  }
  Cart.addTotalItems = function(items){

    var arr = items;
    var sum = 0;
    for(var i in arr ){
      sum += arr[i].quantity; 
    }
    return sum;
  }
  Cart.addTotal = function(items){

    var arr = items;
    var sum = 0;
    for(var i in arr ){
      sum += arr[i].subTotal; 
    }
    return sum;
  }
  
  return Cart;
};
