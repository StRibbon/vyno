exports.up = function(pgm) {
  pgm.createTable('orders', {
    bill_id: 'id',
    user_id: 'integer',
    date: 'date',
    delivered: 'boolean' 
  });
};

exports.down = function(pgm) {

};
