const mongoose = require('mongoose')
const express = require('express')

const app = express();
app.use(express.json())

app.post('/', (req, res) => {
  const data = req.body;

  console.log('Received data ', data);

  res.status(200).send('Data received');
})

app.listen(3000, () => {
  console.log('Hello world')
})
  