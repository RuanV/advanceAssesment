// Define default hand rankings
const defaultHandRankings = {
  "Royal Flush": 10,
  "Straight Flush": 9,
  "Four of a Kind": 8,
  "Full House": 7,
  Flush: 6,
  Straight: 5,
  "Three of a Kind": 4,
  "Two Pairs": 3,
  "One Pair": 2,
  "High Card": 1,
};

// Define ranks array
const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace",
];

// Function to evaluate the player's hand
function evaluateHand(hand, customHandRankings) {
  // Use custom hand rankings if provided, otherwise use default
  const handRankings = customHandRankings || defaultHandRankings;

  // Count occurrences of ranks and suits
  const rankCounts = {};
  const suitCounts = {};
  for (let card of hand) {
    rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
    suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
  }

  // Check for each hand type and return the highest ranked hand
  for (let handType in handRankings) {
    if (checkHand(hand, handType)) {
      return handType;
    }
  }

  // If no specific hand is found, return the highest card
  return "High Card";
}

// Function to check if a hand matches a specific type
function checkHand(hand, handType) {
  switch (handType) {
    case "Royal Flush":
      return isRoyalFlush(hand);
    case "Straight Flush":
      return isStraight(hand) && isFlush(hand);
    case "Four of a Kind":
      return hasNOfAKind(hand, 4);
    case "Full House":
      return hasNOfAKind(hand, 3) && hasNOfAKind(hand, 2);
    case "Flush":
      return isFlush(hand);
    case "Straight":
      return isStraight(hand);
    case "Three of a Kind":
      return hasNOfAKind(hand, 3);
    case "Two Pairs":
      return hasTwoPairs(hand);
    case "One Pair":
      return hasNOfAKind(hand, 2);
    default:
      return false;
  }
}

// Function to check if hand contains n cards of the same rank
function hasNOfAKind(hand, n) {
  const rankCounts = {};
  for (let card of hand) {
    rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
  }
  return Object.values(rankCounts).includes(n);
}

// Function to check if hand contains two pairs
function hasTwoPairs(hand) {
  const rankCounts = {};
  for (let card of hand) {
    rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
  }
  let pairs = 0;
  for (let count of Object.values(rankCounts)) {
    if (count === 2) {
      pairs++;
    }
  }
  return pairs === 2;
}

// Function to check for a royal flush
function isRoyalFlush(hand) {
  const royalRanks = ["10", "Jack", "Queen", "King", "Ace"];
  return (
    isStraight(hand) &&
    isFlush(hand) &&
    hand.every((card) => royalRanks.includes(card.rank))
  );
}

// Function to check for a flush
function isFlush(hand) {
  const firstSuit = hand[0].suit;
  for (let card of hand) {
    if (card.suit !== firstSuit) {
      return false;
    }
  }
  return true;
}

// Function to check for a straight
function isStraight(hand) {
  const sortedRanks = hand
    .map((card) => card.rank)
    .sort((a, b) => ranks.indexOf(a) - ranks.indexOf(b));
  for (let i = 0; i < sortedRanks.length - 1; i++) {
    if (
      ranks.indexOf(sortedRanks[i + 1]) - ranks.indexOf(sortedRanks[i]) !==
      1
    ) {
      return false;
    }
  }
  return true;
}

// Exporting the evaluateHand function
module.exports = evaluateHand;
