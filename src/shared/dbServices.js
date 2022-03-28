import { Doctor, Patient } from "./models.js";

const logCheck = async (role, id) => {
    if(role == 'patient') {
        const patient = await Patient.findByPk(id);
        if(patient.isLogged) return true
    }
    if(role == 'doctor') {
        const doctor = await Doctor.findByPk(id);
        if(doctor.isLogged) return true
    }
    return false
}

export {logCheck}