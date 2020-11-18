const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 5001;
const listItems = require("./data/data.json");

app.get("/objectlist", (_req, res) => {
  res.status(200).send(listItems);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/client/build`));
  app.get("*", (_req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
  });
} else {
  app.get("/", (_req, res) => {
    res.sendFile(`${__dirname}/development.html`);
  })
}

app.listen(port, () => console.log(`Server listening on port ${port}`));
