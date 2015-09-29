exports.up = function(pgm) {
  pgm.createTable('orders', {
    id: 'id',
    cost: 'numeric',
    date: 'date',
    location: 'serial',
    delivered: 'boolean' 
  });
};

exports.down = function(pgm) {

};
