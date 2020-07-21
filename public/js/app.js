console.log("Client side javascript file is loaded!");

let data;

const msg1 = document.getElementById("msg-1");
const msg2 = document.getElementById("msg-2");

msg1.textContent = " ";
msg2.textContent = " ";

const weatherForm = document.querySelector("form");
const inputForm = document.querySelector("input");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  msg1.textContent = "Loading";
  const location = inputForm.value;

  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((res) => res.json())
    .then((res) => {
      adicionar(res);
    });
});

function adicionar(data) {
  if (data.error) {
    msg1.textContent = data.error;
    msg1.style.color = "red";
    msg2.textContent = " ";
  } else {
    msg1.style.color = null;
    msg1.textContent = `${data.location}`;
    msg2.textContent = `${data.forecast}`;
  }
}
