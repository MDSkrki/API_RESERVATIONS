import {Patient, User} from "../shared/models.js";

const getPatient = async (req, res)=> {
    try {
        const queryPatient = {};
        if (req.query.id) queryPatient.id = req.query.id;
        if (req.query.sex) queryPatient.sex = req.query.sex;
        if (req.query.birth_date) queryPatient.birth_date = req.query.birth_date;
        if (req.query.age) queryPatient.age = req.query.age;
        if (req.query.dni) queryPatient.dni = req.query.dni;
        if (req.query.allergies) queryPatient.allergies = req.query.allergies;
        if (req.query.address) queryPatient.address = req.query.address;
        res.json(await Patient.findAll({where: queryPatient, include: [{model: User}]}));
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

export {getPatient};