import { getExecuteAction } from "../common/utils";
import { errors } from "../common/errors";
import { AuthT, action2 } from "../common/type";
export const input = [
  {
    key: "username",
    displayTitle: "User Name",
    description: "Provide user name.",
    required: true,
    config: { kind: "text" },
  },
];
export const output = {
  properties: {
    mobile_devices: {
      type: "collection",
      title: "mobile_devices",
      $id: "/properties/mobile_devices",
      item: {
        type: "object",
        properties: {
          id: {
            examples: [1],
            type: "number",
            title: "Id",
            $id: "/properties/id",
          },
          name: {
            examples: ["Tinas iPad"],
            type: "string",
            title: "Name",
            $id: "/properties/name",
          },
          device_name: {
            examples: ["Tinas iPad"],
            type: "string",
            title: "Device Name",
            $id: "/properties/device_name",
          },
          udid: {
            examples: ["270aae10800b6e61a2ee2bbc285eb967050b5984"],
            type: "string",
            title: "Udid",
            $id: "/properties/udid",
          },
          serial_number: {
            examples: ["C02Q7KHTGFWF"],
            type: "string",
            title: "Serial Number",
            $id: "/properties/serial_number",
          },
          phone_number: {
            examples: ["123-1234-123"],
            type: "string",
            title: "Phone Number",
            $id: "/properties/phone_number",
          },
          wifi_mac_address: {
            examples: ["E0:AC:CB:97:36:G4"],
            type: "string",
            title: "Wifi Mac Address",
            $id: "/properties/wifi_mac_address",
          },
          managed: {
            examples: [true],
            type: "boolean",
            title: "Managed",
            $id: "/properties/managed",
          },
          supervised: {
            examples: [true],
            type: "boolean",
            title: "Supervised",
            $id: "/properties/supervised",
          },
          model: {
            examples: ["iPhone 6s"],
            type: "string",
            title: "Model",
            $id: "/properties/model",
          },
          model_identifier: {
            examples: ["iPhone8,1"],
            type: "string",
            title: "Model Identifier",
            $id: "/properties/model_identifier",
          },
          modelDisplay: {
            examples: ["iPhone 6s"],
            type: "string",
            title: "ModelDisplay",
            $id: "/properties/modelDisplay",
          },
          model_display: {
            examples: ["iPhone 6s"],
            type: "string",
            title: "Model Display",
            $id: "/properties/model_display",
          },
          username: {
            examples: ["Jhon"],
            type: "string",
            title: "User Name",
            $id: "/properties/username",
          },
        },
      },
    },
    action_success: {
      examples: [true],
      type: "boolean",
      title: "action_success",
      $id: "/properties/action_success",
    },
  },
  type: "object",
  title: "MobileDevices",
};
type ExecuteInfo = AuthT;
export type getAllMobile = {
  input: ExecuteInfo;
  uri: "mobiledevices";
};
export const execute = async (input: ExecuteInfo) => {
  let error = errors.NAME_NOT_FOUND;
  let method: action2 = "get";
  let name = "";
  let getAllMobileDevice: getAllMobile = {
    input,
    uri: "mobiledevices",
  };
  return getExecuteAction(getAllMobileDevice, name, error, method);
};
execute({
  auth: {
    domain: "https://testsample.jamfcloud.com",
    username: "ashok",
    password: "Skitter@123",
  },
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
