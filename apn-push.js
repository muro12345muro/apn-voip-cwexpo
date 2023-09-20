var apn = require("apn");
var deviceToken = "*yourDeviceToken*";
let provider = new apn.Provider( 
    {
        token: {
            key: "*yourAuthKey.p8*",
            keyId: "*yourKeyId*",
            teamId: "*yourTeamId*"
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
