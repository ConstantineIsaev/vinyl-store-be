const createProduct = require('../db/createProduct');

module.exports = async event => {

  event.Records.forEach(async record => {
    try {
      const product = JSON.parse(record.body);

      const { title, artist, description, price: stringPrice, coverurl, count: stringCount } = product;
      const price = parseInt(stringPrice);
      const count = parseInt(stringCount);
      console.log({title, artist, description, price, coverurl, count})
      await createProduct(title, artist, description, price, coverurl, count);
      console.log(`product was added: ${JSON.stringify(product)}`);
    } catch (e) {
      console.error(`error during product insersion: ${e.message}`);
    }
  });
};
 