import axios from "axios";
import * as base64 from "base-64";
import * as R from "ramda";
import { errorCatches } from "../common/errors";

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
  body: string
) =>
  axios.post(`${domain}/JSSResource/${uri}`, body, header(username, password));
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
  axios.get(`${domain}/JSSResource/${uri}/${name}`, header(username, password));
export const deleteCall = (
  { domain, username, password }: inputPattern,
  name: string,
  uri: string
) =>
  axios.delete(
    `${domain}/JSSResource/${uri}/${name}`,
    header(username, password)
  );
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
        datalist = await getCall(input.auth, name, uri);
      case "delete":
        datalist = await deleteCall(input.auth, name, uri);
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
  input: any,
  error: any,
  uri: string,
  method: string,
  body: any
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
