/**
 * @jest-environment node
 */

import { execute } from "../actions/get-mobile-device-by-name";
const { makeError } = require("@skitter/automation-utils");
import { errors } from "../common/errors";

describe("Get Mobile Device by Name", () => {
  it("Get Mobile Device by Name", async () => {
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
      deviceName: "Tinas iPad",
    };
    const res = await execute(input);
    expect(res.action_success).toBe(true);
  }, 5000);
  it("Ivalid URL", async () => {
    const error = makeError(
      errors.DEVICE_NAME_NOT_EXIST.code,
      errors.DEVICE_NAME_NOT_EXIST.message
    );
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
      deviceName: "tinas iPad",
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
      deviceName: "Tinas iPad",
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
      deviceName: "Tinas iPad",
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
      deviceName: "Tinas iPad",
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
      deviceName: "Tinas iPad",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
  it("Device Name not Exist", async () => {
    const error = makeError(
      errors.DEVICE_NAME_NOT_EXIST.code,
      errors.DEVICE_NAME_NOT_EXIST.message
    );
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
      deviceName: "",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
  it("Device Name not Exist", async () => {
    const error = makeError(
      errors.DEVICE_NAME_NOT_EXIST.code,
      errors.DEVICE_NAME_NOT_EXIST.message
    );
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
      deviceName: "$Jn#4",
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
});
