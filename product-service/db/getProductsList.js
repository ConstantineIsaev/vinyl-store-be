const { Client } = require('pg');
const dbOptions = require('./dbOptions');

module.exports = async () => {
  const client = new Client(dbOptions);
  await client.connect();
  try {
    const productsList = await client.query(`
      SELECT * FROM products LEFT JOIN stocks ON products.id = stocks.product_id
    `);
    return productsList;
  } catch (err) {
    throw(err);
  } finally {
    client.end();
  }
};
