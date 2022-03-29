import { Doctor, Patient, Visit } from "./models.js";

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

const visitCreator = async (patient, doctor, body) => {
    const visit = await Visit.create({
        description: body.description,
        state: body.state,
        idDoctor: doctor.id,
        idPatient: patient.id
    })
}

export {logCheck, visitCreator}