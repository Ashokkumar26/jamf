"use strict";
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
var create_group_name_1 = require("../actions/create-group-name");
var makeError = require("@skitter/automation-utils").makeError;
var errors_1 = require("../common/errors");
describe("Create Group Name", function () {
    it("Create Group Name", function () { return __awaiter(void 0, void 0, void 0, function () {
        var input, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = {
                        name: "helloworld",
                        is_smart: "true",
                        is_notify_on_change: "false",
                        site_name: "Tamizh",
                        username: "sri",
                        auth: {
                            username: "Tamizh",
                            password: "Skitter@123",
                            domain: "https://developer.jamfcloud.com"
                        }
                    };
                    return [4 /*yield*/, create_group_name_1.execute(input)];
                case 1:
                    res = _a.sent();
                    expect(res.action_success).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); }, 50000);
    it("Ivalid User", function () { return __awaiter(void 0, void 0, void 0, function () {
        var error, input, myerror_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    error = makeError(errors_1.errors.INVALID_CREDENTIALS.code, errors_1.errors.INVALID_CREDENTIALS.message);
                    input = {
                        name: "testing",
                        is_smart: "true",
                        is_notify_on_change: "false",
                        site_name: "Tamizh",
                        username: "sri",
                        auth: {
                            username: "asok",
                            password: "Skitter@123",
                            domain: "https://developer.jamfcloud.com"
                        }
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, create_group_name_1.execute(input)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    myerror_1 = _a.sent();
                    expect(myerror_1).toStrictEqual(error);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, 50000);
    it("Ivalid Domain URL", function () { return __awaiter(void 0, void 0, void 0, function () {
        var error, input, myerror_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    error = makeError(errors_1.errors.INVALID_DOMAIN_URL.code, errors_1.errors.INVALID_DOMAIN_URL.message);
                    input = {
                        name: "testing",
                        is_smart: "true",
                        is_notify_on_change: "false",
                        site_name: "Tamizh",
                        username: "sri",
                        auth: {
                            username: "Tamizh",
                            password: "Skitter@123",
                            domain: ""
                        }
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, create_group_name_1.execute(input)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    myerror_2 = _a.sent();
                    expect(myerror_2).toStrictEqual(error);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, 50000);
    it("Ivalid Domain URL", function () { return __awaiter(void 0, void 0, void 0, function () {
        var error, input, myerror_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    error = makeError(errors_1.errors.INVALID_DOMAIN_URL.code, errors_1.errors.INVALID_DOMAIN_URL.message);
                    input = {
                        name: "testing",
                        is_smart: "true",
                        is_notify_on_change: "false",
                        site_name: "Tamizh",
                        username: "sri",
                        auth: {
                            username: "Tamizh",
                            password: "Skitter@123",
                            domain: "https://developer.jaclod.com"
                        }
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, create_group_name_1.execute(input)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    myerror_3 = _a.sent();
                    expect(myerror_3).toStrictEqual(error);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, 50000);
    it("User Group Name Required", function () { return __awaiter(void 0, void 0, void 0, function () {
        var error, input, myerror_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    error = makeError(errors_1.errors.GROUP_NAME_REQUIRED.code, errors_1.errors.GROUP_NAME_REQUIRED.message);
                    input = {
                        name: "",
                        is_smart: "true",
                        is_notify_on_change: "false",
                        site_name: "Tamizh",
                        username: "sri",
                        auth: {
                            username: "Tamizh",
                            password: "Skitter@123",
                            domain: "https://developer.jamfcloud.com"
                        }
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, create_group_name_1.execute(input)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    myerror_4 = _a.sent();
                    expect(myerror_4).toStrictEqual(error);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, 50000);
    it("Group Name Already Exist", function () { return __awaiter(void 0, void 0, void 0, function () {
        var error, input, myerror_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    error = makeError(errors_1.errors.GROUP_NAME_INVALID.code, errors_1.errors.GROUP_NAME_INVALID.message);
                    input = {
                        name: "nameGood",
                        is_smart: "true",
                        is_notify_on_change: "false",
                        site_name: "Tamizh",
                        username: "sri",
                        auth: {
                            username: "Tamizh",
                            password: "Skitter@123",
                            domain: "https://developer.jamfcloud.com"
                        }
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, create_group_name_1.execute(input)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    myerror_5 = _a.sent();
                    expect(myerror_5).toStrictEqual(error);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, 50000);
});
