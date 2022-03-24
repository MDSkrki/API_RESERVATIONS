// Get doctor with users model

app.get('/',async (req,res) => {
    const query = await Doctor.findAll({
        include: [{model: User}]
    })
    res.json(query)
});