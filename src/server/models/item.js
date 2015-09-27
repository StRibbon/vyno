var db = require('../db');
module.exports = db.define({
  name: 'items',
  columns: {
    id: { primaryKey: true },
    name: {},
    description: {},
    img: {},
    price: {}
  }
});
