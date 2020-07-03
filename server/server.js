const app = require('express')();
const listItems = './data/data.json'
app.get('/', (req, res, next) => {
  next()
  console.log(req)
})






app.listen(8080, () => console.log("working port 8080")) 