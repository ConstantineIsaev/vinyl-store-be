const createProduct = require('../db/createProduct');

module.exports = async event => {
  const parsedRequest = JSON.parse(event.body)
// to-do: add validation here

  const { title, artist, description, price, coverurl, count } = parsedRequest;
  
  await createProduct(title, artist, description, price, coverurl, count);

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
};
