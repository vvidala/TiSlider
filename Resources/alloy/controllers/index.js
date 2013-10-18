function Controller() {
    function toggleSlider() {
        if (hasSlided) {
            direction = "reset";
            $.index.animate(animateReset);
            hasSlided = false;
        } else {
            direction = "right";
            $.index.animate(animateRight);
            hasSlided = true;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.sideScreen = Ti.UI.createWindow({
        id: "sideScreen"
    });
    $.__views.sideScreen && $.addTopLevelView($.__views.sideScreen);
    $.__views.__alloyId19 = Alloy.createController("sidemenu", {
        id: "__alloyId19",
        __parentSymbol: $.__views.sideScreen
    });
    $.__views.__alloyId19.setParent($.__views.sideScreen);
    $.__views.index = Ti.UI.createTabGroup({
        barImage: "/images/NavBG.png",
        width: "100%",
        id: "index"
    });
    $.__views.__alloyId20 = Alloy.createController("mapview", {
        id: "__alloyId20"
    });
    $.__views.mapview = Ti.UI.createTab({
        barImage: "/images/NavBG.png",
        width: "100%",
        window: $.__views.__alloyId20.getViewEx({
            recurse: true
        }),
        title: "Tab 1",
        id: "mapview"
    });
    $.__views.index.addTab($.__views.mapview);
    $.__views.__alloyId22 = Alloy.createController("myapartments", {
        id: "__alloyId22"
    });
    $.__views.myapartments = Ti.UI.createTab({
        barImage: "/images/NavBG.png",
        width: "100%",
        window: $.__views.__alloyId22.getViewEx({
            recurse: true
        }),
        title: "Tab 2",
        id: "myapartments"
    });
    $.__views.index.addTab($.__views.myapartments);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animateRight = Ti.UI.createAnimation({
        left: 250,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var animateReset = Ti.UI.createAnimation({
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var animateLeft = Ti.UI.createAnimation({
        left: -250,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var touchStartX = 0;
    var sliderMoving = false;
    var touchLeftStarted = false;
    var buttonPressed = false;
    var hasSlided = false;
    var direction = "reset";
    $.sideScreen.open();
    $.index.open();
    Ti.Gesture.addEventListener("orientationchange", function() {
        $.index.width = Ti.Platform.displayCaps.platformWidth;
    });
    Ti.App.addEventListener("slider:toggle", function() {
        toggleSlider();
    });
    Ti.App.addEventListener("nav:openbasewin", function(e) {
        $.index.setActiveTab(eval("$." + e.target));
    });
    Ti.App.addEventListener("nav:openwin", function(e) {
        Ti.API.info(JSON.stringify(e));
        var win = Alloy.createController(e.target).getView();
        $.index.activeTab.open(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;