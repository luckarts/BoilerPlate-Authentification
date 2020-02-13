
import { updateUser, createImg, updateImg } from "../../../Services/User/User_DB";
import { userSearch } from "../../../Services/User/User_Services";
import bcrypt from "bcrypt";

export async function update_User(req, res) {

    let path = req.file
    const id = req.params.id;
    const { oldUsername, username, email, password, newPassword, confirmPassword } = req.body;

    if (password && newPassword && confirmPassword) {

        const userExist = await userSearch(oldUsername);

        if (!userExist) return res.status(400).json({ "error": "user incorrect" });

        if (userExist && newPassword === confirmPassword) {
            const match = bcrypt.compare(password, userExist.password);

            if (!match) return res.status(400).json({ "error": "password  is not valid" });
            if (match) {
                await updateUser({ id, password, newPassword, confirmPassword, img });
                return res.status(200).json({ "message": "User has been update" });
            }

        }
    }


    if (email || path || username) {
        if (path) path = req.file.filename;
        await updateUser({ id, username, email, path });
        return res.status(200).json({ "message": "User has been update" });
    }
    return null;
}

export async function create_Img(req, res) {

    if (req.file) img = req.file.path

    const Img = await createImg({ img });
    if (Img) {
        return res.status(200).json({ Img });
    }
    else return null;
}
export async function update_Img(req, res) {

    let img = req.file;
    const id = req.params.id;

    if (req.file) img = req.file.filename;

    const Img = await updateImg({ img, id });
    if (Img) {
        return res.status(200).json({ Img });
    }
    else return null;
}