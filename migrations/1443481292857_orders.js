exports.up = function(pgm) {
  pgm.createTable('orders', {
    order_id: 'id',
    user_id: 'integer',
    date: 'text',
    delivered: 'boolean' 
  });
};

exports.down = function(pgm) {

};
