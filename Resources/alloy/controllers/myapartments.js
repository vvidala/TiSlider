function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "myapartments";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.myapartments = Ti.UI.createWindow({
        backgroundColor: "white",
        top: "0",
        navBarHidden: false,
        hideTabBar: true,
        barImage: "/images/NavBG.png",
        width: Ti.Platform.displayCaps.platformWidth,
        title: "My Apartments",
        tabBarHidden: "true",
        id: "myapartments"
    });
    $.__views.myapartments && $.addTopLevelView($.__views.myapartments);
    $.__views.__alloyId10 = Ti.UI.createView({
        backgroundColor: "white",
        top: "0",
        navBarHidden: false,
        hideTabBar: true,
        barImage: "/images/NavBG.png",
        width: Ti.Platform.displayCaps.platformWidth,
        fullscreen: "false",
        id: "__alloyId10"
    });
    $.__views.myapartments.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        text: "My Apartments",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;