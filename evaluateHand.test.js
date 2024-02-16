import { evaluateHand } from "./functions/evaluateHand.js";

test('should return "Royal Flush" for a royal flush hand', () => {
  const hand = [
    { rank: "10", suit: "Hearts" },
    { rank: "Jack", suit: "Hearts" },
    { rank: "Queen", suit: "Hearts" },
    { rank: "King", suit: "Hearts" },
    { rank: "Ace", suit: "Hearts" },
  ];
  expect(evaluateHand(hand)).toBe("Royal Flush");
});
