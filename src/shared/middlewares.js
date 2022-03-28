import { decode } from "jsonwebtoken";
import { logCheck } from "./dbServices.js";
import { tokenChecker } from "./services.js"

const auth = (roleToCheck) => { 
    return (req, res, next) => {
        try {
            const decoded = tokenChecker(req.headers.token, process.env.JWT_SECRET);
            if(decoded.role === roleToCheck || decoded.role === 'Doctor') {
                console.log(decoded);
                if(logCheck(decoded.role, decoded.id)) {
                    next();
                } else {
                    res.json('You are not authorized');
                }   
            }else {
                res.status(403).json('Unauthorized')
            }
        } catch (error) {
            console.log(error);
            res.json('Token not valid');
        }
    }
}

export {auth}