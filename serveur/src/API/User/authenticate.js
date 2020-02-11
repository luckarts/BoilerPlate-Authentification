import jwt from "jsonwebtoken";
import { emailExist, findUserImg } from "../../Services/User/User_DB";
import dotenv from "dotenv";
dotenv.config();

export default (req, res, next) => {

    const header = req.headers.authorization;
    let token;

    if (header) token = header.split(" ")[1];

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({ "errors": { "global": err } });
            } else {
                emailExist(decoded.user.email).then((user) => {
                    findUserImg(decoded.user.id).then((userImg) => {
                        user.dataValues.img = userImg;
                        req.user = user.dataValues;

                        next();
                    });

                });
            }
        });
    } else {
        res.status(401).json({ "errors": { "global": "No token" } });
    }
};
