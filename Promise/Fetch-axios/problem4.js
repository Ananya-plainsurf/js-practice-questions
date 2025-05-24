// Handle Failed Fetch

// Fetch data from an invalid URL and gracefully handle the error with try/catch.
const baseUrl = `https://jsonplaceholder.typicode.com1/user/`;

async function getUsingFetch(url) {
  try {
    const result = await fetch(url);
    return await result.json();
  } catch (error) {
    throw new Error("calling failed", error);
  }
}

async function seqFetch(n) {
  console.time("Started...");
  for (let i = 1; i <= n; i++) {
    const result = await getUsingFetch(`${baseUrl}${i}`);
    console.log("fetch data", result);
    result;
  }
  console.timeEnd("Started...");
}
seqFetch(3);
