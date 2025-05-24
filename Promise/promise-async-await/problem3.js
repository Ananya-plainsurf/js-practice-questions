// Implement a function retry(fn, retries) that retries a failing async function until it succeeds or retries are exhausted.
// Promise-returning function to simulate random success/failure
function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Success...");
      } else {
        reject("Request Failed");
      }
    }, 2000);
  });
}

async function retry(fn, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await fn();
      console.log(`Success in (${i + 1}/${retries}) Attempt`);
      return result;
    } catch {
      console.log(`Failed in (${i + 1}/${retries}) attempt..`);
      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } else {
        console.log("Failed in all attempts!");
      }
    }
  }
}

retry(wait, 4);
