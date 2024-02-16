// server.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const playGame = require("./functions/frontEndFunction");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/evaluate", (req, res) => {
  console.log(req.body.hand);
  // Here you would handle the evaluation logic
  const hand = req.body.hand;
  const evaluation = playGame(hand); // Call your evaluation function
  //console.log(evaluation);
  evaluation.then((result) => {
    // Use the resolved value here
    console.log(result);
    res.json(result);
  });
  // Send back the evaluation result
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
