exports.connection = require('./mysql.js'); // mysql2
exports.save = require('./nosql.js'); // Mongoose
exports.FormData = require('./sqlOrm.js').FormData; // Sequelize