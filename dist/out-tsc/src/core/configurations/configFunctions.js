"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonUtils_1 = require("../utils/jsonUtils");
var ConfigFunctions = /** @class */ (function () {
    function ConfigFunctions() {
        this.mainConfigsFilePath = "src/configs/mains.json";
    }
    ConfigFunctions.prototype.loadConfig = function () {
        var jsonUtils = new jsonUtils_1.JSONUtil();
        return jsonUtils.loadJSONObject(this.mainConfigsFilePath);
    };
    return ConfigFunctions;
}());
exports.ConfigFunctions = ConfigFunctions;
