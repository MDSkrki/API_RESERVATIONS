import { Patient } from "./models.js";
import { tokenChecker } from "./services.js"

const authPatient = (roleToCheck) => {
    return (req, res, next) => {
        const decoded = tokenChecker(req.headers.token, process.env.JWT_SECRET);
        if(decoded.role == roleToCheck || roleToCheck == 'doctor') {
            const patient = await Patient.findByPk(decoded.id);
            if(patient.isLogged) {
                
            }
        }
    }
}