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
