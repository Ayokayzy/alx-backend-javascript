const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = 7865;

app.get("/", function (req, res) {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id([0-9]+)", function (req, res) {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get("/available_payments", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post("/login", (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

app.listen(port, () => {
  console.log("API available on localhost port 7865");
});
