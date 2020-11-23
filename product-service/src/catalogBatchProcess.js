const AWS = require('aws-sdk');
const createProduct = require('../db/createProduct');
const { REGION } = require('./values');

module.exports = async event => {
  const sns = new AWS.SNS({ region: REGION });

  for (const record of event.Records) {
    try {
      const product = JSON.parse(record.body);

      const { title, artist, description, price: stringPrice, coverurl, count: stringCount } = product;
      const price = parseInt(stringPrice);
      const count = parseInt(stringCount);

      await createProduct(title, artist, description, price, coverurl, count)

      console.log(`product was added: ${JSON.stringify(product)}`);
      await sns.publish({
        Subject: 'Vinyl store update',
        Message: `New products were added: ${product.title} by ${product.artist}`,
        TopicArn: process.env.SNS_TOPIC
      }).promise();
    } catch (e) {
      console.error(`error during product insersion: ${e.message}`);
    }
  };
};
