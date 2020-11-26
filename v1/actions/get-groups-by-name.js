"use strict";
exports.__esModule = true;
exports.execute = exports.output = exports.input = exports.name = void 0;
var utils_1 = require("../common/utils");
var errors_1 = require("../common/errors");
exports.name = "Get User Group";
exports.input = [
    {
        key: "groupName",
        displayTitle: "Group Name",
        description: "Provide group name.",
        required: true,
        config: { kind: "text" }
    },
];
exports.output = {
    properties: {
        id: {
            examples: [1],
            type: "number",
            title: "Group Id",
            $id: "/properties/id"
        },
        name: {
            examples: ["Testing"],
            type: "string",
            title: "Group Name",
            $id: "/properties/name"
        },
        is_smart: {
            examples: [true],
            type: "boolean",
            title: "Is Smart",
            $id: "/properties/is_smart"
        },
        is_notify_on_change: {
            examples: [true],
            type: "boolean",
            title: "Is Notify On Change",
            $id: "/properties/is_notify_on_change"
        },
        site: {
            type: "object",
            properties: {
                id: {
                    examples: [1],
                    type: "number",
                    title: "Site Id",
                    $id: "/properties/site/id"
                },
                name: {
                    examples: ["None"],
                    type: "string",
                    title: "Site Name",
                    $id: "/properties/site/name"
                }
            },
            title: "Site"
        },
        users: {
            type: "collection",
            title: "User Details",
            $id: "/properties/users",
            item: {
                type: "object",
                properties: {
                    id: {
                        examples: [1],
                        type: "number",
                        title: "User Id",
                        $id: "/properties/id"
                    },
                    username: {
                        examples: ["Jhon"],
                        type: "string",
                        title: "User Name",
                        $id: "/properties/username"
                    },
                    full_name: {
                        examples: ["Jhon89"],
                        type: "string",
                        title: "Full Name",
                        $id: "/properties/full_name"
                    },
                    phone_number: {
                        examples: "[123-1234-123]",
                        type: "number",
                        title: "Phone Number",
                        $id: "/properties/phone_number"
                    },
                    email_address: {
                        examples: ["johnsmith@company.com"],
                        type: "string",
                        title: "Email",
                        $id: "/properties/email_address"
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
    title: "User Group"
};
exports.execute = function (input) {
    var error = errors_1.errors.GROUPNAME_NOT_EXIST;
    var method = "get";
    var getGroupsName = {
        input: input,
        uri: "usergroups/name"
    };
    return utils_1.getExecuteAction(getGroupsName, input.groupName, error, method);
};
exports.execute({
    auth: {
        domain: "https://testsample.jamfcloud.com",
        username: "ashok",
        password: "Skitter@123"
    },
    groupName: "Hello"
})
    .then(function (res) {
    console.log(res);
})["catch"](function (err) {
    console.log(err);
});
