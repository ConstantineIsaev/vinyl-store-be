const AWS = require('aws-sdk');
const csv = require('csv-parser')
const { BUCKET, REGION } = require('./values');

module.exports = event => {
  const s3 = new AWS.S3({ region: REGION });

  event.Records.forEach(record => {
    const key = record.s3.object.key
    const s3Stream = s3.getObject({
      Bucket: BUCKET,
      Key: key,
    }).createReadStream();

    s3Stream.pipe(csv())
      .on('data', data => {
        console.log(data)
      })
      .on('error', (error) => {
        console.error(error);
      })
      .on('end', async () => {
        await s3.copyObject({
          Bucket: BUCKET,
          CopySource: `${BUCKET}/${key}`,
          Key: key.replace('uploaded', 'parsed')
        }).promise();

        await s3.deleteObject({
          Bucket: BUCKET,
          Key: key
        }).promise();

        console.log('CSV file moved to /parsed folder');
      });
  });
};
