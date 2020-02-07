import validate from "validate.js";


export function signIn(req, res, next) {
    const contraints = {
        "username": {
            "presence": {
                "message": "Veuillez saisir votre pseudo"
            }
        },
        "password": {
            "presence": {
                "message": "Ce mot de passe est trop court"
            }
        }
    };
	/* if (req.isAuthenticated()) {
		localStorage.clear();
	} */
    const { password, username } = req.body;
    const validation = validate({ password, username }, contraints);

    if (validation) return res.status(400).json({ error: validation });
    next();
}
