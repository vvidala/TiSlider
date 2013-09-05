function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "navbar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.navview = Ti.UI.createView({
        top: "0dp",
        left: "0dp",
        width: "100%",
        height: "44dp",
        backgroundImage: "/images/NavBG.png",
        id: "navview"
    });
    $.__views.navview && $.addTopLevelView($.__views.navview);
    $.__views.leftButton = Ti.UI.createButton({
        backgroundImage: "none",
        image: "/images/ButtonMenu.png",
        left: "0",
        top: "0",
        width: "60dp",
        height: "44dp",
        backgroundColor: "transparent",
        id: "leftButton"
    });
    $.__views.navview.add($.__views.leftButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    void 0 !== $.leftButton && $.leftButton.addEventListener("click", function(e) {
        Ti.App.fireEvent("slider:toggle", e);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;