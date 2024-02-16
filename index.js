const readline = require("readline");
const evaluateHand = require("./functions/evaluateHand");

// Unicode characters for card suits
const suitsUnicode = {
  Hearts: "♥",
  Diamonds: "♦",
  Clubs: "♣",
  Spades: "♠",
};

// Function to generate a deck of cards
function generateDeck() {
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
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
  let deck = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({ rank, suit });
    }
  }
  return deck;
}

// Function to shuffle the deck
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Function to deal cards to players
function dealCards(deck, numCards) {
  let hands = [];
  for (let i = 0; i < numCards; i++) {
    hands.push(deck.pop());
  }
  return hands;
}

// Function to display the player's hand
function displayHand(hand) {
  console.log("Your hand:");
  for (let card of hand) {
    console.log(`${card.rank} of ${card.suit} ${suitsUnicode[card.suit]}`);
  }
}

// Function to prompt user for input
function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

async function playGame() {
  const deck = generateDeck();
  shuffle(deck);

  const numCards = parseInt(await prompt("Enter number of cards to deal: "));
  const playerHand = dealCards(deck, numCards);

  displayHand(playerHand);

  const evaluation = evaluateHand(playerHand);
  console.log("Your hand evaluation: " + evaluation);
}

playGame();
