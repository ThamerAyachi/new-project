const url = document.querySelector(".myUrl");
const button = document.querySelector(".myButton");

button.addEventListener("click", () => {
  sendUrl(url.value);
});

const sendUrl = (text) => {
  fetch(`http://localhost:4000/download?url=${text}`, {
    method: "Get",
  }).then((res) => res.json().then((res) => console.log(res)));
};
