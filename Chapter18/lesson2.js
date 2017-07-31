// const getStockPrice = (name) => {
//   console.log(name);
// }
//
// const getStockSymbol = (symbol) => {
//   console.log(symbol)
// }
//
// async function getStockPriceByName(name) {
//   var symbol = await getStockSymbol(name);
//   var stockPrice = await getStockPrice(symbol);
//   return stockPrice;
// }
//
// getStockPriceByName('goog').then(function (result) {
//   console.log(`getStockPriceByName ${result}`);
// });

function timeout(ms) {
  console.log('timeout');
  console.log(this === global);
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  console.log('asyncPrint');
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 500);
