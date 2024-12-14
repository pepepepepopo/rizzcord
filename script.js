const socket = io("wss://socket-io-chat-room-example.fly.dev"); // Public WebSocket server

// Send message to server
function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value;

    if (messageText.trim() === '') return;

    socket.emit('chat message', messageText); // Emit message to server
    input.value = '';
}

// Listen for messages from the server
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
        <span class="user">User:</span>
        <span class="text">${msg}</span>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
