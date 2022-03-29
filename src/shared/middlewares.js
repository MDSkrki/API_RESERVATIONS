import { logCheck } from "./dbServices.js";
import { tokenChecker } from "./services.js";

const auth = (roleToCheck) => {
    return async (req, res, next) => {
        try {
            const decoded = tokenChecker(req.headers.token, process.env.JWT_SECRET);
            if (decoded.role === roleToCheck || decoded.role === 'Doctor') {
                if (await logCheck(decoded.id)) {
                    next();
                } else {
                    res.json('You appear to be logged out. Please log in.');
                }
            } else {
                res.status(403).json('Unauthorized');
            }
        } catch (error) {
            console.log(error);
            res.json('Token not valid');
        }
    }
}

export { auth };