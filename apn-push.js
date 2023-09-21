var apn = require("apn");
var deviceToken = "5b9aa01e8ec8214f1d7e570ee84d66936bd7af8a13eeaa455b6cbaab5c5aa5fc";

let provider = new apn.Provider( 
    {
        token: {
            key: "AuthKey_HH5BFZJZD4.p8",
            keyId: "HH5BFZJZD4",
            teamId: "9U32ZT7NKJ"
        },
        production: false
    });
console.log(deviceToken, " : sdad_ad_AS");


let notification = new apn.Notification();
notification.rawPayload = {
    "aps": {
        "alert": {
            "uuid": "*yourUuid*",
            "incoming_caller_id": "123456789",
            "incoming_caller_name": "Tester",
        }
    }
};
notification.pushType = "voip";
notification.topic = "com.mydoup.application.voip";

notification.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
notification.badge = 3;
notification.sound = "ping.aiff";
notification.alert = "\uD83D\uDCE7 \u2709 You have a new message";
notification.payload = {'messageFrom': 'John Appleseed'};
notification.topic = "com.mydoup.application";


provider.send(notification, deviceToken).then((err, result) => {
    if (err) return console.log(JSON.stringify(err));
    return console.log(JSON.stringify(result))
});
