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
            "uuid": "32323232323",
            "incoming_caller_id": "123456789",
            "incoming_caller_name": "Tester",
        }
    }
};

console.log(notification, " : notification-sdad_ad_AS");

provider.send(notification, deviceToken).then((err, result) => {
    if (err) return console.log(JSON.stringify(err));
    return console.log(JSON.stringify(result))
});
