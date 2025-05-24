// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function make_get_call(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

make_get_call("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log("hey this th data", data))
  .catch((err) => console.log(err));
