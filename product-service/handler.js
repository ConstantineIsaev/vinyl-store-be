const getProductsList = require('./src/getProductsList');
const getProductById = require('./src/getProductById');
const createNewProduct = require('./src/createNewProduct');

const initDb = require('./db/initDb');

module.exports = {
  getProductsList,
  getProductById,
  createNewProduct,
  initDb,
};
