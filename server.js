const app = require('express')();
const listItems = require('./data/data.json');
require('dotenv').config();

const port = process.env.PORT || 5001;

app.get('/', (_req, res) => {
  res.status(200).send(listItems);
})

app.listen(port, () => console.log(`Server listening on port ${port}`)) 