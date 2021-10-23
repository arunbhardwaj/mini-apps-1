const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'multiCheckout'
})

connection.connect((err) => {
  if (err){
    console.log(err);
  } else {
    console.log('success connecting')
  }
});
// a connection can also be implicitly established by invoking a query:
// aka no need to do a secondary
// connection.connect()
// however, '.connect()' takes a callback with an err parameter and can
// be used to check your connection.

module.exports = connection;