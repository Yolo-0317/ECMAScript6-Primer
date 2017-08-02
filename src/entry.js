// entry.js
require("./style.css") // 载入 style.css
const asyncDemo =  require("../Chapter18/lesson2.js")

document.write('It works --es6--.')
async function getMoviesFromApi() {
  try {
    // 注意这里的await语句，其所在的函数必须有async关键字声明
    let response = await fetch('https://facebook.github.io/react-native/movies.json');
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson.movies;
  } catch(error) {
    console.error(error);
  }
}

getMoviesFromApi().then(
  (value) => console.log(value)
);
