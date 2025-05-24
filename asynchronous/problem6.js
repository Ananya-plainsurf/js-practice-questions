// Write a JavaScript function that converts a traditional callback-based function to a Promise-based one,
//  handling both success and error conditions.

function callBackFunction(arg1, arg2, callback) {
  setTimeout(() => {
    let result = arg1 + arg2;

    if (result % 2 === 0) {
      callback(null, result);
    } else {
      callback(new Error("result is not odd"), null);
    }
  }, 2000);
}

function promiseCallback(arg1, arg2) {
  return new Promise((resolve, reject) => {
    callBackFunction(arg1, arg2, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

promiseCallback(4, 5)
  .then((data) => console.log("final data", data))
  .catch((err) => console.log("Error is: ", err));
promiseCallback(4, 26)
  .then((data) => console.log("final data", data))
  .catch((err) => console.log("Error is: ", err));
