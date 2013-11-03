/*
 * Service settings
 */
var StripePayment_Settings = {
    "apiKey": "sk_test_LzuQpcpIm2SNozfkZo3eHoEP",
    "token": "pk_test_e2ezfaWmEkWvBmadzkjo5m2x"
}
var TW_Settings = {
    "accountSid": "ACc95cc3432e37e9cbf90ff12887b133d7",
    "authToken": "e38a6ccf888fb4b4c14a39327bf3f659",
    "version": "2010-04-01",
    "PhoneNumber": "425-320-1955"
}

/*
 * Services
 */

var StripePayment_ChargeService = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',

    'serviceSettings': StripePayment_Settings
});

var StripePayment_CardTokenService = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',

    'serviceSettings': StripePayment_Settings
});

var TW_SMS_sendMessage = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',

    'serviceSettings': TW_Settings
});

var TW_SMS_getMessages = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': TW_Settings
});

var TW_SMS_Message_getDetails = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': TW_Settings
});