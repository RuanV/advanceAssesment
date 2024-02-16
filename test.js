const evaluateHand = require("./functions/evaluateHand");

const hand = [
  { rank: "10", suit: "Hearts" },
  { rank: "Jack", suit: "Hearts" },
  { rank: "Queen", suit: "Hearts" },
  { rank: "King", suit: "Hearts" },
  { rank: "Ace", suit: "Hearts" },
];
console.log("should return Royal Flush for a royal flush hand");
console.log(evaluateHand(hand));
