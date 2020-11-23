const getProductsList = require('./src/getProductsList');
const getProductById = require('./src/getProductById');
const createNewProduct = require('./src/createNewProduct');
const catalogBatchProcess = require('./src/catalogBatchProcess');

const initDb = require('./db/initDb');

module.exports = {
  getProductsList,
  getProductById,
  createNewProduct,
  catalogBatchProcess,
};
