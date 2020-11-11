const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5001;
const path = require('path')
const listItems = require('./data/data.json');

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.get('/objectlist', (_req, res) => {
  res.status(200).send(listItems);
})

app.listen(port, () => console.log(`Server listening on port ${port}`)) 