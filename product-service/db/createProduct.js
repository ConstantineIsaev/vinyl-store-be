const { Client } = require('pg');
const dbOptions = require('./dbOptions');

module.exports = async (title, artist, description, price, coverurl, count) => {
  const client = new Client(dbOptions);
  await client.connect();
  try {
    const insertProduct = await client.query(`
      INSERT INTO products(title, artist, description, price, coverurl) VALUES ($1, $2, $3, $4, $5) RETURNING id
    `, [title, artist, description, price, coverurl]);

    const productId = insertProduct.rows[0].id;

    const insertStocks = await client.query(`
      INSERT INTO stocks(product_id, count) VALUES ($1, $2)
    `, [productId, count]);
  } catch (err) {
    throw (err);
  } finally {
    client.end();
  }
}
