// 所以我们用Promise的时候一般是包在一个函数中，在需要的时候去运行这个函数

// function timeout(ms) {
//   console.log('timeout');
//   return new Promise((resolve, reject) => {
//     if (ms <= 100) {
//       setTimeout(resolve, ms, 'resolved--return');
//     } else {
//       setTimeout(reject, ms, 'reject');
//     }
//   });
// }
//
// timeout(100).then((value) => {
//   console.log(`timeout== ${value}`);
// }, (err) => {console.log(err)});

const runAsync = (promiseValue) => {
  const promise = new Promise((resolve, reject) => {
    // const promise = true;
    // const promise = false;
    if (promiseValue) {
      console.log('resolve');
      resolve('resolve from promise');
    } else {
      console.log('reject');
      reject('reject from promise');
    }
  });
  return promise;
};

runAsync(false).then((value) => {
  console.log(`resolve -- ${value}`);
}).catch((err) => {
  console.log(`reject -- ${err}`);
});
