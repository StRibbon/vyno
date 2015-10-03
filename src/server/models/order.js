var db = require('../db');
module.exports = db.define({
  name: 'orders',
  columns: {
    bill_id: { primaryKey: true },
    user_id: {},
    date: {},
    delivered: {}
  }
});
