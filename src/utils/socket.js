const io = require("socket.io-client");
const messageContainer = x // { an element from chat.js, or maybe pull from virtual dom?}

// use a cdn?
const socket = io(window.location)

socket.on('', data => {
    appendMessage(`${data.name}: ${data.message}`)
})

function appendMessage(message) {
    const message = // message from chat.js?
    messageContainer.append(message)
}