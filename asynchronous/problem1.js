// Write a JavaScript function that schedules a callback to run after 2 seconds,
// but cancels the execution if the function is called again within that period.

function debounce(callback, delay) {
  let timeoutId;

  console.log(
    "clearTimeout and initiated time stamp of " +
      new Date().toLocaleTimeString()
  );
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    console.log(
      "clearTimeout and initiated time stamp of " +
        new Date().toLocaleTimeString()
    );
    timeoutId = setTimeout(callback, delay);
  };
}

const sayHello = () =>
  console.log(
    "Hey i am setting delay and then cancel if callback is initiated"
  );

const callDebounce = debounce(sayHello);
callDebounce();
setTimeout(callDebounce, 2500);
setTimeout(callDebounce, 1000);
