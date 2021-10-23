exports.connection = require('./mysql.js'); // mysql2
exports.save = require('./nosql.js').save; // Mongoose
exports.FormData = require('./sqlOrm.js').FormData; // Sequelize