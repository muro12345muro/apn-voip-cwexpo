var apn = require("apn");
var deviceToken = "cQHoFp1ej0yZgpKEFiLeXe:APA91bGP3JsFzjL3FekTWhB91lEfJWIC1pJw85hAqN5i8Mu3Q_2VMr6wGiIxKT_nYdeAwsQMkqhnylHUvfxLU-REv1TzLQVs7ERgg6rWmPBZiOxwnHssEuHX_3m5e30m3V1hEsZ-mtFM";

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
notification.topic = "com.mydoup.application.voip";


provider.send(notification, deviceToken).then((err, result) => {
    if (err) return console.log(JSON.stringify(err));
    return console.log(JSON.stringify(result))
});
