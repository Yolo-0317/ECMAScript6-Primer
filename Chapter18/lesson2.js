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

async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms).then(() => {
    console.log('resolve--timeout');
  });
  console.log(value); // hello world
}

asyncPrint('hello world', 1000).then(() => {
  console.log('resolve');
});
