// @ts-nocheck
const chatForm = document.getElementById("chat-form");

// @ts-ignore
const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

// message submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get message from dom
  const msg = e.target.elements.msg.value;

  // emit to server
  socket.emit("chatMessage", msg);
});
