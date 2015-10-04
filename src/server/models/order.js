var db = require('../db');
module.exports = db.define({
  name: 'orders',
  columns: {
    order_id: { primaryKey: true },
    user_id: {},
    date: {},
    delivered: {}
  }
});
