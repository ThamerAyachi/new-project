const url = document.querySelector(".myUrl");
const button = document.querySelector(".myButton");

button.addEventListener("click", () => {
  sendUrl(url.value);
});

const sendUrl = (text) => {
  window.location.href = `http://localhost:8000/download?url=${text}`;
};
