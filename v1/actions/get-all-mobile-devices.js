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
exports.execute = exports.output = exports.input = void 0;
var utils_1 = require("../common/utils");
var errors_1 = require("../common/errors");
exports.input = [
    {
        key: "username",
        displayTitle: "User Name",
        description: "Provide user name.",
        required: true,
        config: { kind: "text" }
    },
];
exports.output = {
    properties: {
        mobile_devices: {
            type: "collection",
            title: "mobile_devices",
            $id: "/properties/mobile_devices",
            item: {
                type: "object",
                properties: {
                    id: {
                        examples: [1],
                        type: "number",
                        title: "Id",
                        $id: "/properties/id"
                    },
                    name: {
                        examples: ["Tinas iPad"],
                        type: "string",
                        title: "Name",
                        $id: "/properties/name"
                    },
                    device_name: {
                        examples: ["Tinas iPad"],
                        type: "string",
                        title: "Device Name",
                        $id: "/properties/device_name"
                    },
                    udid: {
                        examples: ["270aae10800b6e61a2ee2bbc285eb967050b5984"],
                        type: "string",
                        title: "Udid",
                        $id: "/properties/udid"
                    },
                    serial_number: {
                        examples: ["C02Q7KHTGFWF"],
                        type: "string",
                        title: "Serial Number",
                        $id: "/properties/serial_number"
                    },
                    phone_number: {
                        examples: ["123-1234-123"],
                        type: "string",
                        title: "Phone Number",
                        $id: "/properties/phone_number"
                    },
                    wifi_mac_address: {
                        examples: ["E0:AC:CB:97:36:G4"],
                        type: "string",
                        title: "Wifi Mac Address",
                        $id: "/properties/wifi_mac_address"
                    },
                    managed: {
                        examples: [true],
                        type: "boolean",
                        title: "Managed",
                        $id: "/properties/managed"
                    },
                    supervised: {
                        examples: [true],
                        type: "boolean",
                        title: "Supervised",
                        $id: "/properties/supervised"
                    },
                    model: {
                        examples: ["iPhone 6s"],
                        type: "string",
                        title: "Model",
                        $id: "/properties/model"
                    },
                    model_identifier: {
                        examples: ["iPhone8,1"],
                        type: "string",
                        title: "Model Identifier",
                        $id: "/properties/model_identifier"
                    },
                    modelDisplay: {
                        examples: ["iPhone 6s"],
                        type: "string",
                        title: "ModelDisplay",
                        $id: "/properties/modelDisplay"
                    },
                    model_display: {
                        examples: ["iPhone 6s"],
                        type: "string",
                        title: "Model Display",
                        $id: "/properties/model_display"
                    },
                    username: {
                        examples: ["Jhon"],
                        type: "string",
                        title: "User Name",
                        $id: "/properties/username"
                    }
                }
            }
        },
        action_success: {
            examples: [true],
            type: "boolean",
            title: "action_success",
            $id: "/properties/action_success"
        }
    },
    type: "object",
    title: "MobileDevices"
};
exports.execute = function (input) { return __awaiter(void 0, void 0, void 0, function () {
    var error, uri, method, name;
    return __generator(this, function (_a) {
        error = errors_1.errors.NAME_NOT_FOUND;
        uri = "mobiledevices";
        method = "get";
        name = "";
        return [2 /*return*/, utils_1.getExecuteAction(input, name, error, uri, method)];
    });
}); };
exports.execute({
    auth: {
        domain: "https://testsample.jamfcloud.com",
        username: "ashok",
        password: "Skitter@123"
    }
})
    .then(function (res) {
    console.log(res);
})["catch"](function (err) {
    console.log(err);
});
