/*
 * JS for startScreen generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return '0aa6b59b-95c0-4fe4-845d-4a5b1d8c31f5';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "StripePayment_FinalScreen",
    "location": "StripePayment_FinalScreen.html"
}, {
    "name": "StripePayment_PaymentScreen",
    "location": "StripePayment_PaymentScreen.html"
}, {
    "name": "Screen2",
    "location": "Screen2.html"
}, {
    "name": "Screen3",
    "location": "Screen3.html"
}, {
    "name": "TW_Home",
    "location": "TW_Home.html"
}, {
    "name": "TW_SMS_Send",
    "location": "TW_SMS_Send.html"
}, {
    "name": "TW_SMS_Messages",
    "location": "TW_SMS_Messages.html"
}, {
    "name": "TW_SMS_MessageDetails",
    "location": "TW_SMS_MessageDetails.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}];

startScreen_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobiledatepicker_2': 'startScreen_mobiledatepicker_2',
        'mobileradiogroup_32': 'startScreen_mobileradiogroup_32',
        'mobileradiobutton_33': 'startScreen_mobileradiobutton_33',
        'mobileradiobutton_34': 'startScreen_mobileradiobutton_34',
        'mobileradiobutton_35': 'startScreen_mobileradiobutton_35',
        'mobilebutton_10': 'startScreen_mobilebutton_10',
        'googlemap_36': 'startScreen_googlemap_36',
        'marker_37': 'startScreen_marker_37'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=page] div[data-role=footer]").css("bottom", "-36px");
    }

    if (Appery.getTargetPlatform == "I") {
        $.each(window.n2id, function(name, id) {
            var elApperyRole = $("#" + id).attr("data-role");
            if (elApperyRole != "appery_label" && elApperyRole != "appery_link") {
                var appleDataSelector = "#" + id + "[x-apple-data-detectors], #" + id + " [x-apple-data-detectors]";
                $(appleDataSelector).attr("x-apple-data-detectors", "false");
            }
        });
    }

    Appery.CurrentScreen = 'startScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    startScreen_beforeshow = function() {
        Appery.CurrentScreen = "startScreen";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_3671_onLoad = startScreen_onLoad = function() {
        screen_3671_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        startScreen_deviceEvents();
        startScreen_windowEvents();
        screen_3671_elementsEvents();
    }

    // screen window events
    screen_3671_windowEvents = startScreen_windowEvents = function() {

        $('#startScreen').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    startScreen_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_3671_elementsExtraJS = startScreen_elementsExtraJS = function() {
        // screen (startScreen) extra code

        /* mobiledatepicker_2 */

        startScreen_mobiledatepicker_2_selector = "#startScreen_mobiledatepicker_2";
        startScreen_mobiledatepicker_2_dataPickerOptions = {
            dateFormat: "mm/dd/yy",
            firstDay: 0,

            maxDate: new Date(""),

            minDate: new Date(""),

            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            showOtherMonths: true
        };

        startScreen_mobiledatepicker_2_dataPickerOptions.defaultDate = new Date("11/02/2013");

        Appery.__registerComponent('mobiledatepicker_2', new Appery.ApperyMobileDatePickerComponent("startScreen_mobiledatepicker_2", startScreen_mobiledatepicker_2_dataPickerOptions));

        /* googlemap_36 */

        $("[name = 'googlemap_36']").wrap("<div/>");
        $("[name = 'googlemap_36']").parent().css("margin-left", $("[name = 'googlemap_36']").css("margin-left"));
        $("[name = 'googlemap_36']").parent().css("margin-right", $("[name = 'googlemap_36']").css("margin-right"));
        $("[name = 'googlemap_36']").css("margin-left", '0');
        $("[name = 'googlemap_36']").css("margin-right", '0');

        var googlemap_36_options = {
            markerSourceName: "googlemap_36_markers",
            latitude: "47.604195",
            longitude: "-122.334548",
            address: "seattle, WA",
            zoom: 10,
            showLocationMarker: false
        }

        Appery.__registerComponent('googlemap_36', new Appery.ApperyMapComponent("googlemap_36", googlemap_36_options));
        $("[name='googlemap_36_markers'] [apperytype='marker']").attr("reRender", "googlemap_36");
        $("[name='googlemap_36']").closest("[data-role='page']").bind({
            pageshow: function() {
                if (Appery('googlemap_36') != undefined) {
                    Appery('googlemap_36').refresh();
                }
            }
        });

    }

    // screen elements handler
    screen_3671_elementsEvents = startScreen_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#startScreen_mobilecontainer1 [name="mobilebutton_10"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('Screen2', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        });

    }

    $("#startScreen").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        startScreen_beforeshow();
    });

    if (runBeforeShow) {
        startScreen_beforeshow();
    } else {
        startScreen_onLoad();
    }

}

$("#startScreen").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    startScreen_js();
});