const express = require("express");
const findIndex = require("lodash.findindex");
const cors = require("cors");

const PORT = 8080;

const app = express();
const products = require("./data/list.json");
const productDetails = require("./data/detail.json");

app.use(express.static("public"));
app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(JSON.stringify(products));
});

app.get("/api/products/:id", (req, res) => {
  const index = findIndex(
    productDetails,
    (t) => t.id.toString() === req.params.id
  );
  const detail = productDetails[index];
  res.send(JSON.stringify(detail));
});

app.listen(PORT);
