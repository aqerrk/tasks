
const subscribeButton = document.getElementById("subscribeButton");
const message = document.getElementById("message");
subscribeButton.addEventListener("click", function() {
    message.textContent = "Thank you for subscribing!";
});