exports.up = function(pgm) {
  pgm.createTable('drivers', {
    driver_id: 'id',
    name: 'text',
    phone: 'text',
    img: 'text',
    driving: 'boolean',
    lat: 'numeric',
    long: 'numeric'      
  });
};

exports.down = function(pgm) {

};
