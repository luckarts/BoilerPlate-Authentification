
import { updateUser, updatePassword } from "../../../Services/User/User_DB";
import { userSearch } from "../../../Services/User/User_Services";
import bcrypt from "bcrypt";

export async function update_User(req, res) {
    const id = req.params.id;
    const { oldUsername, username, email, password, newPassword, confirmPassword, newImage } = req.body;


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
    if (email || newImage || username) {
        console.log(newImage);
        await updateUser({ id, username, email, newImage });
        return res.status(200).json({ "message": "User has been update" });
    }
    return null;
}
