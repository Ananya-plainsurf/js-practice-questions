// Write a JavaScript function that accepts a callback and a custom delay value,
// then executes the callback after the specified delay, logging the start and end times.

function debounce(callback, delay) {
  let timeoutId;

  console.time("Started");
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      console.timeEnd("Started");
      callback();
    }, delay);
  };
}

const showLog = () => console.log("Hey time out");

debounce(showLog, 2000)();
