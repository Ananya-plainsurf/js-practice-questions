// Write a JavaScript function that accepts a callback and a custom delay value, then executes the callback after the
// specified delay, logging the start and end times.

function waitCustomDelay(callback, delay) {
  console.time(`callback started at ${new Date().toLocaleTimeString()}`);
  setTimeout(() => {
    console.timeEnd(`callback started at ${new Date().toLocaleTimeString()}`);
    callback(delay);
  }, delay);
}

function callbackLog(delay) {
  console.log(`callback happened after the custom delay of ${delay}ms`);
}

waitCustomDelay(callbackLog, 4000);
