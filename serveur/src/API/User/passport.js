import { UserSearch } from '../../Services/User/User_Services';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validate from 'validate.js';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(
    new LocalStrategy(function (username, password, done) {
        UserSearch(username)
            .then((user, err) => {
                if (err) {
                    return done((err = { username: 'username incorrect' }));
                }
                if (!user) {
                    return done((err = { username: 'username incorrect' }));
                }

                bcrypt.compare(password, user.password).then(match => {
                    if (match) {
                        return done(null, user);
                    }
                    return done((err = { password: 'password incorrect' }));
                });
            })
            .catch(err => done((err = { password: 'error' })));
    })
);
