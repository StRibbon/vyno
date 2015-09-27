exports.up = function(pgm) {
  pgm.createTable('items', {
    id: 'id',
    name: 'text',
    description: 'text',
    img: 'text',
    price: 'numeric'
  });
};

exports.down = function(pgm) {
  pgm.dropTable('items');
};
