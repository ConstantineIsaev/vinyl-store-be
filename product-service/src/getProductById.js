const getProductbyId = require('../db/getProductById');

module.exports = async event => {
  const { rows: product } = await getProductbyId(event.pathParameters.productId);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(product),
  };
};
