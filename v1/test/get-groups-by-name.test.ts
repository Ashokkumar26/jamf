/**
 * @jest-environment node
 */

import { execute } from "../actions/get-groups-by-name";
import { makeError } from "@skitter/automation-utils";
import { errors } from "../common/errors";

describe("Get Groups by Name", () => {
  it("Get Groups by Name", async () => {
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
      groupName: "Hello",
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
      groupName: "Hell",
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
      groupName: "Hello",
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
      groupName: "Hello",
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
      groupName: "Hello",
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
      groupName: "Hello",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
  it("Group Name not Exist", async () => {
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
      groupName: "",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
  it("Group Name not Exist", async () => {
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
      groupName: "$Jn#4",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
});
