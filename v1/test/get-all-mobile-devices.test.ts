import { execute } from "../actions/get-all-mobile-devices";
const { makeError } =require("@skitter/automation-utils");
import { errors } from "../common/errors";

describe("Get All Mobile Devices", () => {
  it("Get All Mobile Devices", async () => {
    const input = {
      auth: {
        username: "ashok",
        password: "Skitter@123",
        domain: "https://testsample.jamfcloud.com",
      },
    };
    const res = await execute(input);
    expect(res.action_success).toBe(true);
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
        domain: "https://testsample.jaclod.com",
      },
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
});
