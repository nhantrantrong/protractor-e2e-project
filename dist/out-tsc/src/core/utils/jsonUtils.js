"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import the fs module
var fs = require('fs');
var JSONUtil = /** @class */ (function () {
    function JSONUtil() {
    }
    JSONUtil.prototype.loadJSONObject = function (path) {
        // read the file into raw data
        var rawdata = fs.readFileSync(path);
        // return the loaded JSON format from JSON data
        return JSON.parse(rawdata);
    };
    return JSONUtil;
}());
exports.JSONUtil = JSONUtil;
