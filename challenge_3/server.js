const express = require('express');
const path = require('path');
const db = require('./db');
const sequelize = require('sequelize');

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

const port = process.argv[2] || 3300;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  console.log(path.join(__dirname, '/public'));
})

app.get('/', (req, res) => {
  res.send('hello');
})

app.post('/', (req, res) => {
  console.log("🚀 ~ file: server.js ~ line 21 ~ app.post ~ req", req.body)

  // NoSQL with Mongoose
  db.save(req.body);

  // mySQL ---> ERRORS ON insertion due to inserting into wrong columns. weird
  // Don't try to use default keyword unless it's in original string
  // let queryString = 'insert into formData(id, name, email, password) values (default, ?, ?, ?)';
  // let queryArgs = [req.body.name, req.body.email, req.body.password];
  // db.connection.promise().query(queryString, queryArgs)
  //   .then((result) => {
  //     console.log(result);
  //     console.log('twas a success');
  //   });

  // Sequelize
  // console.log(db.FormData);
  // db.FormData.create(req.body);
  res.send('hit');
})
