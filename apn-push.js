var apn = require("apn");
var deviceToken = "4810ee474b6942d3ffdb240b67962d89b1e27652478bb6e6e59012d3240c8978";

// Create a new APNs provider with your credentials
let provider = new apn.Provider({
    //token: {
   //   key: "AuthKey_HH5BFZJZD4.p8",
    // keyId: "HH5BFZJZD4",
   //   teamId: "9U32ZT7NKJ"
  //  },
    production: false // Set to true for production environment
});

console.log(deviceToken, " : Device Token");

let notification = new apn.Notification();
notification.rawPayload = {
    "aps": {
        "alert": {
            "uuid": "96ad24fa-dc58-4ab0-a0b4-42b44bb5973e",
            "incoming_caller_id": "123456789",
            "incoming_caller_name": "Tester",
        }
    },
    "--cert": "VOIP.pem" // Custom propert
};

notification.pushType = "voip";
notification.topic = "com.bakiryazilim.BarcodeApp.voip";


console.log(notification, " : Notification Payload");

// Send the notification and handle success or error
provider.send(notification, deviceToken).then((result) => {
  console.log("Notification sent successfully:", JSON.stringify(result));
}).catch((err) => {
  console.error("Notification sending failed:", JSON.stringify(err));
});
