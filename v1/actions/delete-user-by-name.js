"use strict";
exports.__esModule = true;
exports.execute = exports.output = exports.input = exports.name = void 0;
var utils_1 = require("../common/utils");
var errors_1 = require("../common/errors");
exports.name = "delete User by Name";
exports.input = [
    {
        key: "name",
        displayTitle: "Name",
        description: "Provide name.",
        required: true,
        config: { kind: "text" }
    },
];
exports.output = {
    properties: {
        action_success: {
            examples: [true],
            type: "boolean",
            title: "action_success",
            $id: "/properties/action_success"
        }
    },
    type: "object",
    title: "Delete User"
};
exports.execute = function (input) {
    var error = errors_1.errors.NAME_NOT_FOUND;
    var uri = "users/name";
    var method = "delete";
    var body = null;
    return utils_1.executeAction(input.auth, input.name, error, utils_1.apiCall, uri, method, body);
};
exports.execute({
    auth: {
        domain: "https://testsample.jamfcloud.com",
        username: "ashok",
        password: "Skitter@123"
    },
    name: "13"
})
    .then(function (res) {
    console.log(res);
})["catch"](function (err) {
    console.log(err);
});
