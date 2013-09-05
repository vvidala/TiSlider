function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.profile = Ti.UI.createWindow({
        backgroundColor: "white",
        top: "0",
        navBarHidden: false,
        hideTabBar: true,
        barImage: "/images/NavBG.png",
        width: Ti.Platform.displayCaps.platformWidth,
        backButtonTitleImage: "/images/ButtonMenu.png",
        fullscreen: "false",
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.__alloyId15 = Ti.UI.createButton({
        title: "Hi",
        id: "__alloyId15"
    });
    $.__views.profile.rightNavButton = $.__views.__alloyId15;
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;