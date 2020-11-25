import axios from "axios";
import * as base64 from "base-64";
import * as R from "ramda";
import { createT, ExecuteInfo } from "../actions/create-group-name";
import { errorCatches } from "../common/errors";
import { CreateUserGroup, UserGroups } from "./type";
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
  return (name = name && name.length ? `/${name}` : name);
};
export const getExecuteAction = async (
  input: any,
  name: string,
  error: any,
  uri: string,
  method: string
) => {
  try {
    let datalist: any;
    switch (method) {
      case "get":
        datalist = await getCall(input.auth, addSlash(name), uri);
        break;
      case "delete":
        datalist = await deleteCall(input.auth, name, uri);
        break;
    }
    let list = datalist.data;
    switch (method) {
      case "delete":
        return { action_success: true };
      case "get":
        return { ...list, action_success: true };
    }
  } catch (err) {
    throw errorCatches(err, error);
  }
};
export const postExecuteAction = async (
  { input, uri, body }: createT,
  error: any,
  method: string
) => {
  try {
    switch (method) {
      case "post":
        await postCall(input.auth, uri, body);
      case "put":
        await putCall(input.auth, uri, body);
    }
    let url = `${uri}/name`;
    return await getExecuteAction(input, input.name, error, url, "get");
  } catch (err) {
    throw errorCatches(err, error);
  }
};
