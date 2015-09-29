exports.up = function(pgm) {
  pgm.addColumns('orders', {
    user_id: 'serial'
  });
};

exports.down = function(pgm) {

};
