import Doctor from "./src/doctor/doctorModel.js";

// Get doctor with users model

// Get doctors with User model
app.get("/doctor", async (req, res) => {
  const query = await Doctor.findAll({
    include: [{ model: User }],
  });
  res.json(query);
});
