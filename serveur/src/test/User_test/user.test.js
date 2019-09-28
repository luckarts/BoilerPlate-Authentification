import db from "../../Database/models";
import { ValidUserExist } from "../../Services/User/User_Services";

async function CreateUser() {
    return await db.User.create({
        "username": "test",
        "password": "test",
        "email": "test@test.com"
    });
}
async function DestroyUser(user) {
    user.destroy({ "where": {}, "force": true });
}

describe("User Test", () => {
    it("should see if user already exist ", async () => {
        const user = await ValidUserExist("test", "test@test.com");

        expect(user).toBe(null);
    });
    it("should see if user already exist and fail", async () => {
        const test = await CreateUser();
        const check = await ValidUserExist("test", "test@test.com");

        await DestroyUser(test);
        expect(typeof check === "object").toBe(true);
    });
    it("should see if user already exist and fail", async () => {
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
