const a = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
const aTest = ["A", "B"];
const cTest = ["R", "D", "W"];
const b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
const bTest = ["A", "B", "C", "W"];

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return "";
  }

  const object = {};
  listOfCat.forEach((cat) => {
    object[cat] = 0;
    listOfArt.forEach((book) => {
      const bookName = book[0];
      const bookStocks = book.split(" ")[1];

      if (bookName === cat) {
        object[cat] += parseInt(bookStocks);
      }
    });
  });

  let string = "";
  const keys = Object.keys(object);
  keys.forEach((key, index) => {
    string += `(${key} : ${object[key]})`;
    if (keys.length - index > 1) {
      string += " - ";
    }
  });
  return string;
}

console.log(stockList([], cTest));
