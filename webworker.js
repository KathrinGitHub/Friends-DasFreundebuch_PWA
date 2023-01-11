/*  
AUTHORS: Müslüm Atas & Mathias Knoll
DESCRIPTION: The implementation of webworker. 
LAST CHANGE: 17.12.2022
*/

self.addEventListener("message", function(messageEvent) {
  
  if (messageEvent.data === "hello") {
    self.postMessage("Hello back!");
  }

  if (messageEvent.data === "recurring task") {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => self.postMessage(function(){
        var dn=new Date();
        return 'Time ' + dn.getHours() + ":" + dn.getMinutes() + ":" + dn.getSeconds();
      }()), i * 1000);
    }
  }

});
