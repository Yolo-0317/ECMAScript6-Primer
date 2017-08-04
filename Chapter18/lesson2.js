async function getMoviesFromApi() {
  try {
    // 注意这里的await语句，其所在的函数必须有async关键字声明
    const response = await fetch('https://facebook.github.io/react-native/movies.json');
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}

getMoviesFromApi().then((value) => {
  console.log(value);
});

//
async function timeout(ms) {
  // await Promise.reject('出错了'); // 只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms).then(() => {
    console.log('resolve--timeout');
  }).catch((e) => {
    console.log(e);
  });
  console.log(value); // hello world
}

asyncPrint('hello world', 1000).then(() => {
  console.log('resolve');
});

// Promise 对象的状态变化
async function getTitle(url) {
  const response = await fetch(url);
  const html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then((v) => { console.log(v) })
