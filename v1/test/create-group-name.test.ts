import { execute } from "../actions/create-group-name";
const { makeError } = require("@skitter/automation-utils");
import { errors } from "../common/errors";

describe("Create Group Name", () => {
  it("Create Group Name", async () => {
    const input = {
      name: "new world",
      is_smart: "true",
      is_notify_on_change: "false",
      site_name: "Tamizh",
      username: "sri",
      auth: {
        username: "Tamizh",
        password: "Skitter@123",
        domain: "https://developer.jamfcloud.com",
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
      name: "testing",
      is_smart: "true",
      is_notify_on_change: "false",
      site_name: "Tamizh",
      username: "sri",
      auth: {
        username: "asok",
        password: "Skitter@123",
        domain: "https://developer.jamfcloud.com",
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
      name: "testing",
      is_smart: "true",
      is_notify_on_change: "false",
      site_name: "Tamizh",
      username: "sri",
      auth: {
        username: "Tamizh",
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
      name: "testing",
      is_smart: "true",
      is_notify_on_change: "false",
      site_name: "Tamizh",
      username: "sri",
      auth: {
        username: "Tamizh",
        password: "Skitter@123",
        domain: "https://developer.jaclod.com",
      },
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);

  it("User Group Name Required", async () => {
    const error = makeError(
      errors.GROUP_NAME_REQUIRED.code,
      errors.GROUP_NAME_REQUIRED.message
    );
    const input = {
      name: "",
      is_smart: "true",
      is_notify_on_change: "false",
      site_name: "Tamizh",
      username: "sri",
      auth: {
        username: "Tamizh",
        password: "Skitter@123",
        domain: "https://developer.jamfcloud.com",
      },
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);

  it("Group Name Already Exist", async () => {
    const error = makeError(
      errors.GROUP_NAME_INVALID.code,
      errors.GROUP_NAME_INVALID.message
    );
    const input = {
      name: "nameGood",
      is_smart: "true",
      is_notify_on_change: "false",
      site_name: "Tamizh",
      username: "sri",
      auth: {
        username: "Tamizh",
        password: "Skitter@123",
        domain: "https://developer.jamfcloud.com",
      },
    };
    try {
      await execute(input);
    } catch (myerror) {
      expect(myerror).toStrictEqual(error);
    }
  }, 50000);
});
