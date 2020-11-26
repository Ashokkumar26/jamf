import { getExecuteAction } from "../common/utils";
import { errors } from "../common/errors";
import { AuthT, action2 } from "../common/type";

export const name = "Delete User";

export const input = [
  {
    key: "name",
    displayTitle: "Username",
    description: "Provide Username.",
    required: true,
    config: { kind: "text" },
  },
];

export const output = {
  properties: {
    action_success: {
      examples: [true],
      type: "boolean",
      title: "action_success",
      $id: "/properties/action_success",
    },
  },
  type: "object",
  title: "Delete User",
};
type ExecuteInfo = AuthT & { name: string };
export type deleteUser = {
  input: ExecuteInfo;
  uri: "users/name";
};
export const execute = (input: ExecuteInfo) => {
  let error = errors.NAME_NOT_FOUND;
  let method: action2 = "delete";
  let deleteUser: deleteUser = {
    input,
    uri: "users/name",
  };
  return getExecuteAction(deleteUser, input.name, error, method);
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
