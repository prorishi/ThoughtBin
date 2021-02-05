const serviceWorker = navigator.serviceWorker;

if (serviceWorker) {
        serviceWorker.register("./serviceWorker.js");
}