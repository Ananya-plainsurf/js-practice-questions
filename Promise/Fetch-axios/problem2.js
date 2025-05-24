// Parallel API Calls

const { default: axios } = require("axios");

// Call two different APIs at the same time and return a combined result using Promise.all.
const baseUrl = `https://jsonplaceholder.typicode.com/users/`;
async function fetchUserData(url) {
  try {
    const result = await fetch(url, {
      headers: {
        Accepts: "application/json",
      },
    });

    return await result.json();
  } catch (error) {
    throw new Error("Error happened", error);
  }
}

function parallelCalling(noOfUsers) {
  const requests = [];
  console.time("Started...");
  for (let i = 1; i <= noOfUsers; i++) {
    requests.push(fetchUserData(`${baseUrl}${i}`));
  }
  const data = Promise.all(requests);
  console.timeEnd("Started...");
  return data;
}

parallelCalling(3).then((data) => console.log("this is the data", data));

async function getDataUsingAxios(url) {
  const result = await axios(url);
  return result.data;
}

function parallelAxios(no) {
  const req = [];
  for (let i = 1; i <= no; i++) {
    req.push(getDataUsingAxios(`${baseUrl}${i}`));
  }

  return Promise.all(req);
}

parallelAxios(2).then((data) => console.log("this is Axios calling:\n", data));
