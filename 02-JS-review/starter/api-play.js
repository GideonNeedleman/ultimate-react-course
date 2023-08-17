/* const url =
  "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aleb&unique=prints";

async function getCards(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data.data;
}

let cards = await getCards(url);

console.log(cards);
console.log(cards.length);
 */

/* const url =
  "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aleb&unique=prints";

async function getCards(url) {
  let page = 1;
  let response = await fetch(url + "page=" + page);
  let data = await response.json();
  while (data.has_more) {
    page = page++;
    let res = await fetch(url + "page=" + page);
    let data2 = await res.json();
    data.has_more = data2.has_more;
    data.data = [...data.data, data2.data];
  }
  return data.data;
}

let cards = await getCards(url);

console.log(cards);
console.log(cards.length); */

const url =
  "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aleb&unique=prints";

async function getCards(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (data.has_more) {
    console.log("has more");
    return [...data.data, ...getCards(url + "&page=2")];
  } else {
    console.log("no more");
    return data.data;
  }
}

let cards = await getCards(url);

console.log(cards.map((card) => card.name));
console.log(cards.length);

// doesn't work. Maybe in react set state to capture full object, so can test if data.has_more is true then fetch again and merge into data.data array.
