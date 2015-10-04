module.exports = function(User, Cart, $http, $state, $cookieStore) {
  
  var Order = {};

  Order.create = function(newOrder){
    newOrder.delivered = false;
    newOrder.date = new Date();
    console.log(newOrder);
    $http.post('/api/orders', newOrder).then(res => {
      console.log('**COMPLETED**' + res);
      Order.item = res.data;
      $cookieStore.put('orderInfo', res.data)
      return Order.item;
    });
  };

  // Order.find = function(){
  //   $http.get('/api/orders/' + orderId ).then(res => {
  //     Order.item = res.data;
  //     return Order.item;
  //   })
  // };

  return Order;
};

    // order_id: 'id',
    // user_id: 'integer',
    // date: 'date',
    // delivered: 'boolean' 
