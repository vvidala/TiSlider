function Controller() {
    function toggleSlider() {
        if (hasSlided) {
            direction = "reset";
            $.movableview.animate(animateReset);
            hasSlided = false;
        } else {
            direction = "right";
            $.movableview.animate(animateRight);
            hasSlided = true;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "true",
        exitOnClose: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.containerview = Ti.UI.createView({
        id: "containerview"
    });
    $.__views.index.add($.__views.containerview);
    $.__views.leftMenu = Ti.UI.createView({
        top: "0dp",
        left: "0dp",
        width: "250dp",
        zIndex: "2",
        backgroundColor: "#FFF",
        id: "leftMenu"
    });
    $.__views.containerview.add($.__views.leftMenu);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        target: "mapview",
        title: "Map",
        id: "__alloyId16"
    });
    var __alloyId17 = [];
    __alloyId17.push($.__views.__alloyId16);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        target: "myapartments",
        title: "My Apartments",
        id: "__alloyId18"
    });
    __alloyId17.push($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        title: "About",
        id: "__alloyId19"
    });
    __alloyId17.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        title: "My Lists",
        id: "__alloyId20"
    });
    __alloyId17.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        title: "row1",
        id: "__alloyId21"
    });
    __alloyId17.push($.__views.__alloyId21);
    $.__views.menu = Ti.UI.createTableView({
        data: __alloyId17,
        id: "menu"
    });
    $.__views.leftMenu.add($.__views.menu);
    $.__views.movableview = Ti.UI.createView({
        left: "0",
        zIndex: "3",
        width: "100%",
        id: "movableview"
    });
    $.__views.containerview.add($.__views.movableview);
    $.__views.navview = Alloy.createController("navbar", {
        id: "navview",
        __parentSymbol: $.__views.movableview
    });
    $.__views.navview.setParent($.__views.movableview);
    $.__views.contentview = Ti.UI.createView({
        left: "0dp",
        width: "100%",
        height: Ti.UI.Fill,
        top: "44",
        backgroundColor: "white",
        id: "contentview"
    });
    $.__views.movableview.add($.__views.contentview);
    $.__views.__alloyId22 = Alloy.createController("mapview", {
        id: "__alloyId22",
        __parentSymbol: $.__views.contentview
    });
    $.__views.__alloyId22.setParent($.__views.contentview);
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
    Ti.App.addEventListener("slider:toggle", function() {
        toggleSlider();
    });
    $.index.open();
    var windows = [];
    windows.push($.contentview.children[0]);
    $.menu.addEventListener("click", function(e) {
        Ti.API.info(JSON.stringify(e));
        if ("undefined" != typeof e.row.target) {
            windows.forEach(function(win) {
                $.contentview.remove(win);
            });
            windows = [];
            var view = Alloy.createController(e.row.target).getView();
            $.contentview.add(view);
            windows.push(view);
        }
        toggleSlider();
    });
    Ti.App.addEventListener("nav:openwin", function() {
        var win = Alloy.createController("profile").getView();
        $.contentview.add(win);
        windows.push(win);
    });
    $.index.addEventListener("android:back", function() {
        if (windows.length > 1) {
            $.contentview.remove(windows[windows.length - 1]);
            windows.pop();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;