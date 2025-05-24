// Fetch User Data

const { default: axios } = require("axios");

// Using fetch or axios, get user data from https://jsonplaceholder.typicode.com/users/1 and print the user’s name.

async function fetchUserData() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      headers: {
        Accepts: "application/json",
      },
    });
    return await result.json();
  } catch (err) {
    throw new Error("Error occurred while fetching", err);
  }
}

fetchUserData().then((data) => console.log("Fetch data: \n", data));

//  using axios

async function fetchUserUsingAxios() {
  try {
    const result = await axios("https://jsonplaceholder.typicode.com/users/2", {
      headers: {
        Accepts: "application/json",
      },
    });
    return result;
  } catch (err) {
    throw new Error("An error occurred while Axios fetching", err);
  }
}
fetchUserUsingAxios().then((response) =>
  console.log("Axios data: \n", response.data)
);
