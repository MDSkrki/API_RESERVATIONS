import {Visit} from "../shared/models.js";

const getVisits = async (req, res) => {
  try {
    const filter = req.query;
    const query = await Visit.findAll({
      where: filter,
    });
    res.json(query);
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
      FK_idDoctor: req.body.FK_idDoctor,
      FK_idPatient: req.body.FK_idPatient,
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
          FK_idDoctor: req.body.FK_idDoctor,
          FK_idPatient: req.body.FK_idPatient,
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

export { getVisits, postVisit, updateVisit, deleteVisit };
