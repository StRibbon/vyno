exports.up = function(pgm) {
  pgm.createTable('orders', {
    order_id: 'id',
    user_id: 'integer',
    date: 'date',
    delivered: 'boolean' 
  });
};

exports.down = function(pgm) {

};
