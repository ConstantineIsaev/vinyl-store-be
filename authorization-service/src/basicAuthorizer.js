module.exports = async (event, ctx, cb) => {
  if (event['type'] != 'TOKEN') {
    cb('Unauthorized');
  };

  try {
    const { authorizationToken } = event;
    const encodedCreds = authorizationToken.split(' ')[1];
    const buff = Buffer.from(encodedCreds, 'base64');
    const [ username, password ] = buff.toString('utf-8').split(':');

    console.log(`username: ${username} and password: ${password}`);
    const storedUserPassword = process.env[username];

    const effect = !storedUserPassword || storedUserPassword != password ? 'Deny' : 'Allow';

    const policy = generatePolicy(username, event.methodArn, effect );

    cb(null, policy);
  } catch (e) {
    cb(`Unauthorized: ${e}`);
  };
};

const generatePolicy = (principalId, resource, effect = 'Deny') => ({
  principalId,
  policyDocument: {
    Version: '2012-10-17',
    Statement: [
      {
        Action: 'execute-api:Invoke',
        Effect: effect,
        Resource: resource,
      }
    ]
  },
});