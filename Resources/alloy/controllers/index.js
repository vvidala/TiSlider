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
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        target: "mapview",
        title: "Map",
        id: "__alloyId17"
    });
    var __alloyId18 = [];
    __alloyId18.push($.__views.__alloyId17);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        target: "myapartments",
        title: "My Apartments",
        id: "__alloyId19"
    });
    __alloyId18.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        title: "About",
        id: "__alloyId20"
    });
    __alloyId18.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        title: "My Lists",
        id: "__alloyId21"
    });
    __alloyId18.push($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        title: "row1",
        id: "__alloyId22"
    });
    __alloyId18.push($.__views.__alloyId22);
    $.__views.menu = Ti.UI.createTableView({
        data: __alloyId18,
        id: "menu"
    });
    $.__views.sideScreen.add($.__views.menu);
    $.__views.index = Ti.UI.createTabGroup({
        id: "index",
        width: Ti.Platform.displayCaps.platformWidth
    });
    $.__views.__alloyId23 = Alloy.createController("mapview", {
        id: "__alloyId23"
    });
    $.__views.mapview = Ti.UI.createTab({
        window: $.__views.__alloyId23.getViewEx({
            recurse: true
        }),
        title: "Tab 1",
        id: "mapview"
    });
    $.__views.index.addTab($.__views.mapview);
    $.__views.__alloyId25 = Alloy.createController("myapartments", {
        id: "__alloyId25"
    });
    $.__views.myapartments = Ti.UI.createTab({
        window: $.__views.__alloyId25.getViewEx({
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
    Ti.App.addEventListener("slider:toggle", function() {
        toggleSlider();
    });
    $.sideScreen.open();
    $.index.open();
    $.menu.addEventListener("click", function(e) {
        "undefined" != typeof e.row.target && $.index.setActiveTab(eval("$." + e.row.target));
        toggleSlider();
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