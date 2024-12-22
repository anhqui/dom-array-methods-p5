const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#add-user");
const doubleBtn = document.querySelector("#double");
const showMillionairesBtn = document.querySelector("#show-millionaires");
const sortBtn = document.querySelector("#sort");
const calculateWealthBtn = document.querySelector("#calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();
// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  //   console.log(data.results[0]);
  const user = data.results[0];
  const { first, last } = user.name;
  const newUser = {
    name: `${first} ${last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}

// Double everyone money
function doubleMoney() {
  data = data.map((user) => ({ ...user, money: user.money * 2 }));
  updateDOM();
}

// Filter only Milionaires
function showMillionaires() {
  data = data.filter((user) => user.money >= 1000000);
  updateDOM();
}

// Sort by Richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// Calcualte the total Wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  //   console.log(wealth.toLocaleString());
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${wealth.toLocaleString()}</strong></h3>`;
  main.appendChild(wealthEl);
}

// Add new obj and data arr
function addData(obj) {
  data.push(obj);
  updateDOM();
}

// Update DOM
function updateDOM(provideData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
  provideData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `
    <strong>${item.name}</strong> $${item.money.toLocaleString()}
    `;
    main.appendChild(element);
  });
}

// Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
showMillionairesBtn.addEventListener("click", showMillionaires);
sortBtn.addEventListener("click", sortByRichest);
calculateWealthBtn.addEventListener("click", calculateWealth);
