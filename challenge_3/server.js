const express = require('express');
const path = require('path');

const app = express();



app.use(express.static(path.join(__dirname, 'public')));

const port = process.argv[2] || 3300;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  console.log(path.join(__dirname, '/public'));
})

app.get('/', (req, res) => {
  res.send('hello');
})
