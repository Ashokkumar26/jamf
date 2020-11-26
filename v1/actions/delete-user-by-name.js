"use strict";
exports.__esModule = true;
exports.execute = exports.output = exports.input = exports.name = void 0;
var utils_1 = require("../common/utils");
var errors_1 = require("../common/errors");
exports.name = "Delete User";
exports.input = [
    {
        key: "name",
        displayTitle: "Username",
        description: "Provide Username.",
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
    var method = "delete";
    var deleteUser = {
        input: input,
        uri: "users/name"
    };
    return utils_1.getExecuteAction(deleteUser, input.name, error, method);
};
// execute({
//   auth: {
//     domain: "https://testsample.jamfcloud.com",
//     username: "ashok",
//     password: "Skitter@123",
//   },
//   name: "13",
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
