

const { Client } = require('pg');
const dbOptions = require('./dbOptions');

module.exports = async (productId) => {
  const client = new Client(dbOptions);
  await client.connect();
  try {
    const product = await client.query(`
    SELECT * FROM products LEFT JOIN stocks ON products.id = stocks.product_id WHERE product_id = $1
    `, [productId]);
    return product;
  } catch (err) {
    throw (err);
  } finally {
    client.end();
  }
};