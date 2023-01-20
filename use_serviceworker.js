/*  
AUTHORS: Müslüm Atas & Mathias Knoll
DESCRIPTION: Registration of the Service Worker. If the service worker API is supported in the browser, it is registered using the 
             ServiceWorkerContainer.register() method.
LAST CHANGE: 17.12.2022
*/


if ("serviceWorker" in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker
            .register("serviceworker.js")
            .then(serviceWorker => {
                console.log("Service Worker Friends registered: ", serviceWorker);
            })
            .catch(error => {
                console.error("Error registering the Service Worker Friends: ", error);
            });
    });
}
