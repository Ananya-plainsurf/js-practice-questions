// delay a function by 2 seconds

function wait() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 2000);
  });
}

const run = async () => {
  console.log("Waiting...");
  console.time("Started...");
  const result = await wait();

  console.timeEnd("Started...");
  console.log(result);
};

run();
