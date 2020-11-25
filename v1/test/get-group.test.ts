/**
 * @jest-environment node
 */
import { execute } from "../actions/get-group";
describe("Sample test case", () => {
 it("Success case", async () => {
 let input = {
 auth: {
 username: "ashok",
 password: "Skitter@123",
 domain: "https://testsample.jamfcloud.com",
 },
 groupName: "Hello",
 };
 let res = await execute(input);
 expect(res.action_success).toBe(true);
 });
});