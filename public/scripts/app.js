// script.js
async function evaluateHand() {
  const hand = document.getElementById("hand").value;

  const response = await fetch("/evaluate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ hand }),
  });

  const result = await response.text();
  console.log(result);
  var object = JSON.parse(result);
  document.getElementById("result").textContent = object.hand;
  document.getElementById("eval").textContent = object.evaluation;
}
