import jwt from "jsonwebtoken";
import config from "../../config/config";
import { EmailExist } from "../../Services/User/User_DB";

export default (req, res, next) => {

    const header = req.headers.authorization;
    let token;

    if (header) token = header.split(" ")[ 1 ];

    if (token) {
        jwt.verify(token, config.development.jwt_secret, (err, decoded) => {
            if (err) {
                res.status(401).json({ "errors": { "global": err } });
            } else {
                EmailExist(decoded.user.email).then((user) => {
                    req.user = user.dataValues;

                    next();
                });
            }
        });
    } else {
        res.status(401).json({ "errors": { "global": "No token" } });
    }
};
