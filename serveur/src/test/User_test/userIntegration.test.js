import app from "../../server";
import supertest from "supertest";
import db from "../../Database/models";

const request = supertest(app);

describe("Testing Route User", () => {
    beforeAll((done) => {
        db.User.destroy({
            "where": {},
            "truncate": { "cascade": true }
        });
        done();
    });

    it("gets the test endpoint", async (done) => {
        const response = await request.get("/api/users");

        expect(response.status).toBe(200);
        expect(response.body.message).toMatch("welcome on User api");
        done();
    });

    it("post signup endpoint", async (done) => {
        const username = "test";
        const password = "test";
        const email = "test@test.com";


        request
            .post("/api/users/signup")
            .send({ username, password, email })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.body.message).toMatch("User has been signed up !");
                done();
            });
    });

    it("delete User endpoint ", async (done) => {
        const response = await request.delete("/api/users/delete/test");

        expect(response.status).toBe(200);
        expect(response.body.message).toMatch("User has been delete!");
        done();
    });
    it("post signup endpoint", async (done) => {
        const password = "test";
        const email = "test@test.com";

        request
            .post("/api/users/signup")
            .send({ password, email })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(500)
            .end((err, res) => {
                console.log(res.body.error.username[0]);
                expect(res.body.error.username[0]).toMatch(
                    "Veuillez saisir votre pseudo"
                );
                done();
            });
    });
});
