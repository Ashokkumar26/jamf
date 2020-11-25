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
    }
};
exports.errorCatches = function (err, notExistName) {
    var error = err.response;
    if (error == undefined) {
        if (err.code === "ENOTFOUND" || "ETIMEDOUT" || "ECONNREFUSED") {
            throw makeError(exports.errors.INVALID_DOMAIN_URL.code, exports.errors.INVALID_DOMAIN_URL.message);
        }
    }
    if (error !== undefined) {
        switch (error.status) {
            case 403:
                throw makeError(exports.errors.INVALID_DOMAIN_URL.code, exports.errors.INVALID_DOMAIN_URL.message);
            // case 404:
            //   throw makeError(notExistName.code, notExistName.message);
            // case 409:
            //   throw makeError(notExistName.code, notExistName.message);
            // case 400:
            //   throw makeError(notExistName.code, notExistName.message);
            case 401:
                throw makeError(exports.errors.INVALID_CREDENTIALS.code, exports.errors.INVALID_CREDENTIALS.message);
            // default:
            //   throw makeError(notExistName.code, notExistName.message);
        }
    }
    throw err;
};
