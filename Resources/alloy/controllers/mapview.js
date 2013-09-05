function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mapview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mapview = Ti.UI.createWindow({
        backgroundColor: "white",
        top: "0",
        navBarHidden: false,
        hideTabBar: true,
        barImage: "/images/NavBG.png",
        width: Ti.Platform.displayCaps.platformWidth,
        title: "Map View",
        tabBarHidden: "true",
        id: "mapview"
    });
    $.__views.mapview && $.addTopLevelView($.__views.mapview);
    $.__views.leftButton = Ti.UI.createButton({
        backgroundImage: "none",
        image: "/images/ButtonMenu.png",
        top: "0",
        width: "60",
        height: "44",
        style: "none",
        id: "leftButton"
    });
    $.__views.mapview.leftNavButton = $.__views.leftButton;
    $.__views.lab = Ti.UI.createLabel({
        text: "Map View",
        id: "lab"
    });
    $.__views.mapview.add($.__views.lab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.leftButton.addEventListener("click", function(e) {
        Ti.App.fireEvent("slider:toggle", e);
    });
    $.lab.addEventListener("click", function() {
        Ti.API.info("open win fired");
        Ti.App.fireEvent("nav:openwin", {
            target: "profile"
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;