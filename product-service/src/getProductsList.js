module.exports = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: '',
      title: 'Lost & Found',
      artist: 'Jorja Smith',
      price: '2300',   
    }),
  };
};
