// Write a JavaScript function that schedules a callback to run after 2 seconds, but cancels the
// execution if the function is called again within that period.

function scheduleCallback(callback, delay = 2000) {
  let timeoutId = null;

  return function () {
    if (timeoutId) {
      console.log(`Callback execution cancelled due to new call`);
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback();
      timeoutId = null;
    }, delay);
  };
}

const scheduled = scheduleCallback(() => {
  console.log("Callback executed after 2 seconds");
});

scheduled();
setTimeout(scheduled, 1000);
setTimeout(scheduled, 1200);
// scheduleCallback(callbackLog);
