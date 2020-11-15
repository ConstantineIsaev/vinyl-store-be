const { Client } = require('pg');
const dbOptions = require('./dbOptions.js');

module.exports = async event => {
  console.log(dbOptions)
  const client = new Client(dbOptions);

  await client.connect();
  try {


  
  } catch (err) {
    console.error('Error during database request executing ' + err);
  } finally {
    client.end();
  }
};
