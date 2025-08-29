let heartCount = 0;
let heartBtn = document.querySelector("nav button:first-child");

let totalCoin = 100;
var coinBtn = document.querySelector("nav button:nth-child(2)");

coinBtn.childNodes[0].nodeValue = totalCoin + " ";

let totalCopy = 0;
let copyBtn = document.querySelector("nav button:nth-child(3)");

copyBtn.childNodes[0].nodeValue = totalCopy + " ";

let cardsContainer = document.querySelector(
  ".grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3"
);

let callHistory = document.querySelector("aside ul");
let clearHistory = document.querySelector("aside button");

cardsContainer.addEventListener("click", function (event) {
  let target = event.target;

  if (target.classList.contains("fa-heart")) {
    heartCount += 1;
    heartBtn.childNodes[0].nodeValue = heartCount + " ";
    target.classList.remove("text-gray-500");
    target.classList.add("text-red-700");
  }

  //Copy Button

  if (target.tagName === "BUTTON" && target.querySelector("i.fa-copy")) {
    let card_1 = target.parentElement.parentElement;

    let serviceNumber = card_1.querySelector("div.my-4 h1").innerText;
    navigator.clipboard.writeText(serviceNumber);

    alert("Copied " + serviceNumber + " to clipboard");
    totalCopy += 1;
    copyBtn.childNodes[0].nodeValue = totalCopy + " ";
  }

  // Call Button
  if (target.tagName === "BUTTON" && target.querySelector("i.fa-phone")) {
    let card_2 = target.parentElement.parentElement;
    let serviceName = card_2.querySelector("h3").innerText;
    let serviceNumber = card_2.querySelector("div.my-4 h1").innerText;

    if (totalCoin < 20) {
      alert("Insufficient Coins, minimum 20 coins necessary");
      return;
    }
    totalCoin -= 20;
    coinBtn.childNodes[0].nodeValue = totalCoin + " ";
    alert("Calling " + serviceName + " at " + serviceNumber);

    //Current time in History
    let now = new Date();
    let time = now.toLocaleTimeString();

    let li = document.createElement("li");
    li.innerText = `${serviceName} - ${serviceNumber} called at ${time}`;
    li.className = `p-3 bg-gray-100 rounded-lg`;
    callHistory.insertBefore(li, callHistory.firstChild);
  }
});

// CLEAR HISTORY BUTTON
clearHistory.addEventListener("click", function () {
  callHistory.innerHTML = "";
});
