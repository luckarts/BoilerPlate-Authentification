import { validUserExist } from "../../Services/User/User_Services";
import db from "../../Database/models";

async function createUser() {
    return await db.User.create({
        "username": "test",
        "password": "test",
        "email": "test@test.com",
        "PermissionId": 1
    });
}
async function destroyUser(user) {
    user.destroy({ "where": {}, "force": true });
}

describe("User Test", () => {
    it("should see if user already exist with valid email", async () => {
        const user = await validUserExist("test", "test@test.com");

        expect(user).toBe(null);
    });
    it("should see if user already exist and fail", async () => {
        const test = await createUser();
        const check = await validUserExist("test", "test@test.com");

        await destroyUser(test);
        expect(typeof check === "object").toBe(true);
    });
    it("should throw an error because", async () => {
        try {
            const check = await validUserExist();
            const test = await createUser();

            await destroyUser(test);
            expect(typeof check === "object").toBe(true);
        } catch (e) {
            expect(e.message).toMatch("username is empty");
        }
    });
});
