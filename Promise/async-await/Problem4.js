// 5. Create a Timer using Promises
// Create a function countdown(n) that logs from n down to 0, one per second.

// 👉 Example:
// countdown(5);

// ✅ Output:
// 5
// 4
// 3
// 2
// 1
// 0
// (each number logs after 1 second gap)

async function countdown(num) {
  for (let i = num; i >= 0; i--) {
    await new Promise((resolve) =>
      setTimeout(() => (console.log(i), resolve()), 1000)
    );
  }
  return console.log("All done");
}

countdown(5);
