var db = require('../db');

module.exports = db.define({
  name: 'users',
  columns: {
    id: { primaryKey: true },
    first_name: {},
    last_name: {},
    password: {},
    phone: {},
    email: {},
    address_street: {},
    address_city: {},
    address_post: {}
  },
  has: {
    orders: {from: 'orders', many:true}
  }
});
