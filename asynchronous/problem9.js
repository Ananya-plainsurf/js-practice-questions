function retries(callback) {
  let timeoutId;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        clearTimeout(timeoutId);
        resolve(callback());
      } else {
        reject(new Error("random value is less then 0.5"));
      }
    }, 2000);
  });
}
const showLog = () => console.log("hey this is done!");

async function wait(tryR) {
  for (let i = 0; i < tryR; i++) {
    try {
      const result = await retries(showLog);
      console.log(`${i + 1}/ ${tryR} Attempt Success!!...`);
      return result;
    } catch (error) {
      console.log(`${i + 1}/ ${tryR} Attempt Failed!!...`);
      if (i < tryR) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        return console.log(`All attempts overed!...`);
      }
    }
  }
}

wait(3);
