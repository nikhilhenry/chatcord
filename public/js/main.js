// @ts-nocheck
const chatForm = document.getElementById("chat-form");

// @ts-ignore
const socket = io();

// Message from server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);
});

// message submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get message from dom
  const msg = e.target.elements.msg.value;

  // emit to server
  socket.emit("chatMessage", msg);
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta">Nik <span>9:12pm</span></p>
  <p class="text">
  ${message}
  </p>`;
  document.querySelector(".chat-messages").appendChild(div);
}
