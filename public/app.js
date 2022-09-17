const url = document.querySelector(".myUrl");
const button = document.querySelector(".myButton");

button.addEventListener("click", () => {
  sendUrl(url.value);
});

const sendUrl = (text) => {
  fetch(`http://localhost:4000/download?url=${text}`, {});
};
