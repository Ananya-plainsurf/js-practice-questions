// Write a JavaScript function that simulates delayed callback execution using recursive setTimeout calls,
// triggering the callback after a cumulative delay.

function debounceDelay(callback, totalDelay, step = 1000) {
  let elaps = 0;

  function delayStep() {
    if (elaps >= totalDelay) {
      callback();
      return;
    }
    console.log(`Waiting... ${elaps}ms`);
    elaps += step;
    setTimeout(delayStep, step);
  }

  delayStep();
}

const showLog = () => console.log("callback executed after certain delay!");

debounceDelay(showLog, 5000, 1000);
