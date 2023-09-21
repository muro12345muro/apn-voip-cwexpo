var apn = require("apn");
var deviceToken = "*yourDeviceToken*";
let provider = new apn.Provider( 
    {
        token: {
            key: "AuthKey_HH5BFZJZD4.p8",
            keyId: "HH5BFZJZD4",
            teamId: "9U32ZT7NKJ"
        },
        production: false
    });

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
notification.topic = "*yourBundleId*.voip";


provider.send(notification, deviceToken).then((err, result) => {
    if (err) return console.log(JSON.stringify(err));
    return console.log(JSON.stringify(result))
});
