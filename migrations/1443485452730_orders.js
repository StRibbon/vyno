exports.up = function(pgm) {
  pgm.addColumns('orders', {
    user_id: 'integer'
  });
};

exports.down = function(pgm) {

};
