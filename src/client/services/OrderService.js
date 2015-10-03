module.exports = function(User, Cart, Map) {
  
  var Order = {};

  Order.obj = {
    user_id: '',
    delivered: false
  }

  Order.getOrder = function(){
     
  }
  Order.create = function(order){
    $http.post('/api/orders', order).then(res => {
      console.log('**COMPLETED**' + order);
    });
  };

  return Order;
};

    // order_id: 'id',
    // user_id: 'integer',
    // date: 'date',
    // delivered: 'boolean' 
