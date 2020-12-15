const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

require('dotenv').config();
const app = express();
app.use(bodyParser.json());

app.all('*/', (req, res) => {

  const recipient = req.originalUrl.split('/')[1];

  const recipientUrl = process.env[recipient];

  if (recipientUrl) {
    const requestConfig = {
      method: req.method,
      url: `${recipientUrl}${req.originalUrl}`,
      ...(Object.keys(req.body || {}).length > 0 && {data: req.body})
    };
    console.log(`${recipientUrl}${req.originalUrl}`)
    axios(requestConfig)
      .then( response => {
        res.json(response.data);
      })
      .catch( e => {
        res.json(e);
      });
  } else {
    res.status(502).send({error: 'Cannot process request'})
  };
});

module.exports = app;
