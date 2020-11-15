const getProductbyId = require('../db/getProductById');

module.exports = async event => {
  const { rows: product } = await getProductbyId(event.pathParameters.productId);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Credentials" : true,
    },
    body: JSON.stringify(product),
  };
};
