function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sidemenu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        target: "mapview",
        title: "Map",
        id: "__alloyId13"
    });
    var __alloyId14 = [];
    __alloyId14.push($.__views.__alloyId13);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        target: "myapartments",
        title: "My Apartments",
        id: "__alloyId15"
    });
    __alloyId14.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        title: "About",
        id: "__alloyId16"
    });
    __alloyId14.push($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        title: "My Lists",
        id: "__alloyId17"
    });
    __alloyId14.push($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        title: "row1",
        id: "__alloyId18"
    });
    __alloyId14.push($.__views.__alloyId18);
    $.__views.menu = Ti.UI.createTableView({
        top: "0dp",
        left: "0dp",
        width: "250dp",
        backgroundColor: "white",
        data: __alloyId14,
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menu.addEventListener("click", function(e) {
        if ("undefined" != typeof e.row.target) {
            Ti.API.info(JSON.stringify(e));
            Ti.App.fireEvent("nav:openbasewin", {
                target: e.row.target
            });
        }
        Ti.App.fireEvent("slider:toggle");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;