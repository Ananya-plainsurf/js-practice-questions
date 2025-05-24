// Write a JavaScript function that accepts a callback and a delay,
//  ensuring the callback is invoked only once even if multiple calls are made before the delay expires

function debounce(callback, delay) {
  let timeoutId = null;

  return function () {
    if (timeoutId) {
      return console.log("an execution is going on");
    }

    // clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
      timeoutId = null;
    }, delay);
  };
}

const showLog = () => console.log("Hey finally the output");

const callDebounce = debounce(showLog, 2000);
callDebounce();
callDebounce();
callDebounce();

setTimeout(callDebounce, 2500);
