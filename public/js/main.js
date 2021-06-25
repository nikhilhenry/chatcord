// @ts-nocheck
const chatForm = document.getElementById("chat-form");
const chatMessage = document.querySelector(".chat-messages");

// @ts-ignore
const socket = io();

// Message from server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);

  // Scroll down to message
  chatMessage.scrollTop = chatMessage.scrollHeight;
});

// message submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get message from dom
  const msg = e.target.elements.msg.value;

  // emit to server
  socket.emit("chatMessage", msg);

  // clear input
  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta">${message.username}</p> <span>${message.time}</span></p>
  <p class="text">
  ${message.text}
  </p>`;
  document.querySelector(".chat-messages").appendChild(div);
}
