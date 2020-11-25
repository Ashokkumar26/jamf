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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.postExecuteAction = exports.getExecuteAction = exports.deleteCall = exports.getCall = exports.putCall = exports.postCall = void 0;
var axios_1 = require("axios");
var base64 = require("base-64");
var R = require("ramda");
var errors_1 = require("../common/errors");
// var convert = require("xml-js");
var encodeCredentials = function (username, password) {
    return R.compose(R.concat("Basic "), base64.encode, R.join(":"))([username, password]);
};
var header = function (username, password) { return ({
    headers: {
        authorization: encodeCredentials(username, password),
        Accept: "application/json",
        "Content-Type": "application/xml"
    }
}); };
exports.postCall = function (_a, uri, body) {
    var domain = _a.domain, username = _a.username, password = _a.password;
    return axios_1["default"].post(domain + "/JSSResource/" + uri, body, header(username, password));
};
exports.putCall = function (_a, uri, body) {
    var domain = _a.domain, username = _a.username, password = _a.password;
    return axios_1["default"].put(domain + "/JSSResource/" + uri, body, header(username, password));
};
exports.getCall = function (_a, name, uri) {
    var domain = _a.domain, username = _a.username, password = _a.password;
    return axios_1["default"].get(domain + "/JSSResource/" + uri + "/" + name, header(username, password));
};
exports.deleteCall = function (_a, name, uri) {
    var domain = _a.domain, username = _a.username, password = _a.password;
    return axios_1["default"]["delete"](domain + "/JSSResource/" + uri + "/" + name, header(username, password));
};
exports.getExecuteAction = function (input, name, error, uri, method) { return __awaiter(void 0, void 0, void 0, function () {
    var datalist, _a, list, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                datalist = void 0;
                _a = method;
                switch (_a) {
                    case "get": return [3 /*break*/, 1];
                    case "delete": return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, exports.getCall(input.auth, name, uri)];
            case 2:
                datalist = _b.sent();
                _b.label = 3;
            case 3: return [4 /*yield*/, exports.deleteCall(input.auth, name, uri)];
            case 4:
                datalist = _b.sent();
                _b.label = 5;
            case 5:
                list = datalist.data;
                switch (method) {
                    case "delete":
                        return [2 /*return*/, { action_success: true }];
                    case "get":
                        return [2 /*return*/, __assign(__assign({}, list), { action_success: true })];
                }
                return [3 /*break*/, 7];
            case 6:
                err_1 = _b.sent();
                throw errors_1.errorCatches(err_1, error);
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.postExecuteAction = function (input, error, uri, method, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, url, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                _a = method;
                switch (_a) {
                    case "post": return [3 /*break*/, 1];
                    case "put": return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, exports.postCall(input.auth, uri, body)];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3: return [4 /*yield*/, exports.putCall(input.auth, uri, body)];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5:
                url = uri + "/name";
                return [4 /*yield*/, exports.getExecuteAction(input, input.name, error, url, "get")];
            case 6: return [2 /*return*/, _b.sent()];
            case 7:
                err_2 = _b.sent();
                throw errors_1.errorCatches(err_2, error);
            case 8: return [2 /*return*/];
        }
    });
}); };
