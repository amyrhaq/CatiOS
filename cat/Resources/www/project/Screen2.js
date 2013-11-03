/*
 * JS for Screen2 generated by Appery.io
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

Screen2_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'html_4': 'Screen2_html_4',
        'spacer_8': 'Screen2_spacer_8',
        'mobileselectmenu_5': 'Screen2_mobileselectmenu_5',
        'mobileselectmenu_5-0': 'Screen2_mobileselectmenu_5-0',
        'mobilecheckboxgroup_9': 'Screen2_mobilecheckboxgroup_9',
        'mobilecheckbox_10': 'Screen2_mobilecheckbox_10',
        'mobilecheckbox_11': 'Screen2_mobilecheckbox_11',
        'mobilecheckbox_12': 'Screen2_mobilecheckbox_12',
        'mobilebutton_20': 'Screen2_mobilebutton_20',
        'mobilebutton_7': 'Screen2_mobilebutton_7'
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

    Appery.CurrentScreen = 'Screen2';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    Screen2_beforeshow = function() {
        Appery.CurrentScreen = "Screen2";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_4A0E_onLoad = Screen2_onLoad = function() {
        screen_4A0E_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        Screen2_deviceEvents();
        Screen2_windowEvents();
        screen_4A0E_elementsEvents();
    }

    // screen window events
    screen_4A0E_windowEvents = Screen2_windowEvents = function() {

        $('#Screen2').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    Screen2_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_4A0E_elementsExtraJS = Screen2_elementsExtraJS = function() {
        // screen (Screen2) extra code

        /* mobileselectmenu_5 */

        $("#Screen2_mobileselectmenu_5").parent().find("a.ui-btn").attr("tabindex", "1");

    }

    // screen elements handler
    screen_4A0E_elementsEvents = Screen2_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#Screen2_mobilecontainer [name="mobilebutton_20"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('StripePayment_PaymentScreen', {
                        transition: 'flip',
                        reverse: false
                    });

                }
            },
        });
        $('#Screen2_mobilecontainer [name="mobilebutton_7"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('TW_Home', {
                        transition: 'pop',
                        reverse: false
                    });

                }
            },
        });

    }

    $("#Screen2").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        Screen2_beforeshow();
    });

    if (runBeforeShow) {
        Screen2_beforeshow();
    } else {
        Screen2_onLoad();
    }

}

$("#Screen2").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    Screen2_js();
});