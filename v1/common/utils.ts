import axios from "axios";
import * as base64 from "base-64";
import * as R from "ramda";
import {
  createT,
  errorMessage,
  ExecuteInfo,
} from "../actions/create-group-name";
import { deleteUser } from "../actions/delete-user-by-name";
import { getAllMobile } from "../actions/get-all-mobile-devices";
import { getGroupName } from "../actions/get-groups-by-name";
import { mobileDeviceName } from "../actions/get-mobile-device-by-name";
import { errorCatches } from "../common/errors";
import { UserGroups } from "./type";
const jsonxml = require("jsontoxml");

const encodeCredentials = (username: string, password: string) =>
  R.compose(
    R.concat("Basic "),
    base64.encode,
    R.join(":")
  )([username, password]);

const header = (username: string, password: string) => ({
  headers: {
    authorization: encodeCredentials(username, password),
    Accept: "application/json",
    "Content-Type": "application/xml",
  },
});
interface inputPattern {
  domain: string;
  username: string;
  password: string;
}
export const postCall = (
  { domain, username, password }: inputPattern,
  uri: string,
  body: UserGroups
) =>
  axios.post(
    `${domain}/JSSResource/${uri}`,
    jsonxml(body),
    header(username, password)
  );
export const putCall = (
  { domain, username, password }: inputPattern,
  uri: string,
  body: any
) =>
  axios.put(`${domain}/JSSResource/${uri}`, body, header(username, password));
export const getCall = (
  { domain, username, password }: inputPattern,
  name: string,
  uri: string
) =>
  axios.get(`${domain}/JSSResource/${uri}${name}`, header(username, password));
export const deleteCall = (
  { domain, username, password }: inputPattern,
  name: string,
  uri: string
) =>
  axios.delete(
    `${domain}/JSSResource/${uri}/${name}`,
    header(username, password)
  );
let addSlash = function (name: string): string {
  return (name = name ? (name.length ? `/${name}` : name) : "");
};

// type MakeRequestT<T, U> = {
//   input: T extends object ? T : never;
//   uri: U extends string ? U : never;
// };

// type CreateInputT = MakeRequestT<ExecuteInfo, "usergroup/name">;

export const getExecuteAction = async (
  {
    input,
    uri,
  }:
    | mobileDeviceName
    | getAllMobile
    | getGroupName
    | deleteUser
    | postExecution,
  name: string,
  error: errorMessage,
  method: string
) => {
  try {
    switch (method) {
      case "get":
        let datalist = await getCall(input.auth, addSlash(name), uri);
        return { ...datalist.data, action_success: true };
      case "delete":
        await deleteCall(input.auth, name, uri);
        return { action_success: true };
    }
  } catch (err) {
    throw errorCatches(err, error);
  }
};
export const postExecuteAction = async (
  { input, uri, body }: createT,
  error: errorMessage,
  method: string
) => {
  try {
    switch (method) {
      case "post":
        await postCall(input.auth, uri, body);
        break;
      case "put":
        await putCall(input.auth, uri, body);
        break;
    }
    let postmanExecute: postExecution = {
      input,
      uri: `${uri}/name`,
    };
    return await getExecuteAction(postmanExecute, input.name, error, "get");
  } catch (err) {
    throw errorCatches(err, error);
  }
};
export type postExecution = {
  input: ExecuteInfo;
  uri: string;
};
