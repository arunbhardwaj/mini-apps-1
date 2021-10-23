const sequelize = require('sequelize');

const db = new sequelize.Sequelize('multiCheckout', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

var FormData = db.define('FormData', {
  name: sequelize.STRING,
  email: sequelize.STRING,
  password: sequelize.STRING,
})

// Creates the tables
FormData.sync();


module.exports.FormData = FormData;