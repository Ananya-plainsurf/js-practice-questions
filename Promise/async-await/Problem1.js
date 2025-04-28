// create a delayLogger function write a delayLogger(arr) that taskes an array of number and logs each
// number after its value in seconds.
// O/p: (After 1s) 1s
// O/p: (After 2s) 2s
// O/p: (After 3s) 3s

const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`(After ${ms}s) ${ms}`);
      resolve();
    }, ms * 1000);
  });
};

const delayLogger = (arr) => {
  return arr.reduce(
    (prom, currentVal) => prom.then(async () => await wait(currentVal)),
    Promise.resolve()
  );
};

// delayLogger([1, 2, 3, 4, 5]);

// ninja technique

const delayLogger2 = async (arr) => {
  for (let i of arr) {
    await wait(i);
  }
};

delayLogger2([1, 2, 3, 4, 5, 6]);
