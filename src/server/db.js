var db = require('anydb-sql')({
  url: process.env.DATABASE_URL,
  connections: {
    min: 2,
    max: 20
  }
});

module.exports = db;
