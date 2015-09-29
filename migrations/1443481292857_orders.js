exports.up = function(pgm) {
  pgm.createTable('orders', {
    id: 'id',
    cost: 'numeric',
    date: 'date',
    location: 'integer',
    delivered: 'boolean' 
  });
};

exports.down = function(pgm) {

};
