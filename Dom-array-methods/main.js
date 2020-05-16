var tbobyEl = document.getElementById('content');

/**
 * Load randomly 3 person automatically when content is diplayed
 */
fetch('https://randomuser.me/api/?results=3', { method: 'GET' })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
    const results = data.results;
    // const tbobyEl = document.getElementById('content');
    results.forEach((data) => {
      const trEl = document.createElement('tr');
      const tdNameEl = document.createElement('td');
      const tdMoneyEl = document.createElement('td');
      const money = getRandomIntInclusive(111, 11111111);
      const firstName = data.name.first;
      tdNameEl.textContent = firstName;
      tdMoneyEl.textContent = money + ' ' + '\u20AC';
      // Append the name + the money to the row
      trEl.appendChild(tdNameEl);
      trEl.appendChild(tdMoneyEl);
      // Append the row to the tbody elment of the table el in the HTML.
      tbobyEl.appendChild(trEl);
    });
  })
  .catch((err) => console.log(err));

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
 * Add User => fetch API to add 1 person to the array on 'click'
 */

document.getElementById('add').addEventListener('click', (e) => {
  console.log(e);
  e.preventDefault();
  fetch('https://randomuser.me/api/?results=1', { method: 'GET' })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      // Get the name
      const name = data.results[0].name.first;
      // Get the money
      const money = getRandomIntInclusive(111, 1111111);
      // Create content containers
      const trEl = document.createElement('tr');
      const tdNameEl = document.createElement('td');
      const tdMoneyEl = document.createElement('td');
      // Set values to td element
      tdNameEl.textContent = name;
      tdMoneyEl.textContent = money + ' ' + '\u20AC';
      // Append td to the row tr
      trEl.appendChild(tdNameEl);
      trEl.appendChild(tdMoneyEl);
      // Append tr to the body
      tbobyEl.appendChild(trEl);
    });
});

/**
 * Double Money of all the persons in the array
 */

document.getElementById('double').addEventListener('click', (e) => {
  e.preventDefault();
  console.log(document.querySelectorAll('tr > td:nth-child(2)'));
  const allMoneyArr = document.querySelectorAll('tr > td:nth-child(2)');
  // allMoneyArr.forEach((moneyEl) => {
  //   // console.log(parseInt(moneyEl.textContent, 10) * 2);
  //   // const strToInt = parseInt(moneyEl.textContent, 10);
  //   // const doubleMoney = strToInt * 2;
  //   // moneyEl.textContent = doubleMoney + ' ' + '\u20AC';
  // });
  // console.log(Array.from(document.querySelectorAll('td')));
  Array.from(allMoneyArr).map((value, index, number) => {
    console.log(
      'value',
      (doubleValue = parseInt(value.textContent, 10) * 2),
      'index',
      index,
      'number',
      number
    );
    value.textContent = doubleValue + '\u20AC';
  });
});
/**
 * Show only Millionaires
 */

document.getElementById('millionaires').addEventListener('click', (e) => {});
