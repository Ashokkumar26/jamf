import { postExecuteAction } from "../common/utils";
import { errors } from "../common/errors";
import { AuthT, CreateUserGroup } from "../common/type";
import jsonxml from "jsontoxml";

export const id = "create group name";
export const input = [
  {
    key: "name",
    displayTitle: "Group Name",
    description: "Provide Group Name.",
    required: true,
    config: { kind: "text" },
  },
  {
    key: "is_smart",
    displayTitle: "Is Smart",
    description: "Provide Is Smart.",
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
    description: "Provide Is Notify On Change.",
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
    description: "Provide Site Name.",
    required: true,
    config: { kind: "text" },
  },
  {
    key: "username",
    displayTitle: "Username",
    description: "Provide username.",
    required: true,
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
    criteria: {
      type: "collection",
      title: "Criteria",
      $id: "/properties/criteria",
      item: {
        type: "object",
        properties: {
          name: {
            examples: ["Email Address"],
            type: "string",
            title: "Name Details",
            $id: "/properties/name",
          },
          priority: {
            examples: [0],
            type: "number",
            title: "Priority",
            $id: "/properties/priority",
          },
          and_or: {
            examples: ["and"],
            type: "string",
            title: "And Or",
            $id: "/properties/and_or",
          },
          search_type: {
            examples: ["like"],
            type: "string",
            title: "Search Type Details",
            $id: "/properties/search_type",
          },
          value: {
            examples: ["company.com"],
            type: "string",
            title: "Value",
            $id: "/properties/value",
          },
          opening_paren: {
            examples: [false],
            type: "boolean",
            title: "Opening Paren",
            $id: "/properties/opening_paren",
          },
          closing_paren: {
            examples: [false],
            type: "boolean",
            title: "Closing Paren",
            $id: "/properties/closing_paren",
          },
        },
      },
    },
    users: {
      type: "collection",
      title: "Users",
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
            examples: "[AHarrison]",
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
            examples: '["aharrison',
            type: "string",
            title: "Email Address",
            $id: "/properties/email_address",
          },
        },
      },
    },
  },
  type: "object",
};

type ExecuteInfo = AuthT & CreateUserGroup;

export const execute = (input: ExecuteInfo) => {
  let user_group = {
    user_group: {
      name: input.name,
      is_smart: input.is_smart == "true",
      is_notify_on_change: input.is_notify_on_change ? "true" : "false",
      users: input.username ? [{ username: input.username }] : [],
    },
  };
  type action = "post" | "put";
  let error = errors.GROUP_NAME_INVALID;
  let uri = "usergroups";
  let method: action = "post";

  return postExecuteAction(input, error, uri, method, jsonxml(user_group));
};

execute({
  name: "postmanAF",
  is_smart: "true",
  is_notify_on_change: "false",
  username: "ashok",
  auth: {
    domain: "https://testsample.jamfcloud.com",
    username: "ashok",
    password: "Skitter@123",
  },
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
