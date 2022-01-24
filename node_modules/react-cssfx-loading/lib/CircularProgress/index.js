"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../css/CircularProgress.css");
var react_1 = __importDefault(require("react"));
var CircularProgress = function (_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.color, color = _d === void 0 ? "#0d6efd" : _d, _e = _a.width, width = _e === void 0 ? "3em" : _e, _f = _a.height, height = _f === void 0 ? "3em" : _f, style = _a.style, _g = _a.duration, duration = _g === void 0 ? "2s" : _g, others = __rest(_a, ["className", "color", "width", "height", "style", "duration"]);
    return (react_1.default.createElement("svg", __assign({}, others, { crossOrigin: "anonymous", viewBox: "25 25 50 50", style: __assign(__assign({}, style), (_b = {}, _b["--width"] = width, _b["--height"] = height, _b["--color"] = color, _b["--duration"] = duration, _b)), className: "cssfx-circular-progress-svg " + className }),
        react_1.default.createElement("circle", { className: "cssfx-circular-progress-circle", cx: "50", cy: "50", r: "20" })));
};
exports.default = CircularProgress;
//# sourceMappingURL=index.js.map