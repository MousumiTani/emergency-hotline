let heartCount = 0;
const heartBtn = document.querySelector("nav button:first-child");

let totalCoin = 100;
const coinBtn = document.querySelector("nav button:nth-child(2)");

let totalCopy = 0;
const copyBtn = document.querySelector("nav button:nth-child(3)");

const cardsContainer = document.getElementById("cards-container");

cardsContainer.addEventListener("click", function (event) {
  let target = event.target;

  if (target.classList.contains("fa-heart")) {
    heartCount++;
    heartBtn.childNodes[0].nodeValue = heartCount;
    target.classList.replace("text-gray-500", "text-red-700");
  }

  //Copy Button

  if (target.tagName === "BUTTON" && target.querySelector("i.fa-copy")) {
    let card_1 = target.parentElement.parentElement;

    let serviceNumber = card_1.querySelector("div.my-4 h1").innerText;
    navigator.clipboard.writeText(serviceNumber);

    alert("Copied " + serviceNumber + " to clipboard");
    totalCopy++;

    copyBtn.innerText = totalCopy + " " + "Copy";
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

    coinBtn.childNodes[0].nodeValue = totalCoin;
    alert("Calling " + serviceName + " at " + serviceNumber);

    //Current time
    let now = new Date();
    let time = now.toLocaleTimeString();

    let li = document.createElement("li");
    li.innerText = `${serviceName} - ${serviceNumber} - ${time}`;
    li.className = `p-3 bg-gray-100 rounded-lg`;
    callHistory.appendChild(li);
  }
});

// clear history
const callHistory = document.querySelector("aside ul");
const clearHistory = document.querySelector("aside button");
clearHistory.addEventListener("click", function () {
  callHistory.innerHTML = " ";
});
