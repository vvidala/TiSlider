function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.sideScreen = Ti.UI.createWindow({
        id: "sideScreen"
    });
    $.__views.sideScreen && $.addTopLevelView($.__views.sideScreen);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        title: "Map",
        id: "__alloyId11"
    });
    var __alloyId12 = [];
    __alloyId12.push($.__views.__alloyId11);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        title: "My Apartments",
        id: "__alloyId13"
    });
    __alloyId12.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        title: "About",
        id: "__alloyId14"
    });
    __alloyId12.push($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        title: "My Lists",
        id: "__alloyId15"
    });
    __alloyId12.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        title: "row1",
        id: "__alloyId16"
    });
    __alloyId12.push($.__views.__alloyId16);
    $.__views.menu = Ti.UI.createTableView({
        data: __alloyId12,
        id: "menu"
    });
    $.__views.sideScreen.add($.__views.menu);
    $.__views.index = Ti.UI.createTabGroup({
        id: "index",
        width: Ti.Platform.displayCaps.platformWidth
    });
    $.__views.__alloyId18 = Ti.UI.createWindow({
        backgroundColor: "white",
        top: "0",
        navBarHidden: false,
        hideTabBar: true,
        barImage: "/images/NavBG.png",
        width: Ti.Platform.displayCaps.platformWidth,
        title: "Tab 1",
        id: "__alloyId18"
    });
    $.__views.leftButton = Ti.UI.createButton({
        backgroundImage: "none",
        image: "/images/ButtonMenu.png",
        top: "0",
        width: "60",
        height: "44",
        style: "none",
        id: "leftButton"
    });
    $.__views.__alloyId18.leftNavButton = $.__views.leftButton;
    $.__views.lab = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "I am Window 1",
        id: "lab"
    });
    $.__views.__alloyId18.add($.__views.lab);
    $.__views.__alloyId17 = Ti.UI.createTab({
        window: $.__views.__alloyId18,
        title: "Tab 1",
        id: "__alloyId17"
    });
    $.__views.index.addTab($.__views.__alloyId17);
    $.__views.__alloyId20 = Ti.UI.createWindow({
        backgroundColor: "white",
        top: "0",
        navBarHidden: false,
        hideTabBar: true,
        barImage: "/images/NavBG.png",
        width: Ti.Platform.displayCaps.platformWidth,
        title: "Tab 2",
        id: "__alloyId20"
    });
    $.__views.lab = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "I am the My Favs window",
        id: "lab"
    });
    $.__views.__alloyId20.add($.__views.lab);
    $.__views.myAptsTab = Ti.UI.createTab({
        window: $.__views.__alloyId20,
        title: "Tab 2",
        id: "myAptsTab"
    });
    $.__views.index.addTab($.__views.myAptsTab);
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
    Ti.UI.createAnimation({
        left: -250,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var hasSlided = false;
    var direction = "reset";
    $.leftButton.addEventListener("click", function() {
        if (hasSlided) {
            direction = "reset";
            $.leftButton.touchEnabled = true;
            $.index.animate(animateReset);
            hasSlided = false;
        } else {
            direction = "right";
            $.leftButton.touchEnabled = false;
            $.index.animate(animateRight);
            hasSlided = true;
        }
    });
    $.sideScreen.open();
    $.index.open();
    $.menu.addEventListener("click", function(e) {
        Ti.API.info(JSON.stringify(e));
        "My Apartments" == e.row.title && $.index.setActiveTab($.myAptsTab);
        direction = "reset";
        $.leftButton.touchEnabled = true;
        $.index.animate(animateReset);
        hasSlided = false;
    });
    $.lab.addEventListener("click", function() {
        var win = Alloy.createController("profile").getView();
        $.index.activeTab.open(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;