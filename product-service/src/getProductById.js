module.exports = async event => {
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      album: 'Recto Verso',
      artist: 'Paradis',
      price: '1900',
      id: `${event.pathParameters.productId}`
    }),
  };
};
