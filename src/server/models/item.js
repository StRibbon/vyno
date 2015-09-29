var db = require('../db');
module.exports = db.define({
  name: 'items',
  columns: {
    id: { primaryKey: true },
    name: {},
    maker: {},
    year: {},
    location: {},
    description: {},
    img: {},
    price: {}
  }
});
