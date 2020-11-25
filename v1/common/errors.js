"use strict";
exports.__esModule = true;
exports.errorCatches = exports.errors = void 0;
var automation_utils_1 = require("@skitter/automation-utils");
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
    }
};
exports.errorCatches = function (err, notExistName) {
    var error = err.response;
    if (error == undefined) {
        switch (err.code) {
            case "ENOTFOUND":
                throw automation_utils_1.makeError(exports.errors.INVALID_DOMAIN_URL.code, exports.errors.INVALID_DOMAIN_URL.message);
            case "ETIMEDOUT":
                throw automation_utils_1.makeError(exports.errors.INVALID_DOMAIN_URL.code, exports.errors.INVALID_DOMAIN_URL.message);
            case "ECONNREFUSED":
                throw automation_utils_1.makeError(exports.errors.INVALID_DOMAIN_URL.code, exports.errors.INVALID_DOMAIN_URL.message);
        }
    }
    if (error !== undefined) {
        switch (error.status) {
            case 403:
                throw automation_utils_1.makeError(exports.errors.INVALID_DOMAIN_URL.code, exports.errors.INVALID_DOMAIN_URL.message);
            case 404:
                throw automation_utils_1.makeError(notExistName.code, notExistName.message);
            case 409:
                throw automation_utils_1.makeError(notExistName.code, notExistName.message);
            case 400:
                throw automation_utils_1.makeError(notExistName.code, notExistName.message);
            case 401:
                throw automation_utils_1.makeError(exports.errors.INVALID_CREDENTIALS.code, exports.errors.INVALID_CREDENTIALS.message);
        }
    }
    throw err;
};
