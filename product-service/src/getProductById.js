module.exports = async event => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Credentials" : true,
    },
    body: JSON.stringify({
      album: 'Recto Verso',
      artist: 'Paradis',
      price: '1900',
      id: `${event.pathParameters.productId}`
    }),
  };
};
