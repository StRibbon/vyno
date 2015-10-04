exports.up = function(pgm) {
  pgm.createTable('order_locations', {
    order_id: 'integer',
    time: 'text',
    lat: 'numeric',
    long: 'numeric',  
    eta: 'integer' 
  });
};

exports.down = function(pgm) {

};
