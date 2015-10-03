exports.up = function(pgm) {
  pgm.createTable('driver_orders', {
    driver_id: 'int',
    order_id: 'int'   
  });
};

exports.down = function(pgm) {

};
