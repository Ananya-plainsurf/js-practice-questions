// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function wait(callback) {
  setTimeout(callback, 2000);
}

function callbackForWait() {
  console.log("Hey callback happened after 2 sec");
}

wait(callbackForWait);
