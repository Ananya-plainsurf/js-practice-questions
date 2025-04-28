// 3. Parallel Waits
// Create a function parallelWait(arr) that accepts an array of milliseconds and waits for all of them at the same time, then logs "All done".

// 👉 Example:

// parallelWait([1000, 2000, 500]);
// ✅ Output after 2 seconds:

// Output
// All done

function wait(ms) {
  try {
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log(`hey i am resolving for ${ms}s`);
        resolve();
      }, ms)
    );
  } catch (err) {
    throw new err();
  }
}

async function parallelWait(arr) {
  console.time("timerName");
  const promises = arr.map((item) => wait(item));
  await Promise.all(promises);
  //   await Promise.all(arr.map((item) => wait(item))); this is another way of doing this program
  console.timeEnd("timerName");
  return console.log("All Done");
}

parallelWait([1000, 2000, 3000]);

async function sequentialWait(arr) {
  console.time("sequenceTimerName");

  for (let i of arr) {
    await wait(i);
  }
  console.timeEnd("sequenceTimerName");

  return console.log("All done (sequentially)...");
}

sequentialWait([1000, 2000, 3000, 4000]);
