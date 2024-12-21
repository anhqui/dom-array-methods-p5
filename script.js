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
}
