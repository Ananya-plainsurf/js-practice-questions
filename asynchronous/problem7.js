// Write a JavaScript function that demonstrates converting a callback API to a Promise API and
// uses async/await to consume it.

function callBackFunction(arg1, arg2, callback) {
  let result = arg1 + arg2;
  if (result % 2 === 0) {
    return callback(null, result);
  } else {
    return callback(new Error("the number total is not even"), null);
  }
}

async function promiseCallback(arg1, arg2) {
  return await new Promise((resolve, reject) => {
    callBackFunction(arg1, arg2, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

promiseCallback(5, 5)
  .then((data) => console.log("final data", data))
  .catch((err) => console.log(err));

promiseCallback(5, 4)
  .then((data) => console.log("final data", data))
  .catch((err) => console.log(err));
