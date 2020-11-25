/**
 * @jest-environment node
 */

import { execute } from "../actions/delete-user-by-name";
import { makeError } from "@skitter/automation-utils";
import { errors } from "../common/errors";

describe("Delete User by Name", () => {
  it("Delete User by Name", async () => {
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
      name: "12345",
    };
    const res = await execute(input);
    expect(res.action_success).toBe(true);
  }, 5000);
  it("Ivalid URL", async () => {
    const error = makeError(
      errors.GROUPNAME_NOT_EXIST.code,
      errors.GROUPNAME_NOT_EXIST.message
    );
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
      name: "Hell",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
  it("Ivalid User", async () => {
    const error = makeError(
      errors.INVALID_CREDENTIALS.code,
      errors.INVALID_CREDENTIALS.message
    );
    const input = {
      auth: {
        username: "asok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
      name: "Hello",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
  it("Ivalid Domain URL", async () => {
    const error = makeError(
      errors.INVALID_DOMAIN_URL.code,
      errors.INVALID_DOMAIN_URL.message
    );
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://tessample.jamfcloud.com",
      },
      name: "Hello",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
  it("Ivalid Domain URL", async () => {
    const error = makeError(
      errors.INVALID_DOMAIN_URL.code,
      errors.INVALID_DOMAIN_URL.message
    );
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jalod.com",
      },
      name: "Hello",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
  it("Ivalid Domain URL", async () => {
    const error = makeError(
      errors.INVALID_DOMAIN_URL.code,
      errors.INVALID_DOMAIN_URL.message
    );
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "",
      },
      name: "Hello",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
  it("User Name Not Found", async () => {
    const error = makeError(
      errors.NAME_NOT_FOUND.code,
      errors.NAME_NOT_FOUND.message
    );
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
      name: "",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
  it("User Name Not Found", async () => {
    const error = makeError(
      errors.NAME_NOT_FOUND.code,
      errors.NAME_NOT_FOUND.message
    );
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
      name: "$Jn#4",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
});
