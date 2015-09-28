var db = require('../db');
module.exports = db.define({
  name: 'users',
  columns: {
    id: { primaryKey: true },
    first_name: {},
    last_name: {},
    phone: {},
    email: {},
    address_street: {};
    address_city: {};
    address_post: {};
  }
});
