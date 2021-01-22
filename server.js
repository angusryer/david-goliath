const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 5001;
const listItems = require("./data/data.json");

app.get("/objectlist/:id", (req, res) => {
  const listItem = listItems.find((item) => {
    return item.id == req.params.id;
  });
  if (!listItem) {
    res
      .status(404)
      .send({ message: `No item exists with id: ${req.params.id}` });
  } else {
    res.status(200).send(listItem);
  }
});

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
  });
}

app.listen(port, () => console.log(`Server listening on port ${port}`));
