exports.up = function(pgm) {
  pgm.createTable('orders', {
    id: 'id',
    user_id: 'integer',
    item_id: 'integer'
    quantity: 'integer'
    price: 'numeric',
    date: 'date',
    location: 'integer',
    delivered: 'boolean' 
  });
};

exports.down = function(pgm) {

};
