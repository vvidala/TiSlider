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
        width: "100%",
        title: "My Apartments",
        tabBarHidden: "true",
        id: "myapartments"
    });
    $.__views.myapartments && $.addTopLevelView($.__views.myapartments);
    $.__views.leftButton = Ti.UI.createButton({
        backgroundImage: "none",
        image: "/images/ButtonMenu.png",
        top: "0",
        width: "60",
        height: "44",
        style: "none",
        id: "leftButton"
    });
    $.__views.myapartments.leftNavButton = $.__views.leftButton;
    $.__views.__alloyId8 = Ti.UI.createView({
        backgroundColor: "white",
        top: "0",
        navBarHidden: false,
        hideTabBar: true,
        barImage: "/images/NavBG.png",
        width: "100%",
        fullscreen: "false",
        id: "__alloyId8"
    });
    $.__views.myapartments.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "My Apartments",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.leftButton.addEventListener("click", function(e) {
        Ti.App.fireEvent("slider:toggle", e);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;