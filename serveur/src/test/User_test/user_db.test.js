import { UsernameExist, EmailExist, CreateUser } from "../../Services/User/User_DB";
import db from "../../Database/models";

describe("User Test", () => {
    it("should see if user already exist in DB", async () => {
        const check = await UsernameExist("");

        expect(check).toBe(null);
    });
    it("Throw an error because no username was passed", async () => {
        try {
            const check = await UsernameExist("");
        } catch (e) {
            expect(e.message).toMatch("no username was passed on db ");
        }
    });

    it("should see if user already exist and fail", async () => {
        const check = await UsernameExist("test");

        expect(typeof check === "object").toBe(true);
        const test = await Createusers();

        await DestroyUser(test);
    });
    // email
    it("should see if user already exist in DB", async () => {
        const check = await EmailExist("");

        expect(check).toBe(null);
    });
    it("Throw an error because no email was passed", async () => {
        try {
            const check = await EmailExist();
        } catch (e) {
            expect(e.message).toMatch("no email was passed on db ");
        }
    });
    it("should see if in user email already exist and fail", async () => {
        const check = await EmailExist("test@test.com");
        const test = await Createusers();

        await DestroyUser(test);
        expect(typeof check === "object").toBe(true);
    });

    it("should see if user already exist and fail", async () => {
        const username = "test";
        const password = "test";
        const email = "test@test.com";

        const arg = { username, password, email };
        const user = await CreateUser(arg);

        await DestroyUser(user);
        expect(typeof user === "object").toBe(true);
        expect(user.username).toBe(username);
        expect(user.password).toBe(password);
        expect(user.email).toBe(email);
    });
    it("should throw an error because no username was passed", async () => {
        try {
            const password = "test";
            const email = "test@test.com";

            const user = await CreateUser({ password, email });

            await user.destroy({ "force": true });
        } catch (e) {
            expect(e.message).toMatch("invalid argument username");
        }
    });
});
async function Createusers() {
    return await db.User.create({
        "username": "test",
        "password": "test",
        "email": "test@test.com"
    });
}
async function DestroyUser(user) {
    user.destroy({ "where": {}, "force": true });
}
