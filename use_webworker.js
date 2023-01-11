/*  
AUTHORS: Müslüm Atas & Mathias Knoll
DESCRIPTION: The implementation of a simple webworker. 
LAST CHANGE: 17.12.2022
*/

const worker = new Worker("webworker.js");

//For more information about postmessage: https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
function sendMessageToWebworker() {
  worker.postMessage("hello");
}

function askWebworkerForRecurringTask() {
  worker.postMessage("recurring task");
}

worker.addEventListener("message", function(messageEvent) {
  const log = document.createElement("p");
  log.textContent = messageEvent.data;
  document.querySelector("output.webworker").prepend(log);
});


