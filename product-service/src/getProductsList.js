// const productsList = require('../data/productsList.json');
const getProductsList = require('../db/getProductsList');

module.exports = async event => {
  const { rows: productsList } = await getProductsList();
  console.log(productsList)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(productsList),
  };
};
