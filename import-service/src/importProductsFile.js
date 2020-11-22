const AWS = require('aws-sdk');
const { BUCKET, REGION } = require('./values');

module.exports = async ( event ) => {
  const {name} = event.queryStringParameters;
  const pathName = `uploaded/${name}`;

  const s3 = new AWS.S3({ region: REGION });

  const params = {
    Bucket: BUCKET,
    Key: pathName,
    Expires: 60,
    ContentType: 'text/csv',
  };

  let url;
  let status;

  try {
    url = await s3.getSignedUrlPromise('putObject', params);
    status = 200;
  } catch (err) {
    console.error(err);
    status = 500;
  }
  
  return {
    statusCode: status,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(url),
  }
};
