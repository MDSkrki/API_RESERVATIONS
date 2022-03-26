import {Visit, Doctor, Patient} from "../shared/models.js";

const getVisit = async (req, res) => {
    try {
      const queryVisit = {};
      if (req.query.id) queryVisit.id = req.query.id;
      if (req.query.date) queryVisit.date = req.query.date;
      if (req.query.description) queryVisit.description = req.query.description;
      if (req.query.state) queryVisit.state = req.query.state;
      res.json(
        await Visit.findAll({
          where: queryVisit, include: [{model: Doctor}, {model: Patient}]
        })
      );
    } catch (error) {
      res.json(error);
    }
  };

// Post Visit
const postVisit = async (req, res) => {
  try {
    const createVisit = await Visit.create({
      date: req.body.date,
      description: req.body.description,
      state: req.body.state,
      idDoctor: req.body.idDoctor,
      idPatient: req.body.idPatient,
    });
    res.json(createVisit);
  } catch (error) {
    res.json(error);
  }
};

// Patch/Put Visit
const updateVisit = async (req, res) => {
  try {
    if (await Visit.findByPk(req.params.id)) {
      await Visit.update(
        {
          date: req.body.date,
          description: req.body.description,
          state: req.body.state,
          idDoctor: req.body.idDoctor,
          idPatient: req.body.idPatient,
        },
        { where: { id: req.params.id } }
      );
      res.status(200).json("Updated id = " + req.params.id);
    } else {
      res.status(404).json("Visit doesn't exist");
    }
  } catch (error) {
    res.json(error);
  }
};

//Delete Visit by id
const deleteVisit = async (req, res) => {
  try {
    if (req.params.id) {
      await Visit.destroy({
        where: { id: req.params.id },
      });
      res.json("Visit deleted id: " + req.params.id);
    }
  } catch (error) {
    res.json(error);
  }
};

export { getVisit, postVisit, updateVisit, deleteVisit };
