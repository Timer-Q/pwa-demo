import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const PUBLICKEY =
  "BL8r5BALDYTeDIbzCS43r22IhdHZsaj1Ads1-9ouLDZSi9yveDlM8VyQdbez-0Qwuo8GhBPG89y1hyUY_5fVdhs";
// const PRIVATEKEY = "LMLDzvDFDICNT6BRKeM8y61bPskU4-GmbZtxM-BE2Ms";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(function(registration) {
      console.log("Service Worker 注册成功");
      return subscribeUserToPush(registration, PUBLICKEY);
    })
    .then(subscription => {
      console.log("订阅成功");
    });
}

function subscribeUserToPush(registration, publicKey) {
  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: window.urlBase64ToUint8Array(publicKey)
  };
  if (registration && registration.pushManager) {
    return registration.pushManager
      .subscribe(subscribeOptions)
      .then(function(pushSubscription) {
        console.log("Received PushSubscription");
        return pushSubscription;
      });
  }
}

window.urlBase64ToUint8Array = function(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+") // eslint-disable-line
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
