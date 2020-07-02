var tbobyEl = document.getElementById('content');

loadRandomUser();
loadRandomUser();
loadRandomUser();
/**
 * Load Random User
 */
function loadRandomUser() {
  fetch('https://randomuser.me/api', { method: 'GET' })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const user = data.results[0];
      const newUser = {
        name: `${user.name.first}`,
        money: getRandomIntInclusive(100, 100000000),
      };
      addData(newUser);
    })
    .catch((err) => console.log(err));
}

var data = [];
// Add user to an empty []
function addData(newUser) {
  data.push(newUser);
  updateDom();
}

/**
 *Update DOM
 * */

function updateDom(providedData = data) {
  console.log(data);
  // Clear the content before display to avoid the 'doubles'
  tbobyEl.innerHTML = '';
  providedData.forEach((item) => {
    console.log(item);
    const trEl = document.createElement('tr');
    const tdNameEl = document.createElement('td');
    const tdMoneyEl = document.createElement('td');
    tdNameEl.textContent = item.name;
    tdMoneyEl.textContent = item.money;
    // Append the name + the money to the row
    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdMoneyEl);
    // Append the row to the tbody elment of the table el in the HTML.
    tbobyEl.appendChild(trEl);
  });
}

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Add User
 */

document.getElementById('add').addEventListener('click', (e) => {
  loadRandomUser();
});

/**
 * Double Money of all the persons in the array
 */

document.getElementById('double').addEventListener('click', (e) => {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  console.log(data);
  updateDom();
});
/**
 * Show only Millionaires
 */

document.getElementById('millionaires').addEventListener('click', (e) => {
  data = data.filter((user) => user.money > 1000000);
  console.log(data);
  updateDom();
});

/**
 * Sort by richest
 */

document.getElementById('richest').addEventListener('click', (e) => {
  data = data.sort((a, b) => b.money - a.money);
  console.log(data);
  updateDom();
});

/**
 * Total wealth
 */

document.getElementById('total').addEventListener('click', (e) => {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  console.log(wealth);

  const divEl = document.createElement('div');
  divEl.innerHTML = `Total wealth : ${wealth}`;
  console.log(divEl);
  tbobyEl.appendChild(divEl);
});
