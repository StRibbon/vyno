exports.up = function(pgm) {
  pgm.createTable('orders', {
    id: 'id',
    cost: 'numeric'
    date: 'text',
    location: 'serial',
    delivered: 'boolean' 
  });
};

exports.down = function(pgm) {

};
