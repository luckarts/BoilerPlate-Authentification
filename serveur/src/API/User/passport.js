import { userSearch } from "../../Services/User/User_Services";
import bcrypt from "bcrypt";


const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
    new LocalStrategy((username, password, done) => {
        console.log(username, 'user');
        userSearch(username)
            .then((user, err) => {

                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, { err: { "password": 'password incorrect' } });
                }

                bcrypt.compare(password, user.password).then((match) => {
                    if (match) {
                        return done(null, user);
                    }
                    return done((err, { "password": 'password incorrect' }));
                });
            })
            .catch(err => done(null, { err: { "password": 'password incorrect' } }));
    })
);
