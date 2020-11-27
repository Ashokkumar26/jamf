import { postExecuteAction } from "../common/utils";
import { errors } from "../common/errors";
import { AuthT, CreateUserGroup, action1, UserGroups } from "../common/type";

export const name = "create group name";
export const input = [
  {
    key: "name",
    displayTitle: "Group Name",
    description: "Provide group name.",
    required: true,
    config: { kind: "text" },
  },
  {
    key: "is_smart",
    displayTitle: "Is Smart",
    description: "Provide is smart.",
    required: true,
    config: {
      kind: "enum",
      values: [
        {
          text: "True",
          value: true,
        },
        { text: "False", value: false },
      ],
    },
  },
  {
    key: "is_notify_on_change",
    displayTitle: "Is Notify On Change",
    description: "Provide is notify on change.",
    required: false,
    config: {
      kind: "enum",
      values: [
        {
          text: "True",
          value: true,
        },
        { text: "False", value: false },
      ],
    },
  },
  {
    key: "site_name",
    displayTitle: "Site Name",
    description: "Provide site name.",
    required: false,
    config: { kind: "text" },
  },
  {
    key: "username",
    displayTitle: "Username",
    description: "Provide username.",
    required: false,
    config: { kind: "text" },
  },
];
const output = {
  properties: {
    id: {
      examples: [1],
      type: "number",
      title: "Id",
      $id: "/properties/id",
    },
    name: {
      examples: ["Teachers"],
      type: "string",
      title: "Name",
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
          title: "Name",
          $id: "/properties/site/name",
        },
      },
      title: "site",
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
            examples: ["AHarrison"],
            type: "string",
            title: "User Name",
            $id: "/properties/username",
          },
          full_name: {
            examples: ["Ashley Harrison"],
            type: "string",
            title: "Full Name",
            $id: "/properties/full_name",
          },
          phone_number: {
            examples: ["123-123-1234"],
            type: "string",
            title: "Phone Number",
            $id: "/properties/phone_number",
          },
          email_address: {
            examples: ["johnsmith@company.com"],
            type: "string",
            title: "Email Address",
            $id: "/properties/email_address",
          },
        },
      },
    },
  },
  type: "object",
  title: "Create Group",
};

export type ExecuteInfo = AuthT & CreateUserGroup;
export interface createT {
  input: ExecuteInfo;
  uri: "usergroups";
  body: UserGroups;
}
export type errorMessage = {
  code: string;
  message: string;
};

export const execute = (input: ExecuteInfo) => {
  let user_group: UserGroups = {
    user_group: {
      name: input.name,
      is_smart: input.is_smart == "true",
    },
  };
  if (input.is_notify_on_change || input.username) {
    user_group.user_group.is_notify_on_change =
      input.is_notify_on_change == "true" ? "true" : "false";
    user_group.user_group.users = input.username
      .split(",")
      .map((x) => ({ username: x }));
  }
  console.log("user_group", user_group);
  let error: errorMessage = errors.GROUP_NAME_INVALID;
  let method: action1 = "post";
  let createGroup: createT = {
    input,
    uri: "usergroups",
    body: user_group,
  };

  return postExecuteAction(createGroup, error, method);
};

execute({
  name: "nameGood6",
  is_smart: "true",
  is_notify_on_change: "false",
  username: "ashok",
  auth: {
    domain: "https://developer.jamfcloud.com",
    username: "Tamizh",
    password: "Skitter@123",
  },
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
