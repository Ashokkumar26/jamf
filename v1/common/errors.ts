import { includes } from "ramda";

const { makeError } = require("@skitter/automation-utils");

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
  IS_SMART_REQUIRED: {
    code: "IS_SMART_REQUIRED",
    message: "Provide Is Smart Attribute",
  },
  GROUP_NAME_REQUIRED: {
    code: "GROUP_NAME_REQUIRED",
    message: "User Group Name is Required",
  },
  INVALID_INPUT: {
    code: "INVALID_INPUT",
    message: "Provide Valid Input",
  },
  SERVER_NOT_FOUND: {
    code: "SERVER_NOT_FOUND",
    message: "The server has not found anything matching the request URI",
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
    let b = err.response.data;
    let internalError;
    switch (error.status) {
      case 403:
        throw makeError(
          errors.INVALID_DOMAIN_URL.code,
          errors.INVALID_DOMAIN_URL.message
        );
      case 404:
        internalError = b.includes("server has not found")
          ? makeError(
              errors.SERVER_NOT_FOUND.code,
              errors.SERVER_NOT_FOUND.code
            )
          : makeError(notExistName.code, notExistName.message);
        throw internalError;
      case 409:
        internalError = b.includes("Duplicate name")
          ? makeError(
              errors.GROUP_NAME_INVALID.code,
              errors.GROUP_NAME_INVALID.message
            )
          : b.includes("is_smart")
          ? makeError(
              errors.IS_SMART_REQUIRED.code,
              errors.IS_SMART_REQUIRED.message
            )
          : b.includes("UserGroup name is required")
          ? makeError(
              errors.GROUP_NAME_REQUIRED.code,
              errors.GROUP_NAME_REQUIRED.message
            )
          : makeError(errors.INVALID_INPUT.code, errors.INVALID_INPUT.message);
        throw internalError;
      case 400:
        throw makeError(notExistName.code, notExistName.message);
      case 401:
        throw makeError(
          errors.INVALID_CREDENTIALS.code,
          errors.INVALID_CREDENTIALS.message
        );
      default:
        throw makeError(
          errors.INVALID_INPUT.code,
          errors.INVALID_INPUT.message
        );
    }
  }
  throw err;
};
