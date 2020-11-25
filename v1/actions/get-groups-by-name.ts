import { getExecuteAction } from "../common/utils";
import { errors } from "../common/errors";
import { AuthT, UserGroupByName } from "../common/type";

export const name = "Get User Group";

export const input = [
  {
    key: "groupName",
    displayTitle: "Group Name",
    description: "Provide group name.",
    required: true,
    config: { kind: "text" },
  },
];

export const output = {
  properties: {
    id: {
      examples: [1],
      type: "number",
      title: "Group Id",
      $id: "/properties/id",
    },
    name: {
      examples: ["Testing"],
      type: "string",
      title: "Group Name",
      $id: "/properties/name",
    },
    is_smart: {
      examples: [true],
      type: "boolean",
      title: "Is Smart",
      $id: "/properties/is_smart",
    },
    is_notify_on_change: {
      examples: [true],
      type: "boolean",
      title: "Is Notify On Change",
      $id: "/properties/is_notify_on_change",
    },
    site: {
      type: "object",
      properties: {
        id: {
          examples: [1],
          type: "number",
          title: "Site Id",
          $id: "/properties/site/id",
        },
        name: {
          examples: ["None"],
          type: "string",
          title: "Site Name",
          $id: "/properties/site/name",
        },
      },
      title: "Site",
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
            $id: "/properties/id",
          },
          username: {
            examples: ["Jhon"],
            type: "string",
            title: "User Name",
            $id: "/properties/username",
          },
          full_name: {
            examples: ["Jhon89"],
            type: "string",
            title: "Full Name",
            $id: "/properties/full_name",
          },
          phone_number: {
            examples: "[123-1234-123]",
            type: "number",
            title: "Phone Number",
            $id: "/properties/phone_number",
          },
          email_address: {
            examples: ["johnsmith@company.com"],
            type: "string",
            title: "Email",
            $id: "/properties/email_address",
          },
        },
      },
    },
    action_success: {
      examples: [true],
      type: "boolean",
      title: "action_success",
      $id: "/properties/action_success",
    },
  },
  type: "object",
  title: "User Group",
};

type ExecuteInfo = AuthT & { groupName: string };

export const execute = (input: ExecuteInfo) => {
  let error = errors.GROUPNAME_NOT_EXIST;
  let uri = "usergroups/name";
  let method = "get";
  return getExecuteAction(input, input.groupName, error, uri, method);
};
execute({
  auth: {
    domain: "https://testsample.jamfcloud.com",
    username: "ashok",
    password: "Skitter@123",
  },
  groupName: "Hello",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
