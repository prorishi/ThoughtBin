const serviceWorker = navigator.serviceWorker;

if (serviceWorker) {
    serviceWorker.register("./serviceWorker.js");
}

window.addEventListener("beforeinstallevent", () => {
    console.log('before install');
});
