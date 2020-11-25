import { makeError } from "@skitter/automation-utils";

export const errors = {
  GROUPNAME_NOT_EXIST: {
    code: "GROUPNAME_NOT_EXIST",
    message: "Group name doesn't exist",
  },
  DEVICE_NAME_NOT_EXIST: {
    code: "DEVICE_NAME_NOT_EXIST",
    message: "Device name doesn't exist",
  },
  INVALID_CREDENTIALS: {
    code: "INVALID_CREDENTIALS",
    message: "username, password Invalid or unAuthorized user",
  },
  INVALID_DOMAIN_URL: {
    code: "INVALID_DOMAIN_URL",
    message:
      "This URL doesn't exist on the server. Verify that the URL is correct",
  },
  INVALID_GROUPNAME: {
    code: "INVALID_GROUPNAME",
    message: "Invalid Group name",
  },
  NAME_NOT_FOUND: {
    code: "NAME_NOT_FOUND",
    message: "Name doesn't found",
  },
  GROUP_NAME_INVALID: {
    code: "GROUP_NAME_INVALID",
    message: "Group Name Invalid or Exist",
  },
};
export const errorCatches = (err: any, notExistName: any) => {
  let error = err.response;
  if (error == undefined) {
    switch (err.code) {
      case "ENOTFOUND":
        throw makeError(
          errors.INVALID_DOMAIN_URL.code,
          errors.INVALID_DOMAIN_URL.message
        );
      case "ETIMEDOUT":
        throw makeError(
          errors.INVALID_DOMAIN_URL.code,
          errors.INVALID_DOMAIN_URL.message
        );
      case "ECONNREFUSED":
        throw makeError(
          errors.INVALID_DOMAIN_URL.code,
          errors.INVALID_DOMAIN_URL.message
        );
    }
  }
  if (error !== undefined) {
    switch (error.status) {
      case 403:
        throw makeError(
          errors.INVALID_DOMAIN_URL.code,
          errors.INVALID_DOMAIN_URL.message
        );
      case 404:
        throw makeError(notExistName.code, notExistName.message);
      case 409:
        throw makeError(notExistName.code, notExistName.message);
      case 400:
        throw makeError(notExistName.code, notExistName.message);
      case 401:
        throw makeError(
          errors.INVALID_CREDENTIALS.code,
          errors.INVALID_CREDENTIALS.message
        );
    }
  }
  throw err;
};
