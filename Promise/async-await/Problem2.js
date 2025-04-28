// 2. Write a function retry(fn, retries)
// Write a function retry(fn, retries) that tries to run fn.
// If fn fails (throws error), retry it after 1 second, up to retries times.

// 👉 Example:

// javascript
// Copy
// Edit
// retry(() => {
//   if (Math.random() < 0.7) throw new Error('Fail');
//   return "Success";
// }, 3);
// ✅ It should retry until success or stop after 3 tries.

async function retry(fn, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`${i + 1}/${retries} Attempt`);
      await fn();
      return console.log(`Attempt ${i + 1}/${retries} was success`);
    } catch (error) {
      console.log(`${i + 1}/${retries} Attempt Failed.... X`);

      if (i === retries) {
        console.log(`All Attempts over....`);
        throw new error();
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          console.log(`waiting and sleeping for 1s`);
          resolve();
        }, 1000)
      );
    }
  }
}

retry(() => {
  if (Math.random() < 0.7) throw new Error("Fail");
  return "Success";
}, 3);
