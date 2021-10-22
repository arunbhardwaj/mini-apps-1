const express = require('express');
const path = require('path');
const db = require('./db');

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
  db.save(req.body);
  res.send('hit');
})
