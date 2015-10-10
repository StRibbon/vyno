module.exports = function(done) {
  var db = require('./db');
  var Item = require('./models/item');
  Item.insert({
    name: 'Vin Gris',
    maker: 'Birichino',
    year: 2011,
    location: 'Sonoma',
    description: 'This rosé is light, fruity and not too complicated– don’t we all need a little of that in our life?',
    price: 15,
    img: 'http://eat-drink-garden.com/wp-content/uploads/2012/05/birichino-for-web.jpg'
  })
  .insert({
    name: 'SOGI',
    maker: 'Broc Cellars',
    year: 2014,
    location: 'Central Coast',
    description: 'A sultry Pinot/Gamay blend that peaks with medium ripe cheeses and creamy nuts.',
    price: 25,
    img: 'https://dpbfm6h358sh7.cloudfront.net/images/1266013/297336279.jpg'
  })
  .insert({
    name: 'Bei Ranch Syrah',
    maker: 'Eric Demuth',
    year: 2012,
    location: 'Sonoma Coast',
    description: 'The nose offers floral, fruit, and mineral impressions.',
    price: 50,
    img: 'http://static.wixstatic.com/media/c82821_047bd061d4a84537ae4fbbb78456caae.jpg_srb_p_427_640_75_22_0.50_1.20_0.00_jpg_srb'
  }).exec(function(err) {
    db.close();
    done(err);
  });
};
