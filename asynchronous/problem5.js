// Write a JavaScript program that converts a callback-based function to a Promise-based function.
// ✅ If the question is about:
//    -  Converting callback-style code to Promise-style → then retry is not the main focus.
//    -  Handling failures gracefully with Promises → then retry would be a good follow-up.

// another question
// Write a JavaScript function that converts a traditional callback-based function to a Promise-based one,
//  handling both success and error conditions.

// another question
// Write a JavaScript function that wraps a multi-parameter callback function into a Promise,
// ensuring proper error propagation.

function callBackFunction(arg1, arg2, callback) {
  setTimeout(() => {
    let result = arg1 + arg2;
    if (result % 2 === 0) {
      callback(null, result);
    } else {
      callback(new Error("Result is not odd!"), null);
    }
  }, 2000);
}

function promiseCallback(arg1, arg2) {
  return new Promise((resolve, reject) => {
    callBackFunction(arg1, arg2, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

promiseCallback(2, 3)
  .then((data) => console.log("what is the final data", data))
  .catch((err) => console.log("what is the error", err));

promiseCallback(2, 4)
  .then((data) => console.log("what is the final data", data))
  .catch((err) => console.log("what is the error", err));
