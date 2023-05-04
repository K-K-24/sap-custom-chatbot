const messageList = document.querySelector(".message-list");
const messageInput = document.querySelector(".message-input input");
const sendButton = document.querySelector(".message-input button");

sendButton.addEventListener("click", (e) => {
  e.preventDefault();

  const messageContent = messageInput.value;

  if (!messageContent.trim()) {
    return;
  }

  const message = createMessage("You", messageContent);
  messageList.appendChild(message);

  messageInput.value = "";
});

function createMessage(author, content) {
  const message = document.createElement("div");
  message.classList.add("message");

  const authorElement = document.createElement("div");
  authorElement.classList.add("message-author");
  authorElement.textContent = author;

  const contentElement = document.createElement("div");
  contentElement.classList.add("message-content");
  contentElement.textContent = content;

  const timeElement = document.createElement("div");
  timeElement.classList.add("message-time");
  timeElement.textContent = new Date().toLocaleTimeString();

  message.appendChild(authorElement);
  message.appendChild(contentElement);
  //   message.appendChild(timeElement);

  return message;
}
