// Write a function that returns a Promise which rejects after 1 second with an error message.

function wait() {
  return new Promise((_, reject) =>
    setTimeout(() => reject("Request Failed!"), 1000)
  );
}

async function run() {
  console.time("Started...");
  const result = await wait().catch((err) => console.log(err));
  console.timeEnd("Started...");
  console.log(result);
}

run();
