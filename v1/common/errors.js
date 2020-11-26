"use strict";
exports.__esModule = true;
exports.errorCatches = exports.errors = void 0;
var makeError = require("@skitter/automation-utils").makeError;
exports.errors = {
    GROUPNAME_NOT_EXIST: {
        code: "GROUPNAME_NOT_EXIST",
        message: "Group name doesn't exist"
    },
    DEVICE_NAME_NOT_EXIST: {
        code: "DEVICE_NAME_NOT_EXIST",
        message: "Device name doesn't exist"
    },
    INVALID_CREDENTIALS: {
        code: "INVALID_CREDENTIALS",
        message: "username, password Invalid or unAuthorized user"
    },
    INVALID_DOMAIN_URL: {
        code: "INVALID_DOMAIN_URL",
        message: "This URL doesn't exist on the server. Verify that the URL is correct"
    },
    INVALID_GROUPNAME: {
        code: "INVALID_GROUPNAME",
        message: "Invalid Group name"
    },
    NAME_NOT_FOUND: {
        code: "NAME_NOT_FOUND",
        message: "Name doesn't found"
    },
    GROUP_NAME_INVALID: {
        code: "GROUP_NAME_INVALID",
        message: "Group Name Invalid or Exist"
    },
    IS_SMART_REQUIRED: {
        code: "IS_SMART_REQUIRED",
        message: "Provide Is Smart Attribute"
    },
    GROUP_NAME_REQUIRED: {
        code: "GROUP_NAME_REQUIRED",
        message: "User Group Name is Required"
    },
    INVALID_INPUT: {
        code: "INVALID_INPUT",
        message: "Provide Valid Input"
    },
    SERVER_NOT_FOUND: {
        code: "SERVER_NOT_FOUND",
        message: "The server has not found anything matching the request URI"
    }
};
exports.errorCatches = function (err, notExistName) {
    var error = err.response;
    if (error == undefined) {
        switch (err.code) {
            case "ENOTFOUND":
                throw makeError(exports.errors.INVALID_DOMAIN_URL.code, exports.errors.INVALID_DOMAIN_URL.message);
            case "ETIMEDOUT":
                throw makeError(exports.errors.INVALID_DOMAIN_URL.code, exports.errors.INVALID_DOMAIN_URL.message);
            case "ECONNREFUSED":
                throw makeError(exports.errors.INVALID_DOMAIN_URL.code, exports.errors.INVALID_DOMAIN_URL.message);
        }
    }
    if (error !== undefined) {
        var b = err.response.data;
        var internalError = void 0;
        switch (error.status) {
            case 403:
                throw makeError(exports.errors.INVALID_DOMAIN_URL.code, exports.errors.INVALID_DOMAIN_URL.message);
            case 404:
                internalError = b.includes("server has not found")
                    ? makeError(exports.errors.SERVER_NOT_FOUND.code, exports.errors.SERVER_NOT_FOUND.code)
                    : makeError(notExistName.code, notExistName.message);
                throw internalError;
            case 409:
                internalError = b.includes("Duplicate name")
                    ? makeError(exports.errors.GROUP_NAME_INVALID.code, exports.errors.GROUP_NAME_INVALID.message)
                    : b.includes("is_smart")
                        ? makeError(exports.errors.IS_SMART_REQUIRED.code, exports.errors.IS_SMART_REQUIRED.message)
                        : b.includes("UserGroup name is required")
                            ? makeError(exports.errors.GROUP_NAME_REQUIRED.code, exports.errors.GROUP_NAME_REQUIRED.message)
                            : makeError(exports.errors.INVALID_INPUT.code, exports.errors.INVALID_INPUT.message);
                throw internalError;
            case 400:
                throw makeError(notExistName.code, notExistName.message);
            case 401:
                throw makeError(exports.errors.INVALID_CREDENTIALS.code, exports.errors.INVALID_CREDENTIALS.message);
            default:
                throw makeError(exports.errors.INVALID_INPUT.code, exports.errors.INVALID_INPUT.message);
        }
    }
    throw err;
};
