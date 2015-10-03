exports.up = function(pgm) {
  pgm.createTable('order_items', {
    order_id: 'integer',
    item_id: 'integer',
    quantity: 'integer',
    subtotal: 'integer' 
  });
};

exports.down = function(pgm) {

};
