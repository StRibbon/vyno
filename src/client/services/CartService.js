module.exports = function($cookieStore) {
  var Cart = {};

  Cart.getMyCart = function () {
    Cart.myCart = $cookieStore.get('myCart');
    return Cart.myCart;
  }

  Cart.itemList = [];

  Cart.updateMyCart = function(){
    $cookieStore.put('myCart', Cart.itemList);
  };

  Cart.updateItem = function (index, item) {
    console.log(item);
    var obj = Cart.getMyCart().filter(function(innerItem){
      return innerItem.id == item.id;
    });
    obj[0].quantity = item.quantity;
    obj[0].subTotal = item.quantity * item.price;
    console.log(obj);
    Cart.itemList = Cart.getMyCart();
    Cart.itemList[index].quantity = obj[0].quantity;
    Cart.itemList[index].subTotal = obj[0].subTotal;
    Cart.updateMyCart();
    Cart.addTotalPrice(Cart.getMyCart());
  }

  Cart.addItem = function(num, obj){
    var arr = Cart.itemList.filter(function(innerItem){
      return innerItem.id == obj.id;
    });
    if(arr.length == 0){
      obj.quantity = Number(num);
      obj.subTotal = obj.quantity * obj.price;
      Cart.itemList.push(obj);
      Cart.getTotalItemsInCart();
      Cart.updateMyCart();
      return;
    }
    else if(arr.length == 1){
        arr[0].quantity +=1;
        obj.subTotal = obj.quantity * obj.price;
    }
    else {
      console.log('error');
    }
    Cart.updateMyCart();
  }

  Cart.findItem = function(index) {
    return Cart.itemList[index];
  };

  Cart.deleteItem = function(index) {
    debugger
    Cart.itemList.splice(index,1);
    Cart.updateMyCart();
    Cart.getTotalItemsInCart();
  };

  Cart.getTotalItemsInCart = function(){
    var arr = Cart.getMyCart();
    var sum = 0;
    for(var i in arr ){
      sum += arr[i].quantity; 
    }
    return sum;
  }

  Cart.addTotalPrice = function(){
    var arr = Cart.getMyCart();
    var sum = 0;
    for(var i in arr ){
      sum += arr[i].subTotal; 
    }
    $cookieStore.put('totalPrice', sum);
    return sum;
  }
  // Cart.getTotalPrice = function(){
  //   $cookieStore.get('totalPrice');
  // }
  return Cart;
};
