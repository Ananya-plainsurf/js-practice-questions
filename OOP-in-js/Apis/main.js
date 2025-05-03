// const url = "https://covid-api.com/api/regions?per_page=20";

// fetch(url, {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => console.log(response));

const url = "https://yesno.wtf/api";
const imgArticle = document.getElementById("img-article");
const ansText = document.getElementById("answer-text");
const thinking = document.getElementById("thinking");

function showThinking() {
  thinking.classList.remove("hide");
}

function hideThinking() {
  thinking.classList.add("hide");
}
function decide(event) {
  event.preventDefault();
  showThinking();
  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  }).then(async (response) => {
    const result = await response.json();
    hideThinking();
    if (result) {
      const img = document.createElement("img");
      img.setAttribute("src", result.image);
      imgArticle.innerHTML = ""; // Clear old image
      imgArticle.appendChild(img);
      ansText.textContent = result.answer;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", decide);
});
