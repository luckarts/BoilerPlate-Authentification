import { ValidUserExist } from "../../Services/User/User_Services";
import db from "../../Database/models";

async function CreateUser() {
    return await db.User.create({
        "username": "test",
        "password": "test",
        "email": "test@test.com",
        "PermissionId": 1
    });
}
async function DestroyUser(user) {
    user.destroy({ "where": {}, "force": true });
}

describe("User Test", () => {
    it("should see if user already exist with valid email", async () => {
        const user = await ValidUserExist("test", "test@test.com");

        expect(user).toBe(null);
    });
    it("should see if user already exist and fail", async () => {
        const test = await CreateUser();
        const check = await ValidUserExist("test", "test@test.com");

        await DestroyUser(test);
        expect(typeof check === "object").toBe(true);
    });
    it("should throw an error because", async () => {
        try {
            const check = await ValidUserExist();
            const test = await CreateUser();

            await DestroyUser(test);
            expect(typeof check === "object").toBe(true);
        } catch (e) {
            expect(e.message).toMatch("username is empty");
        }
    });
});
