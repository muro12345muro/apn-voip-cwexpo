var apn = require("apn");
var deviceToken = "5b9aa01e8ec8214f1d7e570ee84d66936bd7af8a13eeaa455b6cbaab5c5aa5fc";

// Create a new APNs provider with your credentials
let provider = new apn.Provider({
    token: {
      key: "AuthKey_HH5BFZJZD4.p8",
      keyId: "HH5BFZJZD4",
      teamId: "9U32ZT7NKJ"
    },
    production: false // Set to true for production environment
});

console.log(deviceToken, " : Device Token");

let notification = new apn.Notification();

// Configure the raw payload for the notification
notification.body = "Hello there!";
notification.payload = {
  "aps": { "content-available": 1 },
  "handle": "1111111",
  "callerName": "Richard Feynman",
  "uuid": "f46bfa0d-a0f7-4db0-990e-f3730342650f"
};
notification.pushType = "voip";
notification.topic = "com.mydoup.application.voip";

console.log(notification, " : Notification Payload");

// Send the notification and handle success or error
provider.send(notification, deviceToken).then((result) => {
  console.log("Notification sent successfully:", JSON.stringify(result));
}).catch((err) => {
  console.error("Notification sending failed:", JSON.stringify(err));
});
