import Visit from "./visitModel.js";

export const getVisits = async (req, res) => {
    try {
        const filter = req.query; 
        const query = await Visit.findAll({
            where: filter,
        });
    res.json(query);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

export const postVisit = async (req,res) => {
    try {
        const query = 'Post working';
        console.log(query);
        res.json(query);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}