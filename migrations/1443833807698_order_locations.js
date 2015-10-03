exports.up = function(pgm) {
  pgm.createTable('order_locations', {
    order_id: 'integer',
    time: 'date',
    lat: 'numeric',
    long: 'numeric',  
    eta: 'integer' 
  });
};

exports.down = function(pgm) {

};
