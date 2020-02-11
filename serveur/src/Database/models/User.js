import bcrypt from "bcrypt";
import db from "../models";
const Salt_Factor = 10;

export default (connection, DataTypes) => {
    const User = connection.define("User", {
        "id": {
            "type": DataTypes.INTEGER(11),
            "allowNull": false,
            "autoIncrement": true,
            "primaryKey": true
        },
        "username": {
            "type": DataTypes.STRING(20),
            "allowNull": false,
            "required": true
        },
        "password": {
            "type": DataTypes.STRING(500),
            "allowNull": false,
            "required": true
        },
        "email": {
            "type": DataTypes.STRING(30),
            "allowNull": false,
            "lowercase": true,
            "trim": true,
            "unique": true,
            "required": true
        }
    });

    // Will also add PermissionID to User model
    User.associate = (models) => {
        User.belongsTo(models.Permission);
        User.hasMany(models.UserImg);

    };

    /*
Function crypt password.
Returns hash password .
 */

    function cryptPassword(password) {

        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err) => {
                // Encrypt password using bycrpt module
                if (err) {
                    return reject(err);
                }

                bcrypt.hash(password, Salt_Factor).then((hash) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(hash);
                });
            });
        });
    }


    /* Node is single threaded + Bcrypt is slow => This will make the server unresponsive for the duration of
     the synchronous functions.  */
    // Method before create user replace crypte password


    if (process.env.NODE_ENV !== "test") {

        User.addHook("beforeCreate", (user) => {

            return cryptPassword(user.dataValues.password)
                .then((success) => {
                    user.password = success;
                })
                .catch((err) => {
                    if (err) {
                        console.log(err);
                    }
                });
        });

    }


    User.addHook("beforeBulkUpdate", (user) => {
        if (user.attributes.password) {
            return cryptPassword(user.attributes.password)
                .then((success) => {
                    user.attributes.password = success;
                })
                .catch((err) => {
                    if (err) {
                        console.log(err);
                    }
                });
        }
    });

    return User;
}
