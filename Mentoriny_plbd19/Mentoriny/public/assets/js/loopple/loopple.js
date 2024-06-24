
// Alert dismissible function
document.querySelector('.loopple-alert.loopple-alert-dismissible .close').onclick = function() {
 document.querySelector('.loopple-alert').classList.add('loopple-opacity-0');
 setTimeout(function(){
   document.querySelector('.loopple-alert').remove();
 }, 1000);
}
document.addEventListener("DOMContentLoaded", function() {
    const sendMessageButton = document.getElementById("sendMessageButton");
    const messageText = document.getElementById("messageText");

    sendMessageButton.addEventListener("click", function() {
        const message = messageText.value;
        if (message.trim() !== "") {
            console.log("Message sent: " + message);
            // Here you would typically send the message to the server using an AJAX request.
            // Example: sendMessageToServer(message);
            messageText.value = "";
        }
    });

    // Example function to send message to the server (you'll need to implement this)
    function sendMessageToServer(message) {
        // Implement the logic to send the message to the server
        // For example, using fetch or XMLHttpRequest
    }
});
