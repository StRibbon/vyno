exports.up = function(pgm) {
  pgm.createTable('users', {
    id: 'id',
    password: 'text',
    first_name: 'text',
    last_name: 'text',
    phone: 'text',
    email: 'text',
    address_street: 'text',
    address_city: 'text',
    address_post: 'text'
  });
};

exports.down = function(pgm) {

};
